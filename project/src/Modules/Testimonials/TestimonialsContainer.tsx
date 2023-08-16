import React, {useState} from 'react';
import Testimonials from "./Testimonials";
import {testimonials} from "../../Redux/Other/Data/TestimonialsData/TestimonialsData";

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