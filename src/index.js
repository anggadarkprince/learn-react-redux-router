import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import RecipeApp from './RecipeApp';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";

const state = {
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
    ],
    nextRecipeId: 3,
    isModalRecipeOpen: false
};

const store = createStore(rootReducer, state);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RecipeApp/>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
