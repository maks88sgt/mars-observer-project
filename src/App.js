import React, {Suspense} from "react";
import './App.css';

import './i18n'
import Header from "./components/header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Rovers} from "./components/rovers/rovers";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback="loading">
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/rovers" element={<Rovers/>}/>
                        <Route path="/search"/>
                        <Route path="/about"/>
                        <Route path="/login"/>
                        <Route path="/profile"/>
                        <Route path="*"
                               element={<Navigate to="/rovers" />}/>
                    </Routes>
                </div>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
