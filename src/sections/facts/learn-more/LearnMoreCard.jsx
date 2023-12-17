import Image from "next/image"
import { Box, Card, CardContent, Typography } from "@mui/material"

export default function LearnMoreCard({ src, alt, description }) {
    return (
        <Card sx={{borderRadius: '32px'}}>
            <CardContent sx={{px: 4}}>
                <Box display="flex" justifyContent="center" mb={3}>
                    <Image
                        src={src}
                        alt={alt}
                        height={'auto'}
                        width={'100%'}
                    />
                </Box>

                <Box>
                    <Typography variant="body1" color="initial">
                        {description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}
