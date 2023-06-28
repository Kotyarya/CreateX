import {FC} from "react";
import style from "./Input.module.scss"

export enum sizeInput {
    small = "small",
    medium = "medium",
    large = "large"
}


interface FormInputProps {
    meta: {
        error: string,
        valid: boolean,
        touched: boolean
    },
    input: {},
    type: string,
    placeholder: string,
    label?: string,
    width: number,
    sizeInput: sizeInput,
    theme?: string
}

const FormInput: FC<FormInputProps> = ({
                                           meta: {error, valid, touched},
                                           input,
                                           type,
                                           placeholder,
                                           label,
                                           width,
                                           sizeInput,
                                           theme
                                       }) => {


    let result = ""

    if (touched) {
        if (error) {
            result = error
        } else if (valid) {
            result = "Looks good!"
        }

    }

    const classInput = touched ? (error ? "error" : "success") : ""


    return (
        <div className={style.input + " " + style[sizeInput]} data-theme={theme}>
            {label ?
                <label>{label}</label> :
                null
            }
            <div className={style.customInput + " " + style[classInput]}>
                <input autoComplete="off" {...input} type={type} placeholder={placeholder}
                       style={{width: `${width}rem`}}/>

            </div>
            {<span className={style[classInput]}>{result}</span>}
        </div>
    )
}

export default FormInput