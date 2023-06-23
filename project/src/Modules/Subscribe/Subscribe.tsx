import React, {FC} from 'react';
import style from "./Subscribe.module.scss"
import SubscribeForm from "./SubscribeForm/SubscribeForm";

interface SubscribeProps {
    submit: (values: any) => void
}

const Subscribe: FC<SubscribeProps> = ({submit}) => {
    return (
        <div className={style.wrapper}>
            <article>
                <p>Don’t miss anything</p>
                <h2>Subscribe to the Createx School announcements</h2>
            </article>
            <SubscribeForm
                onSubmit={submit}
            />
        </div>
    );
};

export default Subscribe;

