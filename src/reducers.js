export default (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_RECIPE':
            const newRecipe = {id: state.nextRecipeId, ...action.recipe};
            return {
                ...state,
                nextRecipeId: state.nextRecipeId + 1,
                recipes: [...state.recipes, newRecipe],
            };
        case 'DELETE_RECIPE':
            const recipes = state.recipes.filter(recipe => {
                return recipe.id !== action.recipeId;
            });
            return {...state, recipes};
        case 'TOGGLE_RECIPE_MODAL':
            return {...state, isModalRecipeOpen: !state.isModalRecipeOpen};
        case 'SHOW_RECIPE_MODAL':
            return {...state, isModalRecipeOpen: true};
        case 'HIDE_RECIPE_MODAL':
            return {...state, isModalRecipeOpen: false};
        default:
            return state;
    }
}