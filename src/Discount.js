import React from 'react';
import './App.css';

function CheckDiscount(props) {
    const { isDiscount } = props;
    if (isDiscount == "yes") {
      return (
        <p>Diskon 50% off</p>
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