import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.css';
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./UserContext"; // Adjust the import path

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <UserProvider> {/* Add the UserProvider */}
          <App />
        </UserProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
