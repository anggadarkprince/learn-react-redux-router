import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
    static defaultProps = {
        toggleModalRecipe() {
        }
    }

    static propTypes = {
        toggleModalRecipe: PropTypes.func
    }

    render() {
        return (
            <header>
                <h2><a href="/">Recipe App</a></h2>
                <nav>
                    <li><a href="/new-recipe" onClick={this.props.toggleModalRecipe}>New Recipe</a></li>
                    <li><NavLink exact={true} to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact={true} to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact={true} to="/contact" activeClassName="active">Contact Us</NavLink></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;