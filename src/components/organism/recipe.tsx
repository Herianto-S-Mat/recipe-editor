import { css } from "@emotion/react";
import { Ingredient, RecipeState } from "@models/type";
import { FC } from "react";
import { Box, Stack, Table, Typography } from "@mui/material";

const style = css`
	tfoot,
	thead {
		background: rgba(0, 0, 0, 0.2);
	}
	td,
	th {
		padding-inline: 3px;
		text-align: left;
	}
	th img {
		height: 1em;
	}
`;

const Recipe: FC<{ recipe: RecipeState }> = ({ recipe }) => {
	const units = [
		...new Set(
			recipe.ingredients.map((ingredient: Ingredient) => ingredient.unit)
		),
	];
	return (
		<Stack>
			<Typography padding={"1em 0 0"}>
				<b>Instructions: </b>
			</Typography>
			<Box m={1}>
				<Table>
					<tbody>
						{recipe?.ingredients.map((ingredient: Ingredient, index) =>
							ingredient.value ? (
								<tr key={index}>
									<th>{index + 1}.</th>
									<td>{ingredient.name}</td>
									<td>
										{ingredient.value} {ingredient.unit}{" "}
									</td>
								</tr>
							) : null
						)}
					</tbody>
				</Table>
			</Box>
			<Typography textAlign={"right"} padding={"1em 1em 0"}>
				<i style={{ marginRight: "1em" }}>Total Ingredients: </i>
				<b>
					{units.map((unit, index) => (
						<i key={index}>
							{`${recipe.ingredients.reduce(
								(a, b) => (b.unit === unit ? a + b.value : a),
								0
							)} ${unit}`}
							{index < units.length - 1 ? " + " : ""}
						</i>
					))}
				</b>
			</Typography>
			<Typography padding={"1em 0 0"}>
				<b>Instructions: </b>
			</Typography>
			<Typography m={1}>{recipe.instructions}</Typography>
		</Stack>
	);
};

export default Recipe;
