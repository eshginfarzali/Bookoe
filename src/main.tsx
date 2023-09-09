
import {createRoot} from 'react-dom/client'
import { store } from './redux'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './styles/reset.css'
import './styles/font.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>
)
