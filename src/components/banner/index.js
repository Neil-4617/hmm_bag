// Material UI
import Typography from '@mui/material/Typography'


// components
// style
import { 
	BannerContainer,
	BannerContent,
	BannerTitle,
	BannerDescription,
	BannerImage,
	BannerShopButton
	} from '../../styles/banner' 


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
				<BannerShopButton color="primary">Shop Now</BannerShopButton>
			</BannerContent>
		</BannerContainer>
	)
}

export default Banner