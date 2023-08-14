import React, {FC} from 'react';
import {Field, reduxForm} from "redux-form";
import Input, {sizeInput} from "../../../Components/Input/FormInput/Input";
import Button from "../../../Components/Button/Button";
import style from "./SubscribeForm.module.scss"
import validateSubscribeForm from "../../../utils/validate/validateSubscribeForm";
import {ButtonSize, ButtonType, ButtonVariant} from "../../../Components/Button/ButtonTypes";


const SubscribeForm: FC = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field
                name={"email"}
                placeholder={"Your working email"}
                type={"email"}
                component={Input}
                sizeInput={sizeInput.large}
                width={42.2}
            />
            <Button
                type={ButtonType.submit}
                text={"Subscribe"}
                variant={ButtonVariant.solid}
                size={ButtonSize.large}
            />
        </form>
    );
};

export default reduxForm({
    form: "SubscribeForm",
    validate: validateSubscribeForm
})(SubscribeForm);