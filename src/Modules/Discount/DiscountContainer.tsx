import React, {useState} from 'react';
import Discount from "./Discount";

const DiscountContainer = () => {
    const date = new Date()
    const [day, setDay] = useState<number>(date.getDay())
    const [hour, setHour] = useState<number>(date.getHours())
    const [minute, setMinute] = useState<number>(date.getMinutes())
    const [second, setSecond] = useState<number>(date.getSeconds())
    const updateTime = () => {
        const date = new Date()
        const actualDay = date.getDay()
        const actualHour = date.getHours()
        const actualMinute = date.getMinutes()
        const actualSecond = date.getSeconds()
        setDay(-(actualDay - 7))
        setHour(23 - actualHour)
        setMinute(59 - actualMinute)
        setSecond(59 - actualSecond)
    }
    setInterval(updateTime, 1000)

    return <Discount day={day} hour={hour} minute={minute} second={second}/>
};

export default DiscountContainer;