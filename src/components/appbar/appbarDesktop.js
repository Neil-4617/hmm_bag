// Dependencies
// Material UI
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import SearchIcon from '@mui/icons-material/Search'

// component 
import Actions from './Actions'
// style
import { AppbarContainer, 
		AppbarHeader, 
		MyList
		} from '../../styles/appbar/index'


const AppbarDesktop = ({matches}) => {

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
						<SearchIcon />
					</ListItemIcon>
				</ListItemButton>
			</MyList>
			<Actions matches={matches}/>
		</AppbarContainer>
	)
}

export default AppbarDesktop