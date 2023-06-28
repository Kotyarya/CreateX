import React, {FC} from 'react';
import style from "./PageTitle.module.scss"

export enum PageTitleType {
    courses = "courses",
}

interface PageTitleProps {
    title: string,
    type: PageTitleType
}

const PageTitle: FC<PageTitleProps> = ({title, type}) => {
    return (
        <div className={style.wrapper}>
            <p className={style.type}>{type}</p>
            <h2 className={style.title}>{title}</h2>
        </div>
    );
};

export default PageTitle;