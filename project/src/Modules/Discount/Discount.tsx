import React, {FC} from 'react';
import style from "./Discount.module.scss"
import JoinForm from "../JoinForm/JoinForm";
import {JoinFormTypes} from "../JoinForm/JoinFormTypes";

interface DiscountProps {
    day: number,
    hour: number,
    minute: number,
    second: number
}

const Discount: FC<DiscountProps> = ({day, hour, minute, second}) => {

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.info}>
                    <h3>20% discount for early birds!</h3>
                    <div className={style.time}>
                        <div className={style.block}>
                            <p className={style.number}>0{day}</p>
                            <p className={style.text}>Days</p>
                        </div>
                        <div className={style.block}>
                            <p className={style.number}>
                                {hour < 10 ? `0${hour}` : hour}
                            </p>
                            <p className={style.text}>Hours</p>
                        </div>
                        <div className={style.block}>
                            <p className={style.number}>
                                {minute < 10 ? `0${minute}` : minute}
                            </p>
                            <p className={style.text}>Mins</p>
                        </div>
                        <div className={style.block}>
                            <p className={style.number}>
                                {second < 10 ? `0${second}` : second}
                            </p>
                            <p className={style.text}>Sec</p>
                        </div>
                    </div>
                </div>
                <JoinForm type={JoinFormTypes.raw}/>
            </div>
        </div>
    );
};

export default Discount;