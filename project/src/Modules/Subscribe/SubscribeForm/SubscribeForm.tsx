import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ISubscribeForm} from "./ISubscribeForm";
import Input, {sizeInput} from "../../../Components/Input/FormInput/Input";
import Button from "../../../Components/Button/Button";
import {ButtonSize, ButtonVariant} from "../../../Components/Button/ButtonTypes";


const SubscribeForm: FC = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isSubmitSuccessful}
    } = useForm<ISubscribeForm>({mode: "onSubmit"})

    const onSubmit: SubmitHandler<ISubscribeForm> = (data) => {

    }


    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", gap: "2.4rem"}}>
            <Input register={register("email", {
                required: "Required",
                pattern: {
                    value: EMAIL_REGEXP,
                    message: "Please enter valid email"
                }
            })} placeholder={"Your working email"} width={42.2}
                   sizeInput={sizeInput.large} errors={errors.email?.message} isSuccessful={isSubmitSuccessful}
                   isDirty={isDirty}/>
            <Button text={"Subscribe"} variant={ButtonVariant.solid} size={ButtonSize.large}/>
        </form>
    );
};

export default SubscribeForm