import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

const styles = css`
	font-size: 2rem;
	color: white;
	background-color: rgba(0, 0, 0, 0.2);
	margin: 0;
	padding: 0.1em 2em;
	font-transform: capitalize;
	font-family: "Nunito", sans-serif;
`;
const RecipeTitle: React.FC<{ title: string }> = ({ title }) => {
	return (
		<Typography variant="h5" css={styles}>
			{title}
		</Typography>
	);
};

export default RecipeTitle;
