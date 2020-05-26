import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import FotoProduk from './Foto';
import ProdukInfo from './ProdukInfo';

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







export default App;
