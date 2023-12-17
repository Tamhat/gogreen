"use client"

import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledNavLink = styled(Button, { shouldForwardProp: (prop) => prop })(({ active, theme }) => ({
	color: 'black',
	position: 'relative',
	textTransform: 'capitalize',
	paddingLeft: "0",
	paddingRight: "0",
	paddingBottom: 5,
	'&:hover': {
		color: `${theme.palette.primary.light}`,
		background: 'none',
		'&::after': {
			position: 'absolute',
			bottom: '-2px',
			content: '" "',
			width: '100%',
			height: 4,
			borderRadius: 15,
			backgroundColor: `${theme.palette.primary.main}`
		},
	},

	...(active && {
		color: `${theme.palette.primary.light}`,
		background: 'none',
		'&::after': {
			position: 'absolute',
			bottom: '-2px',
			content: '" "',
			width: '100%',
			height: 4,
			borderRadius: 15,
			backgroundColor: `${theme.palette.primary.main}`
		},
	}),

	borderRadius: 0,
	borderBottom: `3px solid ${theme.palette.primary}`
}))