import { createBrowserRouter } from 'react-router-dom'
import Chouse from '../pages/Chouse'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import ProductItem from '../pages/ProductItem'
import AddItem from '../pages/AddItem'
import Cart from '../pages/Cart'
import JeweleryPage from '../pages/categorys/JeweleryPage'
import ElectronicsPage from '../pages/categorys/ElectronicsPage'
import WomenPage from '../pages/categorys/WomenPage'
import MenPage from '../pages/categorys/MenPage'
import Buy from '../pages/Buy'
import FinishPage from '../pages/FinishPage'
import ErrorPage from '../pages/errorPage/ErrorPage'
import WithAuth from '../pages/errorPage/WithAuth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Chouse />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        index: true,
        path: 'product/:productId',
        element: <ProductItem />
      },
      {
        index: true,
        path: 'menclothing',
        element: <MenPage />
      },
      {
        index: true,
        path: 'womenclothing',
        element: <WomenPage />
      },
      {
        index: true,
        path: 'electronics',
        element: <ElectronicsPage />
      },
      {
        index: true,
        path: 'jewelery',
        element: <JeweleryPage />
      },
      {
        index: true,
        path: 'additem',
        element: <WithAuth />
      },
      {
        index: true,
        path: 'cart',
        element: <Cart />
      },
      {
        index: true,
        path: 'buy',
        element: <Buy />
      },
      {
        index: true,
        path: 'finish',
        element: <FinishPage />
      }
    ]
  }
])

export default router
