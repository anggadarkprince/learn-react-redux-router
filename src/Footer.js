import React from "react";
import {withRouter, Link} from "react-router-dom";

const Footer = ({match, location, history}) => (
    <footer>
        <p>&copy; {(new Date()).getFullYear()} Copyright recipe app.</p>
        <div className="footer-links">
            <Link to="/about">About</Link>
            <a href="javascript:void(0)" onClick={() => history.push('/contact')}>
                Contact
            </a>
        </div>
    </footer>
);

export default withRouter(Footer);