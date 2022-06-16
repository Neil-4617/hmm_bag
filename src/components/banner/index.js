// Material UI
import Typography from '@mui/material/Typography'


// components
// style
import { 
	BannerContainer,
	BannerContent,
	BannerTitle,
	BannerDescription,
	BannerImage
	} from '../../styles/banner/index' 


const Banner = () => {


	return (
		<BannerContainer>
			<BannerImage src="./images/banner/pexels-jonathan-borba-3155047.jpg"/>
			<BannerContent>
				<Typography variant="h6">Huge Collection</Typography>
				<BannerTitle variant="h2">New Bags</BannerTitle>
				<BannerDescription variant="subtitle">
					A classic-stylish-leathered material, tailored with a high quality fabrics. Comfort your lifestyle a decent color variation. 					
				</BannerDescription>
			</BannerContent>
		</BannerContainer>
	)
}

export default Banner