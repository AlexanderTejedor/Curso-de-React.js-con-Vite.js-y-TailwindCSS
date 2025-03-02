import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', /* default route for the app*/ element: <Home /> /* component to render when the path is matched */},
    { path: 'my-account', element: <MyAccount /> },
    { path: 'my-order', element: <MyOrder /> },
    { path: 'my-orders', element: <MyOrders /> },
    { path: 'sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export { App } 
