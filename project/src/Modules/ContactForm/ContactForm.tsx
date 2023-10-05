import React from 'react';
import style from "./ContactForm.module.scss"
import {SubmitHandler, useForm} from "react-hook-form";
import {IContactForm} from "./IContactForm";
import Input, {sizeInput} from "../../Components/Input/FormInput/Input";
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import {EMAIL_REGEXP, PHONE_REGEXP} from "../../utils/const/regexp";
import CheckBox from "../../Components/CheckBox/CheckBox";

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isSubmitSuccessful}
    } = useForm<IContactForm>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<IContactForm> = (data) => {
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.block}>
                <Input placeholder={"Your first name"} width={34} sizeInputProps={sizeInput.large}
                       register={register("firstName", {
                           required: "Required"
                       })} errors={errors.firstName?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                       label={"First Name*"}/>
                <Input placeholder={"Your last name"} width={34} sizeInputProps={sizeInput.large}
                       register={register("lastName", {
                           required: "Required"
                       })} errors={errors.lastName?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                       label={"Last Name*"}/>
            </div>
            <div className={style.block}>
                <Input placeholder={"Your working email"} width={34} sizeInputProps={sizeInput.large}
                       register={register("email", {
                           required: "Required",
                           pattern: {
                               value: EMAIL_REGEXP,
                               message: "Please enter valid email"
                           }
                       })} errors={errors.email?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                       label={"Email*"}/>
                <Input placeholder={"Your phone number"} width={34} sizeInputProps={sizeInput.large}
                       register={register("phone", {
                           pattern: {
                               value: PHONE_REGEXP,
                               message: "Please enter valid phone"
                           }
                       })} errors={errors.phone?.message} isSuccessful={isSubmitSuccessful}
                       isDirty={isDirty}
                       label={"Phone"}/>
            </div>
            <Input placeholder={"Your message"} width={70.5} sizeInputProps={sizeInput.textArea}
                   register={register("message", {
                       required: "Required"
                   })} errors={errors.message?.message} isSuccessful={isSubmitSuccessful}
                   isDirty={isDirty}
                   label={"Message*"}/>
            <div style={{display: "flex", gap: "5rem"}}>
                <CheckBox text={"I agree to receive communications from Createx Online School"} width={31.5}/>
                <Button text={"Send message"} variant={ButtonVariant.solid} size={ButtonSize.large} width={34}/>
            </div>
        </form>
    );
};

export default ContactForm;