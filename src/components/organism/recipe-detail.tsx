import { useSelector } from 'react-redux'
import { RootState } from '@models/store'
import { RecipeState } from '@models/type'
import Recipe from '@components/organism/recipe'
import { Stack } from '@mui/material'
import { setEditRecipe } from '@models/store/reducers/editRecipeSlice'
import { Typography } from '@mui/material'

const RecipeDetail = () => {
	const recipe: RecipeState = useSelector((state: RootState) => state.editRecipe)
	if (!recipe.name) { return null }
	return (
		<>
			<Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'space-between'} paddingBottom={'1em'}>
				<Typography color='brown' variant={'body1'} onClick={() => setEditRecipe(recipe)}>{recipe.name} recipe</Typography>
			</Stack>
			<Recipe recipe={recipe} />
		</>
	)
}

export default RecipeDetail