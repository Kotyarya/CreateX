import React, {FC} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import HomePage from "./Pages/HomePage/HomePage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CoursePage from "./Pages/CoursesPage/CoursePage/CoursePage";
import EventsPage from "./Pages/EventsPage/EventsPage";
import EventPage from "./Pages/EventsPage/EventPage/EventPage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BlogPage from "./Pages/BlogsPage/BlogPage/BlogPage";


const App: FC = () => {
    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/courses"} element={<CoursesPage/>}/>
                <Route path={"/courses/:courseID"} element={<CoursePage/>}/>
                <Route path={"/events"} element={<EventsPage/>}/>
                <Route path={"/events/:eventID"} element={<EventPage/>}/>
                <Route path={"/blog/"} element={<BlogsPage/>}/>
                <Route path={"/blog/:blogId"} element={<BlogPage/>}/>
            </Routes>
            {/*<FooterContainer/>*/}
        </BrowserRouter>
    );
}

export default App;
