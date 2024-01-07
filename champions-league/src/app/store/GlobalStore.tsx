// GlobalStateContext.tsx

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { STATE, Team, teamsList } from '../utils/utils'

// Define your global state and actions
interface GlobalState {
	appState: STATE
	teams: Team[]
	selectedTeam: Team | null
}

interface GlobalStateContextProps {
	state: GlobalState
	dispatch: React.Dispatch<Action>
}

interface Action {
	type: string
	payload?: any
}

// Your initial state
const initialState: GlobalState = {
	appState: STATE.INITIAL,
	teams: teamsList,
	selectedTeam: null,
}

// Your global state reducer
const globalStateReducer = (
	state: GlobalState,
	action: Action,
): GlobalState => {
	switch (action.type) {
		case 'SET_APP_STATE':
			return { ...state, appState: action.payload }
		case 'REMOVE_TEAM':
			return {
				...state,
				teams: state.teams.filter((_, index) => index !== action.payload),
			}
		case 'RELOAD': {
			return {
				...state,
				teams: teamsList,
				appState: STATE.INITIAL,
			}
		}
		case 'SELECT_RANDOM_TEAM':
			return {
				...state,
				selectedTeam: action.payload,
				appState: STATE.FINISHED,
			}
		default:
			return state
	}
}

// Create your global context
const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(
	undefined,
)

// Your provider component
export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(globalStateReducer, initialState)

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStateContext.Provider>
	)
}

// Your custom hook to access the global state
export const useGlobalState = (): GlobalStateContextProps => {
	const context = useContext(GlobalStateContext)
	if (!context) {
		throw new Error('useGlobalState must be used within a GlobalStateProvider')
	}
	return context
}
