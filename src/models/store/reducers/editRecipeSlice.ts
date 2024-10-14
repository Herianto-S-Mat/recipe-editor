import { Ingredient, RecipeState } from "@models/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: RecipeState = {
  name: null,
  ingredients: [],
  instructions: "",
};

const editRecipeSlice = createSlice({
  name: "editRecipe",
  initialState,
  reducers: {
    setEditRecipe: (
      __state: RecipeState,
      action: PayloadAction<RecipeState>
    ) => {
      return action.payload;
    },
    setEditRecipeIngredientQty: (
      state: RecipeState,
      action: PayloadAction<Ingredient>
    ) => {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          if (ingredient.name === action.payload.name) {
            return action.payload;
          }
          return ingredient;
        }),
      };
    },
    setEditRecipeInstructions: (
      state: RecipeState,
      action: PayloadAction<string>
    ) => {
      return {
        ...state,
        instructions: action.payload,
      };
    },
    unsetEditRecipe: (__state: RecipeState) => {
      return initialState;
    },
  },
});

export const { 
  setEditRecipe, 
  setEditRecipeIngredientQty, 
  setEditRecipeInstructions, 
  unsetEditRecipe 
} = 
  editRecipeSlice.actions;

export default editRecipeSlice.reducer;
