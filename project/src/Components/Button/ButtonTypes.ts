export enum ButtonVariant {
    solid = "solid",
    outline = "outline",
}

export enum ButtonSize {
    large = "large",
    regular = "regular",
    small = "small"
}

export enum ButtonType {
    submit = "submit"
}

export interface ButtonTypes {
    text: string,
    disabled?: boolean,
    variant: ButtonVariant,
    size: ButtonSize,
    onClick?: () => void,
    withIcon?: boolean,
    type?: ButtonType
}
