import { RecipeState } from "@models/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: RecipeState[] = [];

const drinksRecipeSlice = createSlice({
  name: "drinksRecipe",
  initialState,
  reducers: {
    saveDrinkRecipe: (
      state: RecipeState[],
      action: PayloadAction<RecipeState>
    ) => {
      if (state.find((recipe) => recipe.name === action.payload.name)) {
        return state.map((recipe) =>
          recipe.name === action.payload.name ? action.payload : recipe
        );
      }
      return [...state, action.payload];
    },
    removeDrinkRecipe: (
      state: RecipeState[],
      action: PayloadAction<RecipeState>
    ) => {
      return state.filter((recipe) => recipe.name !== action.payload.name);
    },
  },
});

export const { saveDrinkRecipe, removeDrinkRecipe } = drinksRecipeSlice.actions;

export default drinksRecipeSlice.reducer;
