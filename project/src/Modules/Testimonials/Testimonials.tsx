import React, {FC} from 'react';
import style from "./Testimonials.module.scss"
import ControlButton, {ControlButtonRotation} from "../../Components/ControlButton/ControlButton";
import {nanoid} from "nanoid";
import {testimonials} from "../../Redux/Other/Data/TestimonialsData/TestimonialsData";
import {useCarousel} from "../../hook/useCarousel";


const Testimonials: FC = () => {

    const {translate, onMoveBack, onMoveForward, setCarouselPosition} = useCarousel(102)

    const testimonialsBlock = testimonials.map((person) => {
        return (
            <div key={nanoid(4)} className={style.block}>
                <p className={style.text}>{person.text}</p>
                <div className={style.author}>
                    <img src={person.img} alt="author"/>
                    <div className={style.article}>
                        <h4>{person.title}</h4>
                        <p>Position, Course</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={style.wrapper}>
            <article>
                <p>TESTIMONIALS</p>
                <h2>What our students say</h2>
            </article>
            <div className={style.content}>
                <ControlButton rotation={ControlButtonRotation.left}
                               disabled={translate >= 0}
                               onClick={onMoveBack}/>
                <div className={style.carousel}>
                    <div className={style.contentCarousel} style={{transform: `translateX(${translate}rem)`}}>
                        {testimonialsBlock}
                    </div>
                </div>
                <ControlButton rotation={ControlButtonRotation.right}
                               disabled={translate <= -408}
                               onClick={onMoveForward}/>
            </div>
            <div className={style.dots}>
                <span className={translate === 0 ? style.active : ""} onClick={() => setCarouselPosition(0)}></span>
                <span className={translate === -102 ? style.active : ""}
                      onClick={() => setCarouselPosition(-102)}></span>
                <span className={translate === -204 ? style.active : ""}
                      onClick={() => setCarouselPosition(-204)}></span>
                <span className={translate === -306 ? style.active : ""}
                      onClick={() => setCarouselPosition(-306)}></span>
                <span className={translate === -408 ? style.active : ""}
                      onClick={() => setCarouselPosition(-408)}></span>
            </div>
        </div>
    );
};

export default Testimonials;