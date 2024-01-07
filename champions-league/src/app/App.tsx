import React, { useRef, useState } from 'react'
import { useGlobalState } from './store/GlobalStore'
import { STATE, Team } from './utils/utils'
import MainComponent from './components/MainComponent'
import LoadingSpinnerComponent from './components/LoadingSpinnerComponent'
import Button from '@mui/material/Button'
import TeamCardComponent from './components/TeamCardComponent'

function App() {
	const { state, dispatch } = useGlobalState()
	const audioRef = useRef<HTMLAudioElement>(null)
	const [previousSelections, setPreviousSelections] = useState<Team[]>([])

	const selectRandomTeam = () => {
		if (state.teams.length === 0) {
			return
		}

		dispatch({ type: 'SET_APP_STATE', payload: STATE.LOADING })

		setTimeout(() => {
			const maxAttempts = 2 // Set a maximum number of attempts to avoid an infinite loop
			let attempts = 0
			let randomIndex: number
			let isUnique: boolean

			do {
				randomIndex = Math.floor(Math.random() * state.teams.length)
				attempts++

				isUnique = !previousSelections
					.slice(-2)
					.includes(state.teams[randomIndex])

				if (isUnique) {
					setPreviousSelections((prev) => [...prev, state.teams[randomIndex]])
				}
			} while (!isUnique && attempts < maxAttempts)

			dispatch({ type: 'SET_APP_STATE', payload: STATE.FINISHED })
			dispatch({
				type: 'SELECT_RANDOM_TEAM',
				payload: state.teams[randomIndex],
			})
		}, 6000)
	}

	const repopulateTeamList = () => {
		dispatch({ type: 'RELOAD' })
	}

	return (
		<>
			<header className='flex flex-col items-center justify-center'>
				<div
					className='w-full h-[200px] bg-center bg-no-repeat bg-cover sm:bg-bottom'
					style={{
						backgroundImage:
							'url(https://www.arsenal.com/sites/default/files/styles/desktop_16x9/public/gun__1381310671_uefa_champions_league.jpg?auto=webp&itok=Tbb7Q7-u)',
					}}
				/>
			</header>

			{state.appState === STATE.INITIAL && (
				<main className='grid justify-items-center my-8'>
					{state.teams.length > 1 ? (
						<Button
							onClick={selectRandomTeam}
							variant='contained'
							size='large'
							color='warning'
						>
							SELECT A TEAM
						</Button>
					) : (
						<Button
							onClick={repopulateTeamList}
							variant='contained'
							size='large'
							color='warning'
						>
							Restart
						</Button>
					)}
					<MainComponent />
				</main>
			)}

			{state.appState === STATE.LOADING && (
				<main className='grid justify-items-center my-8 gap-4'>
					<LoadingSpinnerComponent />
					<audio ref={audioRef} autoPlay>
						<source
							src='https://soundfxcenter.com/sports/soccer/8d82b5_UEFA_Champions_League_Theme_Song.mp3'
							type='audio/mpeg'
						/>
					</audio>
				</main>
			)}

			{state.appState === STATE.FINISHED && (
				<main className='grid justify-items-center my-8 gap-8'>
					<Button
						onClick={repopulateTeamList}
						variant='contained'
						size='large'
						color='warning'
					>
						Restart
					</Button>

					<TeamCardComponent
						name={state.selectedTeam?.name ?? ''}
						logoURL={state.selectedTeam?.logoURL ?? ''}
					/>
				</main>
			)}
		</>
	)
}

export default App
