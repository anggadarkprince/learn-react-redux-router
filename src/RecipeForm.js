import React, {Component} from 'react';
import './RecipeForm.css';
import {withRouter} from "react-router-dom";

class RecipeForm extends Component {

    static defaultProps = {
        toggleModalRecipe() {
        },
        onSaveRecipe() {
        },
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleDeleteIngredient = this.handleDeleteIngredient.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSaveRecipe({...this.state});
        this.props.history.push('/');
        this.setState({
            title: '',
            instructions: '',
            ingredients: [''],
            img: ''
        });
        this.props.toggleModalRecipe(e);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNewIngredient() {
        const {ingredients} = this.state;
        this.setState({
            ingredients: [...ingredients, '']
        });
    }

    handleChangeIngredient(e) {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ingredient, i) => {
            return i === index ? e.target.value : ingredient
        });
        this.setState({ingredients});
    }

    handleDeleteIngredient(e) {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.slice();
        ingredients.splice(index, 1);
        this.setState({ingredients});
    }

    render() {
        const {title, instructions, ingredients, img} = this.state;
        let inputs = ingredients.map((ingredient, index) => {
            return (
                <div className="recipe-form-line input-inline input-group" key={`ingredient-${index}`}>
                    <label>{index + 1}.</label>
                    <input type="text" name={`ingredient-${index}`}
                           value={ingredient}
                           autoComplete="off"
                           placeholder={`Put ingredient ${index + 1}`}
                           onChange={this.handleChangeIngredient}/>
                    <button type="button" name={`delete-${index}`}
                            onClick={this.handleDeleteIngredient}>X
                    </button>
                </div>
            )
        });
        return (
            <div className="modal">
                <div className="modal-title">
                    <h3>Input Recipe</h3>
                    <button type="button" className="close-button" onClick={this.props.toggleModalRecipe}>X</button>
                </div>
                <div className="recipe-form-container">
                    <form className="recipe-form" onSubmit={this.handleSubmit}>
                        <div className="recipe-form-line">
                            <label htmlFor="recipe-title-input">Title</label>
                            <input type="text" name="title"
                                   id="recipe-title-input" key="title"
                                   value={title} size={42}
                                   autoComplete="off"
                                   placeholder="Input the recipe title"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="recipe-form-line">
                            <label htmlFor="recipe-instructions-input">
                                Instructions
                            </label>
                            <textarea name="instructions" key="instructions"
                                      id="recipe-instructions-input"
                                      autoComplete="off"
                                      placeholder="Instructions of recipe"
                                      onChange={this.handleChange} value={instructions}></textarea>
                        </div>

                        {inputs}
                        <button type="button" className="buttons" style={{alignSelf: 'flex-end'}}
                                onClick={this.handleNewIngredient}>+ ADD INGREDIENT
                        </button>

                        <div className="recipe-form-line">
                            <label htmlFor="recipe-img-input">Image</label>
                            <input type="text"
                                   id="recipe-img-input" key="img"
                                   name="img"
                                   value={img} size={36}
                                   autoComplete="off"
                                   placeholder="Image of recipe"
                                   onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="buttons"
                                style={{alignSelf: 'flex-end'}}>
                            SAVE RECIPE
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(RecipeForm);