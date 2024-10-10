import { Ingredient, RecipeState, topMostResultType } from "@models/type";
import parseMeasurement from "./helpFuction/parseMeasurement";
const fetchDrink: (
  src: string | undefined
) => Promise<RecipeState | string> = async (src) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${src}`
    );
    const data = await response.json();
    if (data?.drinks === null) {
      throw new Error(`no drink match with '${src}'`);
    }
    if (data?.drinks === "no data found") {
      throw new Error(`no string to search '${src}'`);
    }
    const topMostResult: topMostResultType = data?.drinks[0];
    const name = topMostResult.strDrink;
    const instructions = topMostResult.strInstructions;
    const ingredients: Ingredient[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientName = topMostResult[`strIngredient${i}`];
      const measure = parseMeasurement(topMostResult[`strMeasure${i}`]);
      if (ingredientName) {
        ingredients.push({
          name: ingredientName,
          value: measure.value,
          unit: measure.unit,
        });
      }
    }
    return { name, ingredients, instructions };
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return "fetch error";
    }
  }
};
export default fetchDrink;
