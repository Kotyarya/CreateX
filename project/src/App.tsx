import React, {FC} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import HomePage from "./Pages/HomePage/HomePage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import EventsPage from "./Pages/EventsPage/EventsPage";


const App: FC = () => {


    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/courses"} element={<CoursesPage/>}/>
                {/*<Route path={"/courses/:courseID"} element={<CoursePage/>}/>*/}
                <Route path={"/events"} element={<EventsPage/>}/>
            </Routes>
            {/*<FooterContainer/>*/}
        </BrowserRouter>
    );
}

export default App;
