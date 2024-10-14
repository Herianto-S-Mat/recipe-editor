import { css } from '@emotion/react'
import { RootState } from '@models/store';
import { removeDrinkRecipe, saveDrinkRecipe } from '@models/store/reducers/drinksRecipeSlice';
import { setEditRecipe, unsetEditRecipe, setEditRecipeIngredientQty, setEditRecipeInstructions } from '@models/store/reducers/editRecipeSlice';
import { RecipeState } from '@models/type';
import { Alert, Button, ButtonGroup, Stack, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import load_image from '@assets/images/load.gif'
import { useState } from 'react';

const styles = css`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`
const styles2 = css`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`

// type filterType = {
//     drink: null;
//     ingredient_name: null;
//     ingredient_qty: number | null;
//     total_qty: number | null;
// }
const RecipeEditor = () => {
    const dispatch = useDispatch()
    const recipe: RecipeState = useSelector((state: RootState) => state.editRecipe)
    const drinksRecipe: RecipeState[] = useSelector((state: RootState) => state.drinksRecipe)
    const loadFetch: boolean = useSelector((state: RootState) => state.loadFetch)
    const fetchError: string | null = useSelector((state: RootState) => state.error.fetchError)
    const recipeInDrinks: boolean = !!drinksRecipe.find((drinkRecipe) => drinkRecipe.name === recipe.name)


    const save = () => {
        dispatch(saveDrinkRecipe(recipe))
        // dispatch(unsetEditRecipe())
    }
    const remove = () => {
        dispatch(removeDrinkRecipe(recipe))
        dispatch(unsetEditRecipe())
    }
    const reset = () => {
        if (recipeInDrinks) {
            dispatch(setEditRecipe(drinksRecipe.filter((drinkRecipe) => drinkRecipe.name === recipe.name)[0]))
        }
        else {
            dispatch(setEditRecipe({
                ...recipe,
                ingredients: recipe.ingredients.map((ingredient) => ({ ...ingredient, qty: 0 }))
            }))
        }
    }
    return (
        <Stack css={styles}>
            <Typography variant='h6' css={styles2}>
                Determine {recipe?.name} recipe
                {recipe.name && <Button variant='text' onClick={() => dispatch(unsetEditRecipe())}>X</Button>}
            </Typography>
            {fetchError && <Alert severity="error">{fetchError}</Alert>}
            {loadFetch ?
                <b>load data <img src={load_image} alt="" style={{ height: '1em' }} /></b>
                :
                recipe.name && <>
                    <Typography textAlign={'center'} borderBottom={1}><b>Ingredients</b></Typography>
                    {
                        recipe?.ingredients.map((ingredient, index) => (
                            <Stack key={index} direction="row" spacing={2} >
                                <TextField
                                    type="text"
                                    size='small'
                                    value={ingredient.name}
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                />
                                <TextField
                                    type="number"
                                    size='small'
                                    inputProps={{ min: 0 }}
                                    value={ingredient.value}
                                    label={ingredient.unit}
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        },
                                    }}
                                    onChange={(e) => {
                                        dispatch(setEditRecipeIngredientQty({
                                            name: ingredient.name,
                                            value: parseFloat(e.target.value),
                                            unit: ingredient.unit
                                        }))
                                    }}
                                />
                            </Stack>
                        ))
                    }
                    <Typography textAlign={'center'} borderBottom={1}><b>Instuctions</b></Typography>
                    <Stack direction={'row'} spacing={2} >
                        <TextField
                            fullWidth
                            multiline
                            size='small'
                            value={recipe.instructions}
                            label="instructions"
                            onChange={(e) =>  dispatch(setEditRecipeInstructions(e.target.value))}
                        />
                    </Stack>
                </>
            }
            <Stack direction="row" justifyContent={'flex-end'}>
                {
                    recipe.name?.length &&
                    <ButtonGroup variant="outlined">
                        <Button onClick={reset}>Reset</Button>
                        {recipeInDrinks && <Button onClick={remove}>Remove</Button>}
                        {recipe.ingredients.find((ingredient) => ingredient.value === 0) ?
                            <Button disabled>Save{recipeInDrinks ? ' change' : ''}</Button>
                            :
                            <Button onClick={save}>Save{recipeInDrinks ? ' change' : ''}</Button>
                        }
                    </ButtonGroup>
                }
            </Stack>
        </Stack>
    )
}

export default RecipeEditor