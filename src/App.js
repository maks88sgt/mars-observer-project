import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import { store } from "./state/store";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback="loading">
          <div className="App">
            <Header />
            {/*<Routes>
              <Route path="/rovers" element={<Rovers />} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/rovers" />} />
            </Routes>*/}
          </div>
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
