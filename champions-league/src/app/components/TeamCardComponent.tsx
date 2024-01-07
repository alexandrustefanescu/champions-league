'use client'

import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import React from 'react'

type Props = {
	name: string
	logoURL: string
	onClick?: () => void
}

function TeamCardComponent({ name, logoURL, onClick }: Props) {
	return (
		<Card
			sx={{ maxWidth: 180, maxHeight: 300 }}
			className='bg-blue-950 rounded-xl'
		>
			<CardActionArea onClick={onClick}>
				<CardMedia
					component='img'
					height='80'
					width={80}
					image={logoURL}
					alt={name}
					className='w-[180px] h-[180px]'
				/>
				<CardContent>
					<Typography
						className='text-center text-white font-extrabold leading-6'
						gutterBottom
						variant='h6'
						component='div'
					>
						{name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default TeamCardComponent
