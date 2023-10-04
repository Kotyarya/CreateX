import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ISubscribeForm} from "./ISubscribeForm";
import Input, {sizeInput} from "../../Components/Input/FormInput/Input";
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import style from "./SubscribeForm.module.scss";
import {ReactComponent as ArrowSVG} from "../../assets/icons/arrows/arrowRigthSVG.svg";
import {EMAIL_REGEXP} from "../../utils/const/regexp";


export interface SubscribeFormTypes {
    isFooterForm?: boolean
}

const SubscribeForm: FC<SubscribeFormTypes> = ({isFooterForm}) => {

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isSubmitSuccessful}
    } = useForm<ISubscribeForm>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<ISubscribeForm> = (data) => {
    }


    return (
        <>
            {
                isFooterForm ?
                    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                        <Input placeholder={"Email address"} width={26} sizeInput={sizeInput.small}
                               register={register("email", {
                                   required: "Required",
                                   pattern: {
                                       value: EMAIL_REGEXP,
                                       message: "Please enter valid email"
                                   }
                               })} errors={errors.email?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                               theme={"light"}/>
                        <button><ArrowSVG/></button>
                    </form> :
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", gap: "2.4rem"}}>
                        <Input register={register("email", {
                            required: "Required",
                            pattern: {
                                value: EMAIL_REGEXP,
                                message: "Please enter valid email"
                            }
                        })} placeholder={"Your working email"} width={42.2}
                               sizeInput={sizeInput.large} errors={errors.email?.message}
                               isSuccessful={isSubmitSuccessful}
                               isDirty={isDirty}/>
                        <Button text={"Subscribe"} variant={ButtonVariant.solid} size={ButtonSize.large}/>
                    </form>
            }
        </>
    );
};

export default SubscribeForm