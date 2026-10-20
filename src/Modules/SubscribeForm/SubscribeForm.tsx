import React, {FC, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ISubscribeForm} from "./ISubscribeForm";
import Input, {sizeInput} from "../../Components/Input/FormInput/Input";
import Button from "../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../Components/Button/ButtonTypes";
import style from "./SubscribeForm.module.scss";
import {ReactComponent as ArrowSVG} from "../../assets/icons/arrows/arrowRigthSVG.svg";
import {EMAIL_REGEXP} from "../../utils/const/regexp";
import {emailAPI} from "../../Redux/API/email/emailAPI";


export interface SubscribeFormTypes {
    isFooterForm?: boolean
}

const SubscribeForm: FC<SubscribeFormTypes> = ({isFooterForm}) => {
    const [submitMessage, setSubmitMessage] = useState("")

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isSubmitSuccessful}
    } = useForm<ISubscribeForm>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<ISubscribeForm> = async (data) => {
        setSubmitMessage("")
        try {
            await emailAPI.subscribe(data.email)
            setSubmitMessage("You are subscribed.")
        } catch (error) {
            setSubmitMessage(error instanceof Error ? error.message : "Could not subscribe.")
        }
    }


    return (
        <>
            {
                isFooterForm ?
                    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                        <Input placeholder={"Email address"} width={26} sizeInputProps={sizeInput.small}
                               register={register("email", {
                                   required: "Required",
                                   pattern: {
                                       value: EMAIL_REGEXP,
                                       message: "Please enter valid email"
                                   }
                               })} errors={errors.email?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}
                               theme={"light"}/>
                        <button><ArrowSVG/></button>
                        <span aria-live="polite">{submitMessage}</span>
                    </form> :
                    <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", gap: "2.4rem"}}>
                        <Input register={register("email", {
                            required: "Required",
                            pattern: {
                                value: EMAIL_REGEXP,
                                message: "Please enter valid email"
                            }
                        })} placeholder={"Your working email"} width={42.2}
                               sizeInputProps={sizeInput.large} errors={errors.email?.message}
                               isSuccessful={isSubmitSuccessful}
                               isDirty={isDirty}/>
                        <Button text={"Subscribe"} variant={ButtonVariant.solid} size={ButtonSize.large}/>
                        <span aria-live="polite">{submitMessage}</span>
                    </form>
            }
        </>
    );
};

export default SubscribeForm
