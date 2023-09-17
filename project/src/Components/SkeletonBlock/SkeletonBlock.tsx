import React, {FC} from 'react';
import style from "./SkeletonBlock.module.scss"
import {SkeletonBlockTypes} from "./SkeletonBlockTypes";


const SkeletonBlock: FC<SkeletonBlockTypes> = ({width, height}) => {
    return (
        <div className={style.loading}
             style={{width: width ? `${width}rem` : "auto", height: height ? `${height}rem` : "auto"}}>
            <span></span>
        </div>
    );
};

export default SkeletonBlock;