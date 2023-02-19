import React from 'react';
export default ({ numberOfResults }) => (
    <div className="testComponent" style={{
        border: "3px dashed red",
        padding: "1em"
    }}>Result count: {numberOfResults}</div>
);