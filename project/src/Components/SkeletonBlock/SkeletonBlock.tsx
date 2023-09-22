import React, {FC} from 'react';
import style from "./SkeletonBlock.module.scss"
import {SkeletonBlockTypes} from "./SkeletonBlockTypes";


const SkeletonBlock: FC<SkeletonBlockTypes> = ({width, height, lightMode}) => {

    return (
        <div className={style.loading + " " + (lightMode ? style.lightMode : "")}
             style={{
                 minWidth: width ? `${width}rem` : "auto",
                 minHeight: height ? `${height}rem` : "auto",
                 width: width ? `${width}rem` : "auto",
                 height: height ? `${height}rem` : "auto"
             }}>
            <span></span>
        </div>
    );
};

export default SkeletonBlock;