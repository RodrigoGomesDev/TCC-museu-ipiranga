import React from "react";
import { Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import AboutMuseum from "./pages/museum/AboutMuseum";
import Team from "./pages/museum/Team";
import DigitalMuseum from "./pages/museum/DigitalMuseum";
import LongTerm from "./pages/exhibitions/LongTerm";
import Temporary from "./pages/exhibitions/Temporary";
import Events from "./pages/Events";
import NewCollection from "./pages/collection/NewCollection";
import Library from "./pages/collection/Library";
import Educational from "./pages/Educational";
import HowToSupport from "./pages/support/HowToSupport";
import Sponsors from "./pages/support/Sponsors";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/museu/sobre-o-museu" element={<AboutMuseum />}></Route>
            <Route path="/museu/equipe" element={<Team />}></Route>
            <Route path="/museu/museu-digital" element={<DigitalMuseum />}></Route>
            <Route path="/exposicoes/longa-duracao" element={<LongTerm />}></Route>
            <Route path="/exposicoes/temporariamente" element={<Temporary />}></Route>
            <Route path="/eventos" element={<Events />}></Route>
            <Route path="/acervo/novas-colecoes" element={<NewCollection />}></Route>
            <Route path="/acervo/biblioteca" element={<Library />}></Route>
            <Route path="/educativo" element={<Educational />}></Route>
            <Route path="/apoie/como-apoiar" element={<HowToSupport />}></Route>
            <Route path="/apoie/patrocinadores" element={<Sponsors />}></Route>
        </Routes>
    )
}

export default AppRoutes;