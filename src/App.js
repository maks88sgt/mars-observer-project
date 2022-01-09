import React, {Suspense} from "react";
import logo from './logo.svg';
import './App.css';

import './i18n'
import Header from "./header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Rovers} from "./rovers/rovers";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback="loading">
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/rovers" element={<Rovers/>}/>
                        <Route path="/users">
                        </Route>
                        <Route path="/" element={<>
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo"/>
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                            </header>
                        </>}>

                        </Route>
                    </Routes>
                </div>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
