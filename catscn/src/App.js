import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import styled from 'styled-components';
import Checkout from "./pages/Checkout";

const App = () => {

    return (
        <div>
            <BrowserRouter>

            <nav>
                    <NavLink to="/">Home</NavLink>
                    <Link to="/checkout">Checkout</Link>
                </nav>

                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/contact" element={ <Checkout /> } />

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