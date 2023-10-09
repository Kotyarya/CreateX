import {FC, HTMLInputTypeAttribute} from "react";
import style from "./Input.module.scss"
import {UseFormRegisterReturn} from "react-hook-form";

export enum sizeInput {
    small = "small",
    medium = "medium",
    large = "large",
    textArea = "textArea"
}


interface FormInputProps {
    placeholder: string,
    label?: string,
    width: number,
    sizeInputProps: sizeInput,
    theme?: string,
    register: UseFormRegisterReturn,
    errors: string | undefined,
    isSuccessful: boolean,
    isDirty: boolean,
    type?: HTMLInputTypeAttribute
}

const FormInput: FC<FormInputProps> = ({
                                           placeholder,
                                           label,
                                           width,
                                           sizeInputProps,
                                           theme,
                                           register,
                                           errors,
                                           isSuccessful,
                                           isDirty,
                                           type
                                       }) => {


    const classSpan = errors ? style.error : isSuccessful ? isDirty ? style.success : style.error : ""


    return (
        <div className={style.input + " " + style[sizeInputProps]} data-theme={theme}>
            {label ?
                <label>{label}</label> :
                null
            }
            <div className={style.customInput + " " + classSpan}>
                {
                    sizeInputProps === sizeInput.textArea ?
                        <textarea {...register} autoComplete="off" placeholder={placeholder}
                                  style={{minWidth: `${width}rem`, maxWidth: `${width}rem`}}/>
                        :
                        <input {...register} autoComplete="off" placeholder={placeholder}
                               style={{minWidth: `${width}rem`}} type={type}/>
                }

            </div>
            {<span className={classSpan}>{errors ? errors : (isSuccessful ? "Looks good!" : errors)}</span>}
        </div>
    )
}

export default FormInput