// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

// Style
import { Colors } from '../../styles/theme'

// clamp
import { clamp } from './clamp'

import { useState } from 'react'



const IncDec = () => {

	const clampV = clamp(1, 10)
	const [value, setValue] = useState(1)
	
	return (
			<Box display = "flex">
			 <IconButton
			 	sx={{
			 		borderRadius: 0,
			 		background: `${Colors.secondary}`
			 	}}
			 	onClick = {() =>  setValue(clampV(value -1))}
			 >
			 	<RemoveIcon />
			 </IconButton>
			 <Typography
			 	variant="h6"
			 	sx={{
			 		border: `1px solid ${Colors.secondary}`,
			 		p: 2
			 	}}
			 >{value}</Typography>
			 <IconButton
			 	sx={{
			 		borderRadius: 0,
			 		background: `${Colors.secondary}`
			 	}}
			 	onClick = {() =>  setValue(clampV(value +1))}
			 >
			 	<AddIcon />
			 </IconButton>
			</Box>
	)
}

export default IncDec