import React, { Suspense } from "react";
import logo from './logo.svg';
import './App.css';

import './i18n'
import Header from "./header/Header";

function App() {
    return (
        <Suspense fallback="loading">
            <div className="App">
                <Header/>
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
            </div>
        </Suspense>
    );
}

export default App;
