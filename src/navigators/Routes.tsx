import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import {Home} from '../pages/home'

export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
};