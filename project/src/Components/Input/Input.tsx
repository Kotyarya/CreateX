import {FC} from "react";
import style from "./Input.module.scss"

export enum sizeInput {
    small = "small",
    medium = "medium",
    large = "large"
}


interface InputProps {
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
    sizeInput: sizeInput
}

const Input: FC<InputProps> = ({meta: {error, valid, touched}, input, type, placeholder, label, width, sizeInput}) => {


    let result = ""

    if (touched) {
        if (error) {
            result = "Please provide a valid input."
        } else if (valid) {
            result = "Looks good!"
        }

    }

    const classInput = touched ? (error ? "error" : "success") : ""


    return (
        <div className={style.input + " " + style[sizeInput]}>
            {label ?
                <label>{label}</label> :
                null
            }
            <div className={style.customInput + " " + style[classInput]}>
                <input {...input} type={type} placeholder={placeholder}
                       style={{width: `${width}rem`}}/>

            </div>
            {<span className={style[classInput]}>{result}</span>}
        </div>
    )
}

