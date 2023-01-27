import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import ParentsLock from "./components/ParentsLock/ParentsLock";
import AuthContextProvider from "./context/auth-context";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="movie/:id" element={<MovieDetail />}></Route>
            <Route path="movies/:type" element={<ParentsLock />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
