import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "./Header";
import Test from "./Test";

const App = () => (
    <>
        <Header />
        <Test />
        <div>HOST DEMO 2</div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));