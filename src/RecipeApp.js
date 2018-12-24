import React, {Component} from 'react';
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

    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    id: 0,
                    title: 'Pasta',
                    ingredients: ['flour', 'water'],
                    instructions: 'Mix ingredients',
                    img: 'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1.jpg'
                },
                {
                    id: 1,
                    title: 'Milkshake',
                    ingredients: ['2 scoped ice cream', 'water', 'sugar', 'milk'],
                    instructions: 'Combine milk and ice create, add a sugar if needed and water it down',
                    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-milkshake-3-ways-still001-1-1527006537.jpg'
                },
                {
                    id: 2,
                    title: 'Avocado Toast',
                    ingredients: ['flour', 'water'],
                    instructions: 'Mix ingredients',
                    img: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/image/2018/07/main/1807w-avocado-toast-recipe.jpg?itok=_dDi7ZQQ'
                },
                {
                    id: 3,
                    title: 'Ice Cream',
                    ingredients: ['2 scoped ice cream', 'water', 'sugar', 'milk'],
                    instructions: 'Combine milk and ice create, add a sugar if needed and water it down',
                    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-milkshake-3-ways-still001-1-1527006537.jpg'
                },
                {
                    id: 4,
                    title: 'Noddle',
                    ingredients: ['flour', 'water'],
                    instructions: 'Mix ingredients',
                    img: 'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1.jpg'
                },
            ],
            nextRecipeId: 5,
            isModalRecipeOpen: false
        };

        this.onSaveRecipe = this.onSaveRecipe.bind(this);
        this.onDeleteRecipe = this.onDeleteRecipe.bind(this);
    }

    onSaveRecipe(recipe) {
        this.setState((prevState) => {
            const newRecipe = {...recipe, id: this.state.nextRecipeId};
            this.props.history.push('/');
            return {
                recipes: [...this.state.recipes, newRecipe],
                nextRecipeId: prevState.nextRecipeId + 1
            }
        });
    }

    onDeleteRecipe(id) {
        const recipes = this.state.recipes.filter((recipe) => {
            return recipe.id !== id;
        });
        this.setState({recipes});
    }

    toggleModalRecipe = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            isModalRecipeOpen: !prevState.isModalRecipeOpen
        }));
    };

    render() {
        return (
            <div className="App">
                <Navbar toggleModalRecipe={this.toggleModalRecipe}/>
                <Switch>
                    <Route exact={true} path="/" render={(props) => (
                        <RecipeList {...props} recipes={this.state.recipes} onDeleteRecipe={this.onDeleteRecipe}/>
                    )}/>
                    <Route exact={true} path="/contact" component={Contact}/>
                    <Route exact={true} path="/about" component={About}/>
                </Switch>

                {this.state.isModalRecipeOpen &&
                <Modal>
                    <RecipeForm
                        isOpen={this.state.isModalRecipeOpen}
                        onSaveRecipe={this.onSaveRecipe}
                        toggleModalRecipe={this.toggleModalRecipe}/>
                </Modal>
                }
                <Footer/>
            </div>
        );
    }
}

export default withRouter(RecipeApp);
