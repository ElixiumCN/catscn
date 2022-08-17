//rick
import styled from 'styled-components'
import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
import '../pages/Homecats.css';

// excessive function copied from other stuff just to get stuff rendered on the page

const Shop = () => {
  const [errorMsg] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      
    }
    fetchData()
  }, [])

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div className="App">

<MyAwesomeStuff background="#e76f51"><h1>This is the home page</h1></MyAwesomeStuff>
      
    </div>
    
  );
}


const MyAwesomeStuff = styled.nav`
background-image: url("unknown.png");
  background-color: ${(props) => props.background};
  font-size: ${(props) => props.fontsize};
  padding: 10px;
  color: white;
  height:30%;
  width:30%;
`

export default Shop;