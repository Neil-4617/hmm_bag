// Material UI
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

// Style
import { Colors } from '../theme'

export const FooterTitle = styled(Typography)(() =>({
	textTransform: 'upperCase',
	marginBottom: '1em'
}));

export const SubscribeTF =styled(TextField)(()=>({
	'.MuiInputLabel-root': {
		color: Colors.secondary
	},
	'.MuiInput-root::before': {
		borderBottom: `1px solid ${Colors.secondary}`
	}
}))