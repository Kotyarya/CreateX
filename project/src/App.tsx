import React from 'react';
import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBarContainer from "./Modules/NavBar/NavBarContainer";
import HomePage from "./Pages/HomePage/HomePage";


function App() {
    return (
        <BrowserRouter>
            <NavBarContainer/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
