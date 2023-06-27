import React from 'react';
import style from "./MainSteps.module.scss"

const MainSteps = () => {
    return (
        <div className={style.wrapper}>
            <article>
                <p>main steps</p>
                <h2>Online learning process</h2>
            </article>
            <div className={style.content}>
                <div className={style.block}>
                    <div className={style.number}>
                        <p>01</p>
                        <span className={style.bg1}></span>
                        <span className={style.bg2}></span>
                    </div>
                    <div className={style.text}>
                        <p className={style.title}>Watching online video lectures</p>
                        <p className={style.description}>Culpa nostrud commodo ea consequat aliquip reprehenderit.
                            Veniam velit
                            nostrud aliquip sunt.</p>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.number}>
                        <p>02</p>
                        <span className={style.bg1}></span>
                        <span className={style.bg2}></span>
                    </div>
                    <div className={style.text}>
                        <p className={style.title}>Passing test</p>
                        <p className={style.description}>Anim reprehenderit sint voluptate exercitation adipisicing
                            laborum adipisicing. Minim ad tempor est ea.</p>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.number}>
                        <p>03</p>
                        <span className={style.bg1}></span>
                        <span className={style.bg2}></span>
                    </div>
                    <div className={style.text}>
                        <p className={style.title}>Curator’s feedback</p>
                        <p className={style.description}>Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
                            dolore et ad et veniam ad deserunt.</p>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.number}>
                        <p>04</p>
                        <span className={style.bg1}></span>
                        <span className={style.bg2}></span>
                    </div>
                    <div className={style.text}>
                        <p className={style.title}>Corrections if needed</p>
                        <p className={style.description}>Sit veniam aute dolore adipisicing nulla sit culpa. Minim
                            mollit voluptate ullamco proident ea ad.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSteps;