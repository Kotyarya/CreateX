import React, {FC} from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import HomePage from "./Pages/HomePage/HomePage";
import FooterContainer from "./Modules/Footer/FooterContainer";


const App: FC = () => {
    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
            </Routes>
            <FooterContainer/>
        </BrowserRouter>
    );
}

export default App;
