type keydrinks = `strIngredient${string}` | `strMeasure${string}`;
export interface topMostResultType {
  strDrink: string;
  [key: keydrinks]: string | null;
  strInstructions: string;
};
export interface Ingredient {
  name: string;
  value: number;
  unit: string;
};
export interface RecipeState {
  name: string | null;
  ingredients: Ingredient[];
  instructions: string;
};

export type errorType = {
  fetchError: string | null;
};
