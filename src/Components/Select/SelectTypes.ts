export interface CustomSelectProps {
    options: OptionsType<any>[] | undefined,
    value: OptionsType<any>,
    onChange: (newValue: any) => void,
    defaultValue?: any,
    placeholder: string
}

export type OptionsType<T> = { value: T, label: string }