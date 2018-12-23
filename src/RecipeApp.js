import React, {Component} from 'react';
import './RecipeApp.css';
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";

class RecipeApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [
                {
                    title: 'Pasta',
                    ingredients: ['flour', 'water'],
                    instructions: 'Mix ingredients',
                    img: 'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1.jpg'
                },
                {
                    title: 'Milkshake',
                    ingredients: ['2 scoped ice cream', 'water', 'sugar', 'milk'],
                    instructions: 'Combine milk and ice create, add a sugar if needed and water it down',
                    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-milkshake-3-ways-still001-1-1527006537.jpg'
                },
                {
                    title: 'Avocado Toast',
                    ingredients: ['flour', 'water'],
                    instructions: 'Mix ingredients',
                    img: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/image/2018/07/main/1807w-avocado-toast-recipe.jpg?itok=_dDi7ZQQ'
                },
                {
                    title: 'Milkshake',
                    ingredients: ['2 scoped ice cream', 'water', 'sugar', 'milk'],
                    instructions: 'Combine milk and ice create, add a sugar if needed and water it down',
                    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-milkshake-3-ways-still001-1-1527006537.jpg'
                },
                {
                    title: 'Pasta',
                    ingredients: ['flour', 'water'],
                    instructions: 'Mix ingredients',
                    img: 'https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1.jpg'
                },
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            let recipes = this.state.recipes.slice();
            recipes.pop();
            this.setState({recipes});
        }, 3000);
    }

    render() {
        return (
            <div className="App">
                <Navbar/>
                <RecipeList recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default RecipeApp;
