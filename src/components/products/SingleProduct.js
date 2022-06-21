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

// Components
import ProductMeta from './ProductMeta'
import ProductDetail from '../productdetail'

// Custom Hook
import useDialogModel from '../../hooks/useDialogModel'

const SingleProduct = ({matches, product}) => {

	const [ ProductDetailDialog, showProductDetailDialog] = useDialogModel(ProductDetail)

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
						<ProductActionButton onClick={() => showProductDetailDialog()} >
							<FitScreenIcon color="primary" />
						</ProductActionButton>
					</Stack>
				</ProductActionWrapper>
			</Product>
			<ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
			<ProductDetailDialog product={product} />
		</>
	) 
}

export default SingleProduct