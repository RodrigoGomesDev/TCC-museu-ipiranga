import React from "react";
import { Routes, Route  } from "react-router-dom";
import Home from "./Home";
import AboutMuseum from "./museum/AboutMuseum";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/museu/sobre-o-museu" element={<AboutMuseum />}></Route>
        </Routes>
    )
}

export default AppRoutes;