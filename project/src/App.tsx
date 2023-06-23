import React, {FC} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import HomePage from "./Pages/HomePage/HomePage";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";


const App: FC = () => {
    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/courses"} element={<CoursesPage/>}/>
            </Routes>
            {/*<FooterContainer/>*/}
        </BrowserRouter>
    );
}

export default App;
