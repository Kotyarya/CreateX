import React from 'react';
import {Field, reduxForm} from "redux-form";
import Input, {sizeInput} from "../../../Components/Input/FormInput/Input";
import validateSubscribeForm from "../../../utils/validate/validateSubscribeForm";
import CheckBox from "../../../Components/CheckBox/CheckBox";
import Button, {ButtonSize, ButtonType, ButtonVariant} from "../../../Components/Button/Button";
import style from "./SubscribeNewsletterForm.module.scss"

const SubscribeNewsletterForm = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.wrapper}>
            <div className={style.input}>
                <Field
                    name={"email"}
                    placeholder={"Your working email"}
                    type={"email"}
                    component={Input}
                    sizeInput={sizeInput.large}
                    width={42.2}
                />
                <Button
                    text={"Subscribe"}
                    variant={ButtonVariant.solid}
                    size={ButtonSize.large}
                    type={ButtonType.submit}/>
            </div>
            <Field
                name={"agree"}
                type={"checkbox"}
                component={CheckBox}
                text={"I agree to receive communications from Createx Online School"}
            />

        </form>
    );
};


export default reduxForm({
    form: "SubscribeNewsletterForm",
    validate: validateSubscribeForm
})(SubscribeNewsletterForm);