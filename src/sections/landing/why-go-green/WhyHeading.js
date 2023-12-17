"use client"

import { useTheme, alpha } from "@mui/material/styles"
import { Box, Typography } from '@mui/material'

export default function WhyHeading() {
    const theme = useTheme()
    return (
        <Box display="flex" justifyContent="center" sx={{ position: 'absolute', left: '30%' }}>
            <Box height={70} width={70} sx={{ position: 'relative', top: -25, left: 50, borderRadius: 10, backgroundColor: alpha(theme.palette.success.main, 0.2) }} />
            <Typography variant="h4" fontWeight="bold" sx={{ textTransform: 'uppercase', color: theme.palette.success.main }}>
                Why go green booty?
            </Typography>
        </Box>
    )
}
