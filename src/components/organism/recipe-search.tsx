import { Autocomplete, Button, css, Stack, TextField } from '@mui/material';
import { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import fetchDrink from '@models/fetch/drink';
import { setEditRecipe, unsetEditRecipe } from '@models/store/reducers/editRecipeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeState } from '@models/type';
import { RootState } from '@models/store';
import { setLoadFetchFalse, setLoadFetchTrue } from '@models/store/reducers/loadFetchSlice';
import { setFetchError } from '@models/store/reducers/errorSlice';

const styles = css`
	display: flex;
	gap: 1rem;
	border-bottom: solid 1px black;
	padding-bottom: 1rem;
`

const RecipeSearch = () => {
	const dispatch = useDispatch()
	const [searchValue, setSearchValue] = useState('');
	const drinkRecipe: RecipeState[] = useSelector((state: RootState) => state.drinksRecipe)

	const setErrorTimer: (error: string) => void = (error) => {
		dispatch(setFetchError(error));
		setTimeout(() => {
			dispatch(setFetchError(null));
		}, 3000);
	}
	const setDataRecipeEditorFromApi = async () => {
		dispatch(setLoadFetchTrue())
		const data = await fetchDrink(searchValue)
		if (typeof data === 'string') {
			dispatch(unsetEditRecipe());
			setErrorTimer(data);
			dispatch(setLoadFetchFalse());
			return
		}
		const inListDrinkRecipe = drinkRecipe.find((recipe) => recipe.name === data?.name)
		if (data) {
			if (!inListDrinkRecipe) {
				dispatch(setEditRecipe(data))
			}
			else {
				dispatch(setEditRecipe(inListDrinkRecipe))
			}
		}
		dispatch(setLoadFetchFalse())
	}
	return (
		<Stack
			direction="row"
			spacing={2}
			minWidth={'500px'}
			paddingBlock={'1em'}
			borderBottom={'solid 1px black'}
		>
			<Stack minWidth={'300px'}>
				<Autocomplete
					id="free-solo-demo"
					freeSolo
					size='small'
					value={searchValue}
					options={drinkRecipe.map((recipe) => recipe.name)}
					renderInput={(params) => <TextField {...params} label="   Search..." />}
					onInputChange={(_event, value) => value !== null && setSearchValue(value)}
				/>
			</Stack>
			<Button
				size='small'
				sx={{ minWidth: '10em' }}
				variant="outlined"
				onClick={setDataRecipeEditorFromApi}
			>
				<LanguageIcon />
				Cari
			</Button>
		</Stack>
	)
}

export default RecipeSearch