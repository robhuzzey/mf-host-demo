import React from 'react';
export default ({ numberOfResults }) => (
    <div className="testComponent" style={{
        border: "3px dashed green",
        padding: "1em"
    }}>Number of thingys: {numberOfResults}</div>
);