// Material UI
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

//Polished 
import { lighten } from 'polished'

// Context
import { useUIContext } from '../../context/ui'

// Styles
import { Colors } from '../../styles/theme'
import { DrawerCloseButton } from '../../styles/appbar' 

// Divider
const MiddleDivider = styled((props)=> (
	<Divider variant="middle" {...props}  />
))``


const AppDrawer = () => {
	const {drawerOpen, setDrawerOpen} = useUIContext()

	return (
		<>
			{/* Drawer Button */}
			{drawerOpen && (<DrawerCloseButton onClick={()=>setDrawerOpen(false)}>
					<CloseIcon
						sx={{
							fontSize: '2.5rem',
							color: lighten(0.09, Colors.secondary)
						}} 
					/>
				</DrawerCloseButton>
			)}

			{/* Drawer Menu */}
			<Drawer open={drawerOpen}>
				<List>
					<ListItemButton>
						<ListItemText>Home</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>Categories</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>Products</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>About Us</ListItemText>
					</ListItemButton>
					<MiddleDivider />
					<ListItemButton>
						<ListItemText>Contact Us</ListItemText>
					</ListItemButton>
					
				</List>
			</Drawer>
		</>
	)
}

export default AppDrawer