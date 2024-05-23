import './App.css';
import Logo from './IMAGELOGO.svg'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";
import Footer from './Component/Footer/Footer'
import HomePage from './Component/HomePage'
import ProductPage from './Component/ProductPage'
import Cart from './Component/Cart/Cart';
import Navbar from './Component/Navbar/Navbar';
import NotFound from './Component/404Page/Notfound';

function App() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (<>
    <div className='App'>
      <Router>
        <header className='app-header'>
          <nav className="nav-bar">
            <img src={Logo} className='App-logo' alt="Logo" />
            <Link to="/">
              <h2>KANSAI Research Laboratories</h2>
            </Link>
            <Link to="/cart">
              <div className="nav-bag">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                <span className="bag-quantity">
                  <span>{cartTotalQuantity}</span>
                </span>
              </div>
            </Link>
          </nav>
        </header>
        <Navbar />
        <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/cart" component={Cart} />
        <Route path="/Products">
          <ProductPage />
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404"></Redirect></Switch>
      </Router>
      <Footer />

    </div>
  </>
  );
}
export default App;