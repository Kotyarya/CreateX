import React from 'react';
import style from "./FooterForm.module.scss";
import {Field, reduxForm} from "redux-form";
import Input, {sizeInput} from "../../../Components/Input/FormInput/Input";
import validateSubscribeForm from "../../../utils/validate/validateSubscribeForm";
import {ReactComponent as ArrowSVG} from "../../../assets/icons/other/Right.svg";

const FooterForm = ({handleSubmit}: any) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <Field
                name={"email"}
                placeholder={"Your working email"}
                type={"email"}
                component={Input}
                sizeInput={sizeInput.small}
                width={28.6}
                theme={"light"}
            />
            <button type={"submit"}><ArrowSVG/></button>
        </form>
    );
};

export default reduxForm({
    form: "FooterForm",
    validate: validateSubscribeForm
})(FooterForm);