// Material UI
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Colors } from '../theme/index'


// Container
export const PromotionsContainer = styled(Box)(({theme})=>({
	[theme.breakpoints.up('md')]: {
		padding: '40px 0px 40px 0px'
	},
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '20px 0px 20px 0px',
	overflow:'hidden',
	background: Colors.secondary
}));

// Message
export const MessageText = styled(Typography)(({theme})=>({
	fontFamily: '"Montez", "cursive"',
	[theme.breakpoints.up('md')]: {
		fontSize: '3rem',
	},
	color: Colors.white,
	fontSize: '1.5rem'
}));