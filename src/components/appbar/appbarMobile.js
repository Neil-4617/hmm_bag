// Material UI
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

// styles
import {
	AppbarContainer,
	AppbarHeader
	} from '../../styles/appbar'

// components
import Actions from './Actions' 

// Context
import { useUIContext} from '../../context/ui'

const AppbarMobile = ({matches}) => {

	const { setDrawerOpen, setShowSearchBox } = useUIContext() 

	return (
		<AppbarContainer>
			<IconButton onClick={() => setDrawerOpen(true)} >
				<MenuIcon />
			</IconButton>
			<AppbarHeader textAlign={"center"} variant="h4">
				My Bags
			</AppbarHeader>
			<IconButton>
				<SearchIcon onClick={() => setShowSearchBox(true)}/>
			</IconButton>
			<Actions matches={matches} />
		</AppbarContainer>
	)
}

export default AppbarMobile