import React from 'react';
import './App.css';
import discount from './ProdukInfo';

function CheckDiscount(props) {
    const { isDiscount, discount } = props;
    if (isDiscount == "yes") {
      return (
        <p>Diskon {discount}% off</p>
      );
    }
    else if (isDiscount == "coming") {
      return (
        <p>Segera Diskon</p>
      );
    }
    else {
      return (
        <p>Belum Ada Diskon</p>
      );
    }
  }

  export default CheckDiscount;