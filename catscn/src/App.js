import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "./pages/Components/Cart";
import Home from "./pages/Homecats";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
// import Header from './pages/Components/Sidebar';

function clicker() {
    console.log("hello");
    
    };
    
    clicker();

const App = () => {

    <div></div>

    return (
        
        <div>
            <BrowserRouter>
<Navbar />


            <nav>
                    <NavLink to="/"><button className="buttontwo" onClick="clicker()">Home</button></NavLink>
                    <NavLink to="/shop"><button className="buttontwo" onClick="clicker()">Shop</button></NavLink>
                    <NavLink to="/checkout"><button className="buttontwo" onClick="clicker()">Basket</button></NavLink>

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
padding: 10px;
`
