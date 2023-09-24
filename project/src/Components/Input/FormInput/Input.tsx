import {FC} from "react";
import style from "./Input.module.scss"
import {UseFormRegisterReturn} from "react-hook-form";

export enum sizeInput {
    small = "small",
    medium = "medium",
    large = "large"
}


interface FormInputProps {
    placeholder: string,
    label?: string,
    width: number,
    sizeInput: sizeInput,
    theme?: string,
    register: UseFormRegisterReturn,
    errors: string | undefined,
    isSuccessful: boolean,
    isDirty: boolean
}

const FormInput: FC<FormInputProps> = ({
                                           placeholder,
                                           label,
                                           width,
                                           sizeInput,
                                           theme,
                                           register,
                                           errors,
                                           isSuccessful,
                                           isDirty
                                       }) => {


    const classSpan = errors ? style.error : isSuccessful ? isDirty ? style.success : style.error : ""


    return (
        <div className={style.input + " " + style[sizeInput]} data-theme={theme}>
            {label ?
                <label>{label}</label> :
                null
            }
            <div className={style.customInput + " " + classSpan}>
                <input {...register} autoComplete="off" placeholder={placeholder}
                       style={{width: `${width}rem`}}/>

            </div>
            {<span className={classSpan}>{errors ? errors : (isSuccessful ? "Looks good!" : errors)}</span>}
        </div>
    )
}

export default FormInput