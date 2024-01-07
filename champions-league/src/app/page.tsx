'use client'

import App from './App'
import { GlobalStateProvider } from './store/GlobalStore'

export default function Home() {
	return (
		<>
			<GlobalStateProvider>
				<App></App>
			</GlobalStateProvider>
		</>
	)
}
