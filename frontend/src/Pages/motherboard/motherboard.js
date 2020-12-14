import React, { useState, useEffect } from 'react';
import * as strap from 'reactstrap';
import connect from '../../services/connect';

import mbIcon from "../../assets/icons/motherboard.png";

import "./styles.css";

function Motherboard(){
    const [data, setData] = useState(undefined);
    let n = 0;

    useEffect(() => {
        connect.get("/motherboard").then(res => {
            const serverRes = res.data;
            console.log(serverRes);
            setData(serverRes);
        })
    }, []);

    function addToCart(id, avatar, name, price){
        localStorage.setItem("carrinho", `${localStorage.getItem("carrinho")}{"id":"${id}","avatar":"${avatar}","name":"${name}","price":"${price}"},`);
    }

    return (
        <div>
            <div className="products-container">
                <div className="products-title"><img src={mbIcon} alt="Motherboard icon" /> Placas-mãe</div>
            {
                data && data.map((item) => {
                    return(
                        <div className="product-item" key={item.id}>
                            <div className="main-info">
                                <img alt={item.name} src={item.avatar} width="90" height="90" />
                                <div className="product-name">{item.name}</div>
                            </div>
                            <div className="buy-info">
                                <div className="product-price">R$ {item.price}</div>
                                <strap.Button color="primary" className="product-button" onClick={() => addToCart(item.id, item.avatar, item.name, item.price,)}>Carrinho</strap.Button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Motherboard;