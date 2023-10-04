import React, {FC} from 'react';
import style from "./JoinForm.module.scss"
import {SubmitHandler, useForm} from "react-hook-form";
import {IJoinForm, JoinFormTypes, JoinFormTypesInterface} from "./JoinFormTypes";
import Input, {sizeInput} from "../../Components/Input/FormInput/Input";
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {EMAIL_REGEXP, PHONE_REGEXP} from "../../utils/const/regexp";

const JoinForm: FC<JoinFormTypesInterface> = ({type}) => {

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isSubmitSuccessful}
    } = useForm<IJoinForm>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<IJoinForm> = (data) => {

    }

    const inputWidth = type === JoinFormTypes.event || type === JoinFormTypes.course ? 49.5 : 29.1
    const buttonText = type === JoinFormTypes.event ? "Join the event" : "Join the course"
    const inputSize = type === JoinFormTypes.raw ? sizeInput.medium : sizeInput.large

    return (
        <form className={style.form + " " + style[type]} onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder={"Your full name"} width={inputWidth} sizeInput={inputSize}
                   register={register("name", {
                       required: "Required",
                   })} errors={errors.name?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                   label={"Full Name"}/>
            <Input placeholder={"Your working email"} width={inputWidth} sizeInput={inputSize}
                   register={register("email", {
                       required: "Required",
                       pattern: {
                           value: EMAIL_REGEXP,
                           message: "Please enter valid email"
                       }
                   })} errors={errors.email?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                   label={"Email"}/>
            <Input placeholder={"Your phone number"} width={inputWidth} sizeInput={inputSize}
                   register={register("phone", {
                       required: "Required",
                       pattern: {
                           value: PHONE_REGEXP,
                           message: "Please enter valid phone"
                       }
                   })} errors={errors.phone?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                   label={"Phone"}/>
            <Button text={buttonText} variant={ButtonVariant.solid}
                    size={type === JoinFormTypes.raw ? ButtonSize.regular : ButtonSize.large}/>
        </form>
    );
};

export default JoinForm;