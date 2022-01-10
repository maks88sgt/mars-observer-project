import React, {Suspense} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux'
import Header from "./components/header/Header";
import {Rovers} from "./components/rovers/rovers";
import {Login} from "./components/login/login";
import {store} from "./state/store";
import './i18n'


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
            <Suspense fallback="loading">
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/rovers" element={<Rovers/>}/>
                        <Route path="/search"/>
                        <Route path="/about"/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/profile"/>
                        <Route path="*"
                               element={<Navigate to="/rovers" />}/>
                    </Routes>
                </div>
            </Suspense>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
