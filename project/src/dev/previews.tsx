import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import AboutCourseContainer from "../Modules/AboutCourse/AboutCourseContainer";
import EventPage from "../Pages/EventsPage/EventPage/EventPage";
import WhoWeAre from "../Modules/WhoWeAre/WhoWeAre";
import Blog from "../Modules/Blog/Blog";
import AboutCreateX from "../Modules/AboutCreateX/AboutCreateX";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/AboutCourseContainer">
                <AboutCourseContainer/>
            </ComponentPreview>
            <ComponentPreview path="/EventPage">
                <EventPage/>
            </ComponentPreview>
            <ComponentPreview path="/WhoWeAre">
                <WhoWeAre/>
            </ComponentPreview>
            <ComponentPreview path="/Blog">
                <Blog/>
            </ComponentPreview>
            <ComponentPreview path="/AboutCreateX">
                <AboutCreateX/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;