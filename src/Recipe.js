import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDeleteRecipe: PropTypes.func.isRequired
    }

    render() {
        const {id, title, instructions, img, onDeleteRecipe} = this.props;
        const ingredients = this.props.ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>));
        return (
            <div className='recipe-card'>
                <div className='recipe-card-image' style={{background: "url('" + img + "') center center / cover"}}>
                </div>
                <div className='recipe-card-content'>
                    <h3 className='recipe-title'>{title}</h3>

                    <h4>Ingredients:</h4>
                    <ul className='recipe-ingredient'>{ingredients}</ul>

                    <h4>Instructions:</h4>
                    <p>{instructions}</p>

                    <button className="button-delete"
                            onClick={() => onDeleteRecipe(id)}>
                        DELETE
                    </button>
                </div>
            </div>
        )
    }
}

export default Recipe;