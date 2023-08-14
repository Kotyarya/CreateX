import React, {FC} from 'react';
import style from "./DiscountForm.module.scss"
import {Field, reduxForm} from "redux-form";
import Input, {sizeInput} from "../../../Components/Input/FormInput/Input";
import validateDiscountForm from "../../../utils/validate/validateDiscountForm";
import {ButtonSize, ButtonType, ButtonVariant} from "../../../Components/Button/ButtonTypes";
import Button from "../../../Components/Button/Button";

const DiscountForm: FC = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field
                name={"name"}
                placeholder={"Your full name"}
                type={"text"}
                component={Input}
                sizeInput={sizeInput.medium}
                width={29.1}
                label={"Full name"}
            />
            <Field
                name={"email"}
                placeholder={"Your working email"}
                type={"email"}
                component={Input}
                sizeInput={sizeInput.medium}
                width={29.1}
                label={"Email"}
            />
            <Field
                name={"phone"}
                placeholder={"Your phone number"}
                type={"phone"}
                component={Input}
                sizeInput={sizeInput.medium}
                width={29.1}
                label={"Phone"}
            />
            <Button
                type={ButtonType.submit}
                text={"Join the course"}
                variant={ButtonVariant.solid}
                size={ButtonSize.regular}
            />
        </form>
    );
};

export default reduxForm({
    form: "SubscribeForm",
    validate: validateDiscountForm
})(DiscountForm);