import React, {FC} from 'react';
import style from "./PageTitle.module.scss"
import {PageTitleTypes} from "./PageTitleTypes";

const PageTitle: FC<PageTitleTypes> = ({title, type}) => {
    return (
        <div className={style.wrapper}>
            <p className={style.type}>{type}</p>
            <h2 className={style.title}>{title}</h2>
        </div>
    );
};

export default PageTitle;