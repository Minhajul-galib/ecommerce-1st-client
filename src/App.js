import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Shop from './Components/Pages/Shop/Shop';
import NotFound from './Components/Pages/NotFound/NotFound';
import AddProducts from './Components/Pages/Admin/AddProducts/AddProducts';
import ProductPurchase from './Components/Pages/ProductPurchase/ProductPurchase';
import Registration from './Components/Pages/LogInType/Registration/Registration';

function App() {
  return (
    <div className="App">
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
          <Route exact path='/ProductPurchase/:id'>
            <ProductPurchase></ProductPurchase>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
