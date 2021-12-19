import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Shop from './Components/Pages/Shop/Shop';
import NotFound from './Components/Pages/NotFound/NotFound';
import AddProducts from './Components/Pages/Admin/AddProducts/AddProducts';
import ProductPurchase from './Components/Pages/ProductPurchase/ProductPurchase';
import Registration from './Components/Pages/LogInType/Registration/Registration';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider'
import LogIn from './Components/Pages/LogInType/LogIn/LogIn';
import PrivateRoute from './Components/Pages/LogInType/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Pay from './Components/Pages/AllPrivitepages/NormalUser/Pay/Pay';
import MyOrders from './Components/Pages/AllPrivitepages/NormalUser/MyOrders/MyOrders';
import AddReview from './Components/Pages/AllPrivitepages/NormalUser/AddReview/AddReview';
import AdminRoute from './Components/Pages/LogInType/AdminRoute/AdminRout';
import ManageProduct from './Components/Pages/AllPrivitepages/AdminUser/ManageProduct/ManageProduct';
import ManageAllOrders from './Components/Pages/AllPrivitepages/AdminUser/ManageAllOrders/ManageAllOrders';
import MakeAdmin from './Components/Pages/AllPrivitepages/AdminUser/MakeAdmin/MakeAdmin';
import AddProduct from './Components/Pages/AllPrivitepages/AdminUser/AddProduct/AddProduct';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/addProducts'>
            <AddProducts></AddProducts>
          </Route>
          <Route path='/Registration'>
            <Registration></Registration>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <PrivateRoute exact path='/ProductPurchase/:id'>
            <ProductPurchase></ProductPurchase>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/pay'>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path='/MyOrders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path='/AddReview'>
            <AddReview></AddReview>
          </PrivateRoute>
          <AdminRoute path='/ManageAllOrders'>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path='/ManageProduct'>
            <ManageProduct></ManageProduct>
          </AdminRoute>
          <AdminRoute path='/MakeAdmin'>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path='/AddProduct'>
            <AddProduct></AddProduct>
          </AdminRoute>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      </div>
  );
}

export default App;
