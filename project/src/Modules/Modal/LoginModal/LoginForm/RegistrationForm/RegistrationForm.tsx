import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IRegistrationForm} from "./IRegistrationForm";
import Input, {sizeInput} from "../../../../../Components/Input/FormInput/Input";
import Button from "../../../../../Components/Button/Button";
import {ButtonSize, ButtonType, ButtonVariant} from "../../../../../Components/Button/ButtonTypes";
import {EMAIL_REGEXP} from "../../../../../utils/const/regexp";
import {userAPI} from "../../../../../Redux/API/user/userAPI";
import {useAction} from "../../../../../hook/useAction";
import {ModalType} from "../../../../../Redux/Other/Types/modalTypes";
import style from "../SignInForm/SignInForm.module.scss";

const RegistrationForm = () => {
    const {removeModalWindow, showModalWindow} = useAction()
    const {register, handleSubmit, watch, setError, formState: {errors, isDirty, isSubmitSuccessful}} = useForm<IRegistrationForm>()

    const onSubmit: SubmitHandler<IRegistrationForm> = async ({confirmPassword, ...data}) => {
        if (data.password !== confirmPassword) {
            setError("confirmPassword", {message: "Passwords do not match"})
            return
        }
        try {
            const token = await userAPI.register(data)
            localStorage.setItem("createxToken", token)
            removeModalWindow()
        } catch (error) {
            setError("email", {message: error instanceof Error ? error.message : "Registration failed"})
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <Input placeholder="Your first name" label="First name" width={39} sizeInputProps={sizeInput.medium}
                   register={register("name", {required: "Required"})} errors={errors.name?.message}
                   isSuccessful={isSubmitSuccessful} isDirty={isDirty}/>
            <Input placeholder="Your last name" label="Last name" width={39} sizeInputProps={sizeInput.medium}
                   register={register("surname", {required: "Required"})} errors={errors.surname?.message}
                   isSuccessful={isSubmitSuccessful} isDirty={isDirty}/>
            <Input placeholder="Your working email" label="Email" width={39} sizeInputProps={sizeInput.medium}
                   register={register("email", {required: "Required", pattern: {value: EMAIL_REGEXP, message: "Please enter a valid email"}})}
                   errors={errors.email?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}/>
            <Input placeholder="Password" label="Password" width={39} sizeInputProps={sizeInput.medium} type="password"
                   register={register("password", {required: "Required", minLength: {value: 6, message: "Minimum 6 characters"}})}
                   errors={errors.password?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}/>
            <Input placeholder="Confirm password" label="Confirm password" width={39} sizeInputProps={sizeInput.medium} type="password"
                   register={register("confirmPassword", {required: "Required", validate: value => value === watch("password") || "Passwords do not match"})}
                   errors={errors.confirmPassword?.message} isSuccessful={isSubmitSuccessful} isDirty={isDirty}/>
            <Button text="Sign up" variant={ButtonVariant.solid} size={ButtonSize.large} type={ButtonType.submit} width={39}/>
            <p className={style.dontAcc}>Already have an account? <button className={style.forgotPass}
                onClick={(event) => {event.preventDefault(); showModalWindow(ModalType.logIn)}}>Sign in</button></p>
        </form>
    );
};

export default RegistrationForm;
