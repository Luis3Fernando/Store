import './App.css'
import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../home/Home'
import Account from '../others/Account'
import NotFound from '../others/NotFound'
import Order from '../others/Order'
import Orders from '../others/Orders'
import Signin from '../others/Signin'
import Navbar from '../../components/Navbar'
import Context from '../../context/Context';

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
    <Context>
    <BrowserRouter>
      <AppRoutes></AppRoutes>
      <Navbar></Navbar>
    </BrowserRouter>
    </Context>
    </>
  )
}

export default App
