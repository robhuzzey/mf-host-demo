import React, { useContext } from "react";
import TestContext from "./testContext";

export default () => {
    const test = useContext(TestContext);
    return (
        <div
            style={{
                padding: "1em",
                margin: "1em",
                background: "green",
                color: "white",
                fontWeight: "bold",
            }}
        >
            Header {test}
        </div>
    )
};