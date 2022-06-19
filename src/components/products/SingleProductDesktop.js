// Material UI
import Stack from '@mui/material/Stack'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'

// Styles
import { 
	Product,
	ProductImage,
	ProductActionWrapper,
	ProductFavButton,
	ProductActionButton,
	ProductAddToCart
	} from '../../styles/products'

// component
import ProductMeta from './ProductMeta'

import { useState } from 'react'


const SingleProduct = ({matches, product}) => {

	const [showOptions, setShowOptions] = useState(false)

	const handleMouseEnter = () => {
		setShowOptions(true)
	}

	const handleMouseLeave = () => {
		setShowOptions(false)
	}

	return (
		<>
			<Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
				<ProductImage src={product.image} />
				<ProductFavButton isFav={0}>
					<FavoriteIcon />
				</ProductFavButton>
					{
						showOptions && 
						<ProductAddToCart show={setShowOptions} variant="contained">
						Add to Cart
						</ProductAddToCart> 
					}

				<ProductActionWrapper show={showOptions}>
					<Stack direction="column">
						<ProductActionButton>
							<ShareIcon color="primary" />
						</ProductActionButton>
						<ProductActionButton>
							<FitScreenIcon color="primary" />
						</ProductActionButton>
					</Stack>
				</ProductActionWrapper>
			</Product>
			<ProductMeta product={product} matches={matches} />
		</>
	) 
}

export default SingleProduct