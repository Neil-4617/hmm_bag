// Material UI
import {ThemeProvider} from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


import {useEffect} from 'react'

// Styles
import theme from './styles/theme/index.js'

// Components
import Appbar from './components/appbar'
import Banner from './components/banner'
import Promotions from './components/promotions'
import Products from './components/products'
import Footer from './components/footer'


function App() {

  useEffect(() => {
    document.title = "React Material UI - Home"
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{background: 'fff'}} 
      >
          <Appbar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent={"center"} sx={{ p:4}}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
      {
        /*
          
          searchbox
          appDrawer
        */
      }
      </Container>
    </ThemeProvider>
  );
}

export default App;
