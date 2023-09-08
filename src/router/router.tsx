import { createBrowserRouter } from 'react-router-dom';
import {Layout} from '../components/Layout'
import { Home } from '../pages';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
        {
          index: true,
          element: <Home/>,
        },
    ]
  }

])