import React, {Component} from 'react';
import Recipe from "./Recipe";
import PropTypes from 'prop-types';
import "./RecipeList.css"

class RecipeList extends Component {

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object),
        onDeleteRecipe: PropTypes.func.isRequired
    }

    render() {
        const {onDeleteRecipe} = this.props;
        const recipes = this.props.recipes.map((recipe, index) => {
            return <Recipe key={recipe.id} {...recipe} onDeleteRecipe={onDeleteRecipe}/>;
        });

        return <div className='recipe-list'>{recipes}</div>;
    }
}

export default RecipeList;