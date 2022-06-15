// Material UI
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

// styles
import {
	AppbarContainer,
	AppbarHeader
	} from '../../styles/appbar/index'

// components
import Actions from './Actions' 


const AppbarMobile = ({matches}) => {
	return (
		<AppbarContainer>
			<IconButton>
				<MenuIcon />
			</IconButton>
			<AppbarHeader textAlign={"center"} variant="h4">
				My Bags
			</AppbarHeader>
			<IconButton>
				<SearchIcon />
			</IconButton>
			<Actions matches={matches} />
		</AppbarContainer>
	)
}

export default AppbarMobile