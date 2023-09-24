import React, {FC} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CoursePage from "./Pages/CoursesPage/CoursePage/CoursePage";
import EventsPage from "./Pages/EventsPage/EventsPage";
import EventPage from "./Pages/EventsPage/EventPage/EventPage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BlogPage from "./Pages/BlogsPage/BlogPage/BlogPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import FooterContainer from "./Modules/Footer/FooterContainer";
import Modal from "./Modules/Modal/Modal";
import {useTypedSelector} from "./hook/useTypedSelector";
import {staticPath} from "./utils/helpers/path";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";


const App: FC = () => {

    const modalWindowIsOpen = useTypedSelector(state => state.modal.modalWindowIsOpen)

    return (
        <BrowserRouter>
            <NavBarContainer/>
            {modalWindowIsOpen ? <Modal/> : null}
            <Routes>
                <Route path={staticPath.homePage} element={<HomePage/>}/>
                <Route path={staticPath.coursePage} element={<CoursesPage/>}/>
                <Route path={staticPath.coursePage + "/:courseID"} element={<CoursePage/>}/>
                <Route path={staticPath.eventsPage} element={<EventsPage/>}/>
                <Route path={staticPath.eventsPage + "/:eventID"} element={<EventPage/>}/>
                <Route path={staticPath.blogPage} element={<BlogsPage/>}/>
                <Route path={staticPath.blogPage + "/:blogId"} element={<BlogPage/>}/>
                <Route path={staticPath.aboutUsPage} element={<AboutUsPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Routes>
            <FooterContainer/>
        </BrowserRouter>
    );
}

export default App;
