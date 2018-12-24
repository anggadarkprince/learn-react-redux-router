import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import './RecipeApp.css';
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";
import RecipeForm from "./RecipeForm";
import Modal from './Modal';
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

class RecipeApp extends Component {

    render() {
        const {isModalRecipeOpen, recipes, onSaveRecipe, onDeleteRecipe, toggleModalRecipe} = this.props;
        return (
            <div className="App">
                <Navbar toggleModalRecipe={toggleModalRecipe}/>
                <Switch>
                    <Route exact={true} path="/" render={(props) => (
                        <RecipeList {...props} recipes={recipes} onDeleteRecipe={onDeleteRecipe}/>
                    )}/>
                    <Route exact={true} path="/contact" component={Contact}/>
                    <Route exact={true} path="/about" component={About}/>
                </Switch>

                {isModalRecipeOpen &&
                <Modal>
                    <RecipeForm
                        isOpen={isModalRecipeOpen}
                        onSaveRecipe={onSaveRecipe}
                        toggleModalRecipe={toggleModalRecipe}/>
                </Modal>
                }
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        isModalRecipeOpen: state.isModalRecipeOpen
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveRecipe: (recipe) => {
            dispatch({
                type: 'SAVE_RECIPE',
                recipe: recipe
            });
        },
        onDeleteRecipe: (recipeId) => {
            dispatch({
                type: 'DELETE_RECIPE',
                recipeId: recipeId
            });
        },
        toggleModalRecipe: (e) => {
            e.preventDefault();
            dispatch({
                type: 'TOGGLE_RECIPE_MODAL'
            });
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeApp));
