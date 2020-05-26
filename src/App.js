import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function ReviewItems() {
  // Review data JSON
  const users = [
    {
      "id": 1,
      // "fotoReview": "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "fotoReview": "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "name": "Erlangga",
      "review": "Harganya murah, segar dan kualitasnya bagus"
    },
    {
      "id": 2,
      "name": "Wiratama",
      "fotoReview": "https://images.pexels.com/photos/2518748/pexels-photo-2518748.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",      
      "review": "Harganya terjangkau dan buah nya segar"
    },
    {
      "id": 3,
      "name": "Wijaya",
      "fotoReview": "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "review": "Harganya mantabs. Buah nya enak"
    }
  ];
const listReview = users.map((itemReview) => 
  <div className="Item">
  <img src={itemReview.fotoReview} />
    <div className="User">
      <h3>{itemReview.name}</h3>
      <p>{itemReview.review}</p>
    </div>
  </div>
  );
  return (
    <div className="Review-Box">
        <h2>Reviews</h2>        
        {listReview}
      </div>
  )
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="pepaya.jpg" />
  </div>
  )  
}

function CheckDiscount(props) {
  const {isDiscount} = props;
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

function ProdukInfo(props) {
  const {category, name, isDiscount} = props;
  const benefits = ["Buah segar", "Kualitas terbaik", "Besar"];
  const listBenefits = benefits.map((itemBenefits) => <li>{itemBenefits}</li>)
  return (
    <div>  
      <div className="Deskripsi">
        <p className="Category">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 11.000</p>
        <CheckDiscount isDiscount={isDiscount}/>
        <p className="Info">
          Buah pepaya matang dan sehat, dengan harga terjangkau. Tersedia untuk area DIY dan sekitarnya.
        </p>
        <ul>
        {listBenefits}
        </ul>
        <a onClick={(i) =>TambahCart(name, i)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(i) {
  return console.log(
    "membeli produk " + i
  );
}

export default App;
