import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/NavBar";
import GlobalStyle from "./createGlobalStyle";


import Home from "./pages/Home";
import Mangas from "./pages/Mangas";
import Manga1108 from "./pages/Manga-1108";
import Manga1109 from "./pages/Manga-1109";
import Manga1110 from "./pages/Manga-1110";
import Manga1111 from "./pages/Manga-1111";
import Manga1112 from "./pages/Manga-1112";
import Manga1113 from "./pages/Manga-1113";
import Manga1114 from "./pages/Manga-1114";
import Manga1115 from "./pages/Manga-1115";
import Manga1116 from "./pages/Manga-1116";
import Manga1117 from "./pages/Manga-1117";
import Manga1118 from "./pages/Manga-1118";
import Manga1119 from "./pages/Manga-1119";
import Manga1120 from "./pages/Manga-1120";
import Manga1121 from "./pages/Manga-1121";
import Manga1122 from "./pages/Manga-1122";
import Manga1123 from "./pages/Manga-1123";
import Manga1124 from "./pages/Manga-1124";
import Manga1125 from "./pages/Manga-1125";
import Manga1126 from "./pages/Manga-1126";
import Manga1127 from "./pages/Manga-1127";
import Manga1128 from "./pages/Manga-1128";
import Manga1129 from "./pages/Manga-1129";
import Manga1130 from "./pages/Manga-1130";
import Manga1131 from "./pages/Manga-1131";
import Manga1132 from "./pages/Manga-1132";

import { useState } from 'react';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mangas" element={<Mangas />} />
        <Route path="/manga1108" element={<Manga1108 />} />
        <Route path="/manga1109" element={<Manga1109 />} />
        <Route path="/manga1110" element={<Manga1110 />} />
        <Route path="/manga1111" element={<Manga1111 />} />
        <Route path="/manga1112" element={<Manga1112 />} />
        <Route path="/manga1113" element={<Manga1113 />} />
        <Route path="/manga1114" element={<Manga1114 />} />
        <Route path="/manga1115" element={<Manga1115 />} />
        <Route path="/manga1116" element={<Manga1116 />} />
        <Route path="/manga1117" element={<Manga1117 />} />
        <Route path="/manga1118" element={<Manga1118 />} />
        <Route path="/manga1119" element={<Manga1119 />} />
        <Route path="/manga1120" element={<Manga1120 />} />
        <Route path="/manga1121" element={<Manga1121 />} />
        <Route path="/manga1122" element={<Manga1122 />} />
        <Route path="/manga1123" element={<Manga1123 />} />
        <Route path="/manga1124" element={<Manga1124 />} />
        <Route path="/manga1125" element={<Manga1125 />} />
        <Route path="/manga1126" element={<Manga1126 />} />
        <Route path="/manga1127" element={<Manga1127 />} />
        <Route path="/manga1128" element={<Manga1128 />} />
        <Route path="/manga1129" element={<Manga1129 />} />
        <Route path="/manga1130" element={<Manga1130 />} />
        <Route path="/manga1131" element={<Manga1131 />} />
        <Route path="/manga1132" element={<Manga1131 />} />

      </Routes>
      
    </Router>
  )
}

export default App;
