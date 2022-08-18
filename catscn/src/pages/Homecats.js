//rick
// import styled from 'styled-components'
import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
import '../pages/App.css';
import '../pages/Home.css';


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
    <div className="homepage">
    

      
    </div>
    
  );
}




export default Shop;