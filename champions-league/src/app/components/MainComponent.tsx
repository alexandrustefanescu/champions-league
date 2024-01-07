import { useGlobalState } from '../store/GlobalStore'
import TeamCardComponent from './TeamCardComponent'

function MainComponent() {
	const { state, dispatch } = useGlobalState()

	const removeTeam = (index: number) => {
		dispatch({ type: 'REMOVE_TEAM', payload: index })
	}

	return (
		<section className='grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-2 sm:gap-6 my-8 mx-2'>
			{state.teams.map(({ name, logoURL }, index) => (
				<TeamCardComponent
					onClick={() => removeTeam(index)}
					key={index}
					name={name}
					logoURL={logoURL}
				/>
			))}
		</section>
	)
}

export default MainComponent
