import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'
import Checkout from './components/Cart/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div>
          <Rotas />
        </div>
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
