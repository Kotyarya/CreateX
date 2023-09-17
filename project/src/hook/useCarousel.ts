import {useState} from "react";

export const useCarousel = (step: number) => {
    const [translate, setTranslate] = useState<number>(0)

    const onMoveForward = () => {
        setTranslate(translate - step)
    }

    const onMoveBack = () => {
        setTranslate(translate + step)
    }

    const setCarouselPosition = (position: number) => {
        setTranslate(position)
    }

    return {translate, onMoveBack, onMoveForward, setCarouselPosition}
}