import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ISignInForm} from "./ISignInForm";
import Input, {sizeInput} from "../../../../../Components/Input/FormInput/Input";
import {ReactComponent as EyeSVG} from "../../../../../assets/icons/other/Eye.svg";
import style from "./SignInForm.module.scss"
import {ReactComponent as CloseEyeSVG} from "../../../../../assets/icons/other/Closed-Eye.svg";
import CheckBox from "../../../../../Components/CheckBox/CheckBox";
import Button from "../../../../../Components/Button/Button";
import {ButtonSize, ButtonType, ButtonVariant} from "../../../../../Components/Button/ButtonTypes";
import {useAction} from "../../../../../hook/useAction";
import {ModalType} from "../../../../../Redux/Other/Types/modalTypes";
import {EMAIL_REGEXP} from "../../../../../utils/const/regexp";

const SignInForm = () => {

    const {showModalWindow} = useAction()

    const {
        register,
        handleSubmit,
        formState: {errors, isDirty, isSubmitSuccessful},
        setError,
    } = useForm<ISignInForm>()


    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        if (data.email !== "sunguuner500@gmail.com") {
            setError("email", {message: "Wrong Email"})
        }
    }

    const [showPass, setShowPass] = useState<boolean>(false)

    const showPassHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setShowPass(!showPass)
    }

    const signUp = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        showModalWindow(ModalType.registration)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <Input placeholder={"Your working email"} width={39} sizeInputProps={sizeInput.medium}
                   register={register("email", {
                       required: "Required",
                       pattern: {
                           value: EMAIL_REGEXP,
                           message: "Plese enter"
                       }
                   })} errors={errors.email?.message}
                   isSuccessful={isSubmitSuccessful}
                   isDirty={isDirty} label={"Email"}/>
            <div className={style.password}>
                <Input placeholder={"Password"} width={34.2} sizeInputProps={sizeInput.medium}
                       register={register("password", {})} errors={errors.password?.message}
                       isSuccessful={isSubmitSuccessful}
                       isDirty={isDirty} label={"Password"} type={showPass ? "text" : "password"} theme={"pass"}/>
                <button onClick={showPassHandler}>{showPass ? <EyeSVG/> : <CloseEyeSVG/>}</button>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center"}}>
                <CheckBox text={"Keep me signed in"}/>
                <button className={style.forgotPass}
                        onClick={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}>Forgot password?
                </button>
            </div>
            <Button text={"Sign in"} variant={ButtonVariant.solid} size={ButtonSize.large} type={ButtonType.submit}
                    width={39}/>
            <p className={style.dontAcc}>Don't have an account? <button className={style.forgotPass}
                                                                        onClick={signUp}>Sign
                up</button>
            </p>
        </form>
    );
};

export default SignInForm;