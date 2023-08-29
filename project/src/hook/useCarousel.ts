import {useState} from "react";

export const useCarousel = (step: number) => {
    const [translate, setTranslate] = useState<number>(0)

    const onMoveForward = () => {
        setTranslate(translate - step)
    }

    const onMoveBack = () => {
        setTranslate(translate + step)
    }

    return {translate, onMoveBack, onMoveForward}
}