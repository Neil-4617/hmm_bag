// Material UI
import {useTheme} from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'

// components
import AppbarDesktop from './AppbarDesktop'
import AppbarMobile from './AppbarMobile'


const Appbar = () => {
	
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	
	return (
		<>
			{ matches 
				? <AppbarMobile matches={matches} /> 
				: <AppbarDesktop matches={matches} /> 
			}
		</>
		)
}

export default Appbar