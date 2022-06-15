// Material UI
import {styled} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// custom color
import {Colors} from '../theme/index'

// container
export const AppbarContainer = styled(Box)(() =>{
	display: 'flex',
	marginTop:4,
	justifyContent: 'center',
	alignItems: 'center',
	padding: '2px 8px'
})

// header
export const AppbarHeader = styled(Typography)(()=>{
	padding:'4px',
	fontSize: '4em',
	flexGrow: 1,
	fontFamily: '"Montez", "cursive"',
	color: Colors.secondary
})