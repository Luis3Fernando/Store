import './App.css'
import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../home/Home'
import Account from '../components/Account'
import NotFound from '../components/NotFound'
import Order from '../components/Order'
import Orders from '../components/Orders'
import Signin from '../components/Signin'

const AppRoutes = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home></Home> },
    { path: '/my-account', element: <Account></Account> },
    { path: '/*', element: <NotFound></NotFound> },
    { path: '/order', element: <Order></Order> },
    { path: '/orders', element: <Orders></Orders> },
    { path: '/signin', element: <Signin></Signin> },
  ])

  return routes
}

function App() {
  
  return (
    <>
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
    </>
  )
}

export default App
