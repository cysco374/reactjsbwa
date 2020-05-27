import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import FotoProduk from './Foto';
import ProdukInfo from './ProdukInfo';
import CheckDiscount from './Discount';
import PropTypes from 'prop-types';

function App() {

  // const userLogged = "react Cahyo";
  // const userLoggedJSX = <i><strong>Cahyo React JSX</strong></i>;
  // let a = 3;
  // let b = 5;

  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" category="buah" name="Pepaya Jumbo" />
      <ReviewItems />
    </div>
  );
}



CheckDiscount.propTypes = {
  discount: PropTypes.number
};



export default App;
