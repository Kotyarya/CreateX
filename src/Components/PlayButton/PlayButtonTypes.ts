export enum PlayButtonSize {
    large = "large",
    small = "small"
}

export interface PlayButtonProps {
    size: PlayButtonSize,
    onClick?: () => void,
    pause?: boolean
}
