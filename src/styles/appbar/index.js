
// fontstyle Montez
import '@fontsource/montez'

// Material UI
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'

// custom color
import {Colors} from '../theme'

// container
export const AppbarContainer = styled(Box)(() =>({
	display: 'flex',
	marginTop: 4,
	justifyContent: 'center',
	alignItems: 'center',
	padding: '2px 8px'
}));

// header
export const AppbarHeader = styled(Typography)(()=>({
	padding:'4px',
	fontSize: '4em',
	flexGrow: 1,
	fontFamily: '"Montez", "cursive"',
	color: Colors.secondary
}));

// Product List
export const MyList = styled(List)(({type})=> ({
	display: type === 'row' ? 'flex' : 'block',
	flexGrow: 3,
	justifyContent: 'center',
	alignItems: 'center'
}));

// Icons for Action component
export const ActionIconsContainerMobile = styled(Box)(() =>({
	display: 'flex',
	background: Colors.shaft,
	position: 'fixed',
	bottom: 0,
	left: 0,
	width: '100%',
	alignItems: 'center',
	zIndex: 99,
	borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() =>({
	flexGrow: 0
}));

export const DrawerCloseButton = styled(IconButton)(()=>({
	position: 'absolute',
	top: 10,
	left: '250px',
	zIndex: 1999
}));