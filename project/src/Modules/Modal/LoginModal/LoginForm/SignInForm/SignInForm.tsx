import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ISignInForm} from "./ISignInForm";
import Input, {sizeInput} from "../../../../../Components/Input/FormInput/Input";
import {ReactComponent as EyeSVG} from "../../../../../assets/icons/other/Eye.svg";
import style from "./SignInForm.module.scss"
import Button from "../../../../../Components/Button/Button";
import {ButtonSize, ButtonType, ButtonVariant} from "../../../../../Components/Button/ButtonTypes";

const SignInForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isSubmitSuccessful}
    } = useForm<ISignInForm>()

    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        console.log(data.password)
    }

    const [showPass, setShowPass] = useState<boolean>(false)

    const showPassHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setShowPass(!showPass)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <Input placeholder={"Your working email"} width={39} sizeInputProps={sizeInput.medium}
                   register={register("email", {})} errors={errors.email?.message} isSuccessful={isSubmitSuccessful}
                   isDirty={isDirty} label={"Email"}/>
            <div className={style.password}>
                <Input placeholder={"Password"} width={34.2} sizeInputProps={sizeInput.medium}
                       register={register("password", {})} errors={errors.password?.message}
                       isSuccessful={isSubmitSuccessful}
                       isDirty={isDirty} label={"Password"} type={showPass ? "text" : "password"} theme={"pass"}/>
                <button onClick={showPassHandler}><EyeSVG/></button>
            </div>
            <Button text={"Sign in"} variant={ButtonVariant.solid} size={ButtonSize.large} type={ButtonType.submit}/>
        </form>
    );
};

export default SignInForm;