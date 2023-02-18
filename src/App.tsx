import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/portfolio" element={ <PortfolioPage/>} />
      </Routes>
  );
}

export default App;
