import React, {FC} from 'react';
import SubscribeNewsletter from "./SubscribeNewsletter";
import {SubscribeNewsletterTypes} from "./SubscribeNewsletterTypes";

const SubscribeNewsletterContainer: FC<SubscribeNewsletterTypes> = ({inEventPage}) => {
    return <SubscribeNewsletter inEventPage={inEventPage}/>
};

export default SubscribeNewsletterContainer;