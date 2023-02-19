import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Test from "./Test";

const App = () => (
    <>
        <Test numberOfResults="10" />
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));