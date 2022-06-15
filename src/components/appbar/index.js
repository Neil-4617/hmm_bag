// Material UI
import {useTheme} from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'

const Appbar = () => {
	
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))
	return (
		<>
			{matches ? <h1>Mobile</h1> : <h1>Desktop</h1>}
		</>
		)
}

export default Appbar