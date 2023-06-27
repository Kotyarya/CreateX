import React, {FC} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import HomePage from "./Pages/HomePage/HomePage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import CoursePage from "./Pages/CoursesPage/CoursePage/CoursePage";


const App: FC = () => {
    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/courses"} element={<CoursesPage/>}/>
                <Route path={"/courses/:courseID"} element={<CoursePage/>}/>
            </Routes>
            {/*<FooterContainer/>*/}
        </BrowserRouter>
    );
}

export default App;
