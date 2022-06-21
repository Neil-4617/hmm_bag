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
import ProductDetail from '../productdetail'

// Custom Hooks
import useDialogModel from '../../hooks/useDialogModel'

import { useState } from 'react'


const SingleProductDesktop = ({matches, product}) => {

	const [ ProductDetailDialog, showProductDetailDialog] = useDialogModel(ProductDetail)

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
						<ProductActionButton onClick={() => showProductDetailDialog()}>
							<FitScreenIcon color="primary" />
						</ProductActionButton>
					</Stack>
				</ProductActionWrapper>
			</Product>
			<ProductMeta product={product} matches={matches} />
			<ProductDetailDialog product={product} />
		</>
	) 
}

export default SingleProductDesktop