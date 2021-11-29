import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Books from "./pages/Books";
import Workouts from "./pages/Workouts";
import Footer from "./Footer/Footer";
import ExpensesPage from "./pages/ExpensesPage";


import "./App.css";


function App() {

  return (
    <div className="container-content">
      <Router>
        
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tasks" element={<ExpensesPage />} />
         
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
