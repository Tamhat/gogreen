"use client"

import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'


export default function ProductSection() {
	const theme = useTheme()

	return (
		<>
			<Box display="flex" justifyContent="center" sx={{ position: 'absolute', left: '40%' }}>
				<Box height={70} width={70} sx={{ position: 'relative', top: -25, left: 50, borderRadius: 10, backgroundColor: alpha(theme.palette.primary.main, 0.2) }} />
				<Typography variant="h4" color="primary" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
					Products
				</Typography>
			</Box>
			<Box display="flex" justifyContent="center" mt={8}>
				<Typography variant="h6" color="text.black" fontWeight="medium">
					Easy <Box component="span" sx={{color: theme.palette.primary.main}}>Self Install</Box>. No Plumbing or Electrical Work Needed!
				</Typography>
			</Box>
		</>
	)
}
