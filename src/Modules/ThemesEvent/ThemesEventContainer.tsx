import React from 'react';
import ThemesEvent from "./ThemesEvent";
import {useTypedSelector} from "../../hook/useTypedSelector";

const ThemesEventContainer = () => {
    const event = useTypedSelector(state => state.events.activeEvent)

    return <ThemesEvent event={event}/>
};

export default ThemesEventContainer;