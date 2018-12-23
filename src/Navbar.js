import React, {Component} from 'react';
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </nav>
            </header>
        );
    }
}

export default Navbar;