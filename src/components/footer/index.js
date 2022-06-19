// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import SendIcon from '@mui/icons-material/Send'

// Style/Themes
import { FooterTitle, SubscribeTF } from '../../styles/footer'
import { Colors } from '../../styles/theme'

const Footer =() => {
	return (
		<Box
			sx={{
				background: Colors.shaft,
				color: Colors.white,
				p: { xs: 4, md:10 },
				py: 12,
				fontSize: { xs: '12px', md: '14px' }
			}}
		>
			<Grid container spacing={2} justifyContent="center">
				<Grid item md={6} lg={4}>
					<FooterTitle variant="body1">About Us</FooterTitle>
					<Typography variant="caption2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</Typography>
					<Box sx={{ mt: 4, color:Colors.dove_grey }} >
						<FacebookIcon sx={{ mr: 1}} />
						<TwitterIcon sx={{ mr: 1}} />
						<InstagramIcon />
					</Box>
				</Grid>
				<Grid item md={6} lg={4}>
					<FooterTitle variant="body1">Information</FooterTitle>
					<List>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>About Us</Typography>
						</ListItemText>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>Order Tracking</Typography>
						</ListItemText>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>Privacy &amp;Policy</Typography>
						</ListItemText>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>Terms &amp; Conditions</Typography>
						</ListItemText>
						 
					</List>
				</Grid>
				<Grid item md={6} lg={2}>
					<FooterTitle variant="body1">My Account</FooterTitle>
					<List>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>Login</Typography>
						</ListItemText>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>My Cart</Typography>
						</ListItemText>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>My Account</Typography>
						</ListItemText>
						<ListItemText>
							<Typography variant="caption2" lineHeight={2}>Wishlist</Typography>
						</ListItemText>
						 
					</List>
				</Grid>
				<Grid item md={6} lg={2}>
					<FooterTitle variant="body1">Newsletter</FooterTitle>
					<Stack>
						<SubscribeTF
							color="primary"
							label="Email address"
							variant="standard"
						/>
						<Button
							startIcon={ <SendIcon sx={{ color: Colors.white  }} /> }
							sx={{ mt: 4, mb: 4 }}
							variant="contained"
						>
							Subscribe
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
} 

export default Footer