import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "./Header";

const App = () => (
    <>
        <Header />
        <div>HOST DEMO 2</div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));