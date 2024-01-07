import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function LoadingSpinnerComponent() {
	const [progress, setProgress] = useState<number>(0)

	useEffect(() => {
		let count = progress

		const timer = setInterval(() => {
			count += 100 / 7
			setProgress(count)
		}, 900)

		return () => {
			clearInterval(timer)
		}
	}, [progress])

	return (
		<>
			<Image
				priority
				loading='eager'
				src='data:image/png;base64,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'
				alt='Champions League Ball'
				width={80}
				height={80}
				className='w-[80px] h-[80px] rounded-full animate-bounce mt-6'
			/>

			<Typography
				className='text-center text-white font-extrabold'
				gutterBottom
				variant='h6'
				component='div'
			>
				Wait, we are choosing you a team...
			</Typography>
			<Box sx={{ width: '50%' }}>
				<LinearProgress
					className='!h-[20px] rounded-xl'
					variant='determinate'
					value={progress}
					color='primary'
				/>
			</Box>
		</>
	)
}

export default LoadingSpinnerComponent
