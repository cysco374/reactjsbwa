import React from 'react';
import './App.css';
// import CheckDiscount from './App';
// import TambahCart from './App';
import CheckDiscount from './Discount';
import TambahCart from './Cart';
import PropTypes from 'prop-types';

function ProdukInfo(props) {
    const { category, name, isDiscount } = props;
    const benefits = ["Buah segar", "Kualitas terbaik", "Besar"];
    const listBenefits = benefits.map((itemBenefits) =>
        <li key={itemBenefits}>{itemBenefits}</li>)
    return (
        <div>
            <div className="Deskripsi">
                <p className="Category">{category}</p>
                <h1 className="Title">{name}</h1>
                <p className="Price">IDR 11.000</p>
                <CheckDiscount isDiscount={isDiscount} />
                <p className="Info">
                    Buah pepaya matang dan sehat, dengan harga terjangkau. Tersedia untuk area DIY dan sekitarnya.
          </p>
                <ul>
                    {listBenefits}
                </ul>
                <a onClick={(i) => TambahCart(name, i)} href="#">Add to Cart</a>
            </div>
        </div>
    );
}

export default ProdukInfo;