// Material UI
import {ThemeProvider} from '@mui/material/styles'
import Container from '@mui/material/Container'

import {useEffect} from 'react'

// Styles
import theme from './styles/theme/index.js'

// Components
import Appbar from './components/appbar/index.js'
import Banner from './components/banner/index.js'


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
      {
        /*
          Promotions
          title
          products
          footer
          searchbox
          appDrawer
        */
      }
      </Container>
    </ThemeProvider>
  );
}

export default App;
