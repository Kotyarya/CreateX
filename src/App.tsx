import React, {FC, lazy, Suspense} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import FooterContainer from "./Modules/Footer/FooterContainer";
import {useTypedSelector} from "./hook/useTypedSelector";
import {staticPath} from "./utils/helpers/path";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"))
const CoursesPage = lazy(() => import("./Pages/CoursesPage/CoursesPage"))
const CoursePage = lazy(() => import("./Pages/CoursesPage/CoursePage/CoursePage"))
const EventsPage = lazy(() => import("./Pages/EventsPage/EventsPage"))
const EventPage = lazy(() => import("./Pages/EventsPage/EventPage/EventPage"))
const BlogsPage = lazy(() => import("./Pages/BlogsPage/BlogsPage"))
const BlogPage = lazy(() => import("./Pages/BlogsPage/BlogPage/BlogPage"))
const AboutUsPage = lazy(() => import("./Pages/AboutUsPage/AboutUsPage"))
const ContactPage = lazy(() => import("./Pages/ContactPage/ContactPage"))
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"))
const Modal = lazy(() => import("./Modules/Modal/Modal"))


const App: FC = () => {

    const modalWindowIsOpen = useTypedSelector(state => state.modal.modalWindowIsOpen)

    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Suspense fallback={<main aria-busy="true" aria-label="Loading page"/>}>
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
                    <Route path={staticPath.contactPage} element={<ContactPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Routes>
            </Suspense>
            <FooterContainer/>
        </BrowserRouter>
    );
}

export default App;
