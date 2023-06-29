import React, {useState} from 'react';
import style from "./Events.module.scss"
import {ReactComponent as CloseSVG} from "../../assets/img/icons/Down-chevron.svg";

const Events = () => {

    const [categoryEditMode, setCategoryEditMode] = useState<boolean>(false)
    const [category, setCategory] = useState("all themes")

    return (
        <div className={style.wrapper}>
            <article>
                <p>our events</p>
                <h2>Lectures, workshops & master-classes</h2>
            </article>
            <div className={style.controls}>
                <div className={style.control}>
                    <p className={style.text}>Event category</p>
                    <div className={style.dataSelect}>
                        <input type="text"
                               onFocus={() => setCategoryEditMode(true)}
                               onBlur={() => setCategoryEditMode(false)}
                        />
                        {category}
                        <CloseSVG style={categoryEditMode ? {transform: "rotate(180deg)"} : undefined}/>
                    </div>
                    {categoryEditMode ?
                        <div className={style.data}>
                            <div onClick={() => setCategory("1")}>1</div>
                            <div onClick={() => setCategory("2")}>2</div>
                            <div onClick={() => setCategory("3")}>3</div>
                        </div>
                        : null
                    }
                </div>
                <div className={style.control}>
                    <p className={style.text}>Sort by</p>
                    <div className={style.dataSelect}>
                        <input type="text"
                               onFocus={() => console.log("open")}
                               onBlur={() => console.log("close")}
                        />
                        newest
                        <CloseSVG/>
                    </div>
                </div>
            </div>
            <div className={style.content}></div>
        </div>
    );
};

export default Events;