import React from 'react';
import './App.css';

function Reviews() {
    // Review data JSON
    const users = [{
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
        "name": "Aorta",
        "fotoReview": "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "review": "Harganya mantabs. Buah nya enak"
    }
    ];
    const listReview = users.map((itemReview) =>
        <div className="Item" >
            <img src={itemReview.fotoReview} />
            <div className="User" >
                <h3> {itemReview.name} </h3>
                <p > {itemReview.review} </p>
            </div>
        </div>
    );
    return (
        <div className="Review-Box" >
            <h2> Reviews </h2>
            {listReview}
        </div>
    )
}

export default Reviews;