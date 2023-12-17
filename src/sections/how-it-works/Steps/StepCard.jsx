import Image from "next/image"
import { Grid, Box, Typography } from "@mui/material"

export default function StepCard({ src, alt, text }) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Box sx={{
        height: '100%',
        width: '100%',
        // background: `linear-gradient(45deg, ${theme.palette.success.light}, ${theme.palette.success.main})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Box width={'60%'} display="flex" justifyContent="center" mb={2}>
          <Image
            src={src}
            alt={alt}
            height={100}
            width={'auto'}
          />
        </Box>
        <Box width={'60%'}>
          <Typography variant="h6" color="text.primary" align="center" fontWeight="bold" mb={3}>
            {text}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}
