import { css } from '@emotion/react'
import { Box } from '@mui/material';
import React from 'react'
const getStyles = (props: { rounded: boolean }) => {
	const minWidth = '700px'
	return `
        display: flex;
        flex-direction: column;
        gap: 1em;
        background-color: white;
        padding: 1em;
        border: solid 1px greenyellow;
        min-width: ${props.rounded ? minWidth : `calc(${minWidth} - 2rem)`};
        border-radius: ${props.rounded ? '1rem' : '0'};
    `;
}


const RecipeCard: React.FC<{ children?: React.ReactNode, rounded?: boolean }> = ({
	children,
	rounded = false
}) => {
	return (
		<Box
			component="section"
			sx={{
				p: 2,
				border: '1px solid greenyellow',
				borderRadius: rounded ? '1rem' : '0',
				background: 'white',
				minWidth: '400px',
			}}
		>
			{children}
		</Box>
	)
}

export default RecipeCard