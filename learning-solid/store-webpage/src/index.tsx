/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import './index.css'
import App from './App'
import { CartContextProvider } from './contexts/CartContext'

const root = document.getElementById('root')

render(() => (
  <Router>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </Router>
), root!)
