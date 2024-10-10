import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@models/store'
import { RecipeState } from '@models/type'
import RecipeCard from './recipe-card'
import { setEditRecipe } from '@models/store/reducers/editRecipeSlice'
import { Button, Stack, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import Recipe from '@components/organism/recipe'

const ListRecipe = () => {
	const dispatch = useDispatch()
	const list_recipe: RecipeState[] = useSelector((state: RootState) => state.drinksRecipe)
	return (
		<Stack spacing={2}>
			{
				list_recipe.map((recipe: RecipeState, index: number) => (
					<RecipeCard key={index}>
						<Stack>
							<Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'space-between'} paddingBottom={'1em'}>
								<Typography color='brown' variant={'body1'} onClick={() => setEditRecipe(recipe)}>{recipe.name} recipe</Typography>
								<Link to={'/recipe-editor'}>
									<Button onClick={() => dispatch(setEditRecipe(recipe))}>
										<EditIcon color={'success'} />
									</Button>
								</Link>
							</Stack>
							<Recipe recipe={recipe} />
						</Stack>
					</RecipeCard>
				))
			}
		</Stack>
	)
}

export default ListRecipe