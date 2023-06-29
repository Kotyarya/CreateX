import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input, {sizeInput} from "../../../Components/Input/FormInput/Input";
import Button, {ButtonSize, ButtonType, ButtonVariant} from "../../../Components/Button/Button";
import validateDiscountForm from "../../../utils/validate/validateDiscountForm";
import style from "./RegisterForCourseForm.module.scss"


const RegisterForCourseForm = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field
                name={"name"}
                placeholder={"Your full name"}
                type={"text"}
                component={Input}
                sizeInput={sizeInput.large}
                width={49.5}
                label={"Full name"}
            />
            <Field
                name={"email"}
                placeholder={"Your working email"}
                type={"email"}
                component={Input}
                sizeInput={sizeInput.large}
                width={49.5}
                label={"Email"}
            />
            <Field
                name={"phone"}
                placeholder={"Your phone number"}
                type={"phone"}
                component={Input}
                sizeInput={sizeInput.large}
                width={49.5}
                label={"Phone"}
            />
            <Button
                type={ButtonType.submit}
                text={"Join the course"}
                variant={ButtonVariant.solid}
                size={ButtonSize.large}
            />
        </form>
    );
};

export default reduxForm({
    form: "RegisterForCourseForm",
    validate: validateDiscountForm
})(RegisterForCourseForm);