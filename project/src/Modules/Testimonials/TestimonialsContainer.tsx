import React, {useState} from 'react';
import {testimonials} from "../../Redux/Other/data"
import Testimonials from "./Testimonials";

const TestimonialsContainer = () => {

    const [translate, setTranslate] = useState<number>(0)

    const moveBlocks = (num: number) => {
        setTranslate(num)
    }

    return (
        <Testimonials translate={translate} testimonials={testimonials} moveBlocks={moveBlocks}/>
    );
};

export default TestimonialsContainer;