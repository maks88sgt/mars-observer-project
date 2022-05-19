import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import { store } from "./state/store";
import "./i18n";
import { Rovers } from "./components/rovers/rovers";
import { Search } from "./components/search/search";
import { About } from "./components/about/about";
import { Login } from "./components/login/login";
import * as PropTypes from "prop-types";

function Navigate(props) {
  return null;
}

Navigate.propTypes = { to: PropTypes.string };

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback="loading">
          <div className="App">
            <Header />
            <Routes>
              <Route path="/rovers" element={<Rovers />} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/rovers" />} />
            </Routes>
          </div>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
