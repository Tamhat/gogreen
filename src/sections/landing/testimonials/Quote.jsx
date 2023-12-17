import Image from "next/image"

import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import { alpha, useTheme } from "@mui/material/styles"

import left from '/public/assets/testimonial/“ (1).png'
import right from '/public/assets/testimonial/“.png'

export default function Quote({ quoteText }) {

	const theme = useTheme()

	const downMd = useMediaQuery(theme.breakpoints.down("md"))

	return (
		<>
		{!downMd ? (
			<Box>
			{/* Background Circle Effect */}
			<Box sx={{
				width: 300,
				height: 300,
				position: 'absolute',
				right: 60,
				bottom: 130,
				borderRadius: '50%',
				backgroundColor: alpha(theme.palette.primary.main, 0.25)
			}} />
			<Container>

				{/* Quote Image */}
				<Box>
					<Image
						src={right}
						alt={'quotes end'}
						height={40}
						width={40}
					/>
				</Box>

				{/* Content */}
				<Box>
					<Typography variant={downMd ? "h6" : "h4"} color="initial">
						{quoteText}
					</Typography>
				</Box>


				{/* Quote Image */}
				<Box display="flex" justifyContent="center">
					<Image
						src={left}
						alt={'quotes start'}
						height={40}
						width={40}
					/>
				</Box>

			</Container>
		</Box>
		):(
		<Box>
			{/* Background Circle Effect */}
			<Box sx={{
				width: 250,
				height: 250,
				position: 'absolute',
				right: 23,
				bottom: 36,
				borderRadius: '50%',
				backgroundColor: alpha(theme.palette.primary.main, 0.25)
			}} />
			<Container>

				{/* Quote Image */}
				<Box>
					<Image
						src={right}
						alt={'quotes end'}
						height={40}
						width={40}
					/>
				</Box>

				{/* Content */}
				<Box>
					<Typography variant={downMd ? "h6" : "h4"} color="initial">
						{quoteText}
					</Typography>
				</Box>


				{/* Quote Image */}
				<Box display="flex" justifyContent="center">
					<Image
						src={left}
						alt={'quotes start'}
						height={40}
						width={40}
					/>
				</Box>

			</Container>
		</Box>
		
		)}
		</>
	)
}
