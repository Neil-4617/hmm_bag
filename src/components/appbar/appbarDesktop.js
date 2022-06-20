// Dependencies
// Material UI
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import SearchIcon from '@mui/icons-material/Search'

// component 
import Actions from './Actions'

// Context
import { useUIContext } from '../../context/ui'

// style
import { AppbarContainer, 
		AppbarHeader, 
		MyList
		} from '../../styles/appbar'


const AppbarDesktop = ({matches}) => {

	const { setShowSearchBox } = useUIContext()

	return (
		<AppbarContainer>
			<AppbarHeader>My Bags</AppbarHeader>
			<MyList type="row">
				<ListItemText primary="Home" />
				<ListItemText primary="Categories" />
				<ListItemText primary="Products" />
				<ListItemText primary="Contact Us" />
				<ListItemButton>
					<ListItemIcon>
						<SearchIcon onClick={() => setShowSearchBox(true)} />
					</ListItemIcon>
				</ListItemButton>
			</MyList>
			<Actions matches={matches}/>
		</AppbarContainer>
	)
}

export default AppbarDesktop