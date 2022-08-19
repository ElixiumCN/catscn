import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "./pages/Components/Cart";
import Home from "./pages/Homecats";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
// import Header from './pages/Components/Sidebar';

const App = () => {

    return (
        
        <div>
            <BrowserRouter>
<Navbar />


            <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <Link to="/checkout">Checkout</Link>
                </nav>
                

                <Routes>
                    
                    <Route path="/" element={ <Home /> } />
                    <Route path="/shop" element={ <Shop /> } />
                    <Route path="/checkout" element={  <Checkout /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;

// how to style the link component using styled components
const NavLink = styled(Link)`
    background-color: green;
    padding: 10px 20px;
    margin: 10px;
`