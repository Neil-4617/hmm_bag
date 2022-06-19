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

const SingleProduct = ({matches, product}) => {
	return (
		<>
			<Product>
				<ProductImage src={product.image} />
				<ProductMeta product={product} matches={matches} />
				<ProductActionWrapper>
					<Stack direction="row">
						<ProductFavButton isFav={0}>
							<FavoriteIcon />
						</ProductFavButton>
						<ProductActionButton>
							<ShareIcon color="primary" />
						</ProductActionButton>
						<ProductActionButton>
							<FitScreenIcon color="primary" />
						</ProductActionButton>
					</Stack>
				</ProductActionWrapper>
			</Product>
			<ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
		</>
	) 
}

export default SingleProduct