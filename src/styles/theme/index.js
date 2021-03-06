// Material UI
import {createTheme} from '@mui/material/styles'

//  Polished
import { lighten } from 'polished'

// Custom Color
export const Colors = {
	primary: "#5f2c3e",
	secondary: "#d1adcc",
	success: "#43CA530",
	info: "#00a2ff",
	danger: "#FF5722",
	warning:"#FFC107",
	dark:"0e1b20",
	light:"#aaa",
	border:"#DDDFE1",
	inverse:"2F3D4A",
	shaft:"#333",

	// Greys
	dim_grey:"#696969",
	dove_grey:"#d5d5d5",
	body_bg:"#f3f6f9",
	light_grey:"rgb(230,230,230)",

	// Solid Color
	white:"#fff",
	black:"#000"
}

const theme = createTheme({
	palette: {
		primary: {
			main: Colors.primary
		},
		secondary: {
			main: Colors.secondary
		}
	},

	components : {
		// custom button
		MUIButton:{
			defaultProps:{
				 disableRipple: true,
				 disableElevation:true
			}
		},

		// custom drawer
		MuiDrawer: {
			styleOverrides: {
				paper: {
					width: 250,
					background: Colors.primary,
					color: Colors.secondary,
					borderRadius: "0px 100px 0px 0px",
					borderRight: `1px solid ${Colors.secondary}`
				}
			}
		},

		// Custom Divider
		MuiDivider: {
			styleOverrides: {
				root: {
					borderColor: lighten(0.2, Colors.primary)
				}
			}
		},

		// custom shop button
		MyShopButton: {
			styleOverrides: {
				root: {
					color: Colors.white
				},
				primary: {
					background: Colors.primary,
					"&:hover": {
						background: lighten(0.05, Colors.primary),
					}
				},
				secondary: {
					background: Colors.secondary,
					"&:hover": {
						background: lighten(0.05, Colors.secondary),
					}
				},
			}
		}
	}

})

export default theme