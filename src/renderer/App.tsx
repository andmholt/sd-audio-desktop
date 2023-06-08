import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// components
import Dash from './components/Dash'
import Login from './components/Login'
import Generate from './components/Machines/Generate'
import Library from './components/Library/Library'

export default function App() {

	// ===== theme =====
	const lightTheme = createTheme({
		palette: {
			primary: {
				dark: '#3c096c',
				main: '#7b2cbf',
				light: '#e0aaff',
			},
			secondary: {
				dark: '#431c00',
				main: '#6e4419',
				light: '#a97f58'
			},
			background: {
				default: 'white'
			},
			success: {
				dark: '#388e3c',
				main: '#66bb6a',
				light: '#81c784',
			}
		}
	})
	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#19446e',
				light: '#e4f0f5',
			},
			secondary: {
				dark: '#431c00',
				main: '#6e4419',
				light: '#a97f58'
			},
			background: {
				default: '#292929',
			},
			success: {
				dark: '#388e3c',
				main: '#66bb6a',
				light: '#81c784',
			}
		}
	})

    return (
		<div style={{display: 'flex', width: '100%', height: '100%', position: 'absolute', padding: 0, top: 0, left: 0}}>
			<ThemeProvider theme={lightTheme}>
				<HashRouter>
					<Routes>

						{/* Dash */}
						<Route path='/' element={<Dash />} />

						{/* Login */}
						<Route path='/login' element={<Login />} />

						{/* Generate */}
						<Route path='/generate' element={<Generate />} />

						{/* Library */}
						<Route path='/library' element={<Library />} />

					</Routes>
				</HashRouter>
			</ThemeProvider>
		</div>
    )
}