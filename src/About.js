import React from "react";

export default ({match, location, history}) => (
    <div className="content-wrapper">
        <h3>About</h3>
        <p>Simple application with reactJS</p>
        <button type="button" onClick={() => history.push('/')}>
            Go Back
        </button>
    </div>
);