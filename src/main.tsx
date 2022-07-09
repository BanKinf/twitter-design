import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from './app/App'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <ChakraProvider theme={theme} >
          <App />
        </ChakraProvider>
      </BrowserRouter>
  </>
);