import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import { Home } from '../pages/home'
import { CreateContact } from "../pages/createContact";
import { EditContact } from "../pages/editContact";
import { Charts } from "../pages/charts";

export const AppRoutes: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateContact />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/charts" element={<Charts />} />
        </Routes>
    )
};