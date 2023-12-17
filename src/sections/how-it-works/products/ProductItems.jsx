import Image from "next/image"

import img1 from "/assets/updated-images/img1.png";
import img2 from "/assets/updated-images/img2.png";
import img3 from "/assets/updated-images/img3.png";

import { Box, Typography } from '@mui/material'


export const productItems = [
	{
		src: img1,
		alt: 'product-img',
		content: <Box>
			<Typography mb={0.5} variant="h6" color="initial" fontWeight="bold">
				Hygenic Pro+
			</Typography>
			<Typography variant="h5" color="initial" fontWeight="bold" textAlign={'center'}>
				100$
			</Typography>
		</Box>
	},
	{
		src: img2,
		alt: 'product-img',
		content: <Box>
			<Typography mb={0.5} variant="h6" color="initial" fontWeight="bold">
				Hygenic Pro+
			</Typography>
			<Typography variant="h5" color="initial" fontWeight="bold" textAlign={'center'}>
				100$
			</Typography>
		</Box>
	},
	{
		src: img3,
		alt: 'product-img',
		content: <Box>
			<Typography mb={0.5} variant="h6" color="initial" fontWeight="bold">
				Hygenic Pro+
			</Typography>
			<Typography variant="h5" color="initial" fontWeight="bold" textAlign={'center'}>
				100$
			</Typography>
		</Box>
	},
]