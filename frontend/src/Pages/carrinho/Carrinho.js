import React, { useState, useEffect } from 'react';
import * as strap from 'reactstrap';
// import connect from '../../services/connect';

import cartIcon from "../../assets/icons/icon-car.png";

import "./styles.css";

function Carrinho(){
    // const [total, setTotal] = useState(0);
    let totalPrice = 0;

    // useEffect(() => {
    //     connect.get("/gpu").then(res => {
    //         const serverRes = res.data;
    //         console.log(serverRes);
    //         setData(serverRes);
    //     })
    // }, []);
    function removeItem(n){
        let data = JSON.parse('['+localStorage.getItem("carrinho").slice(0, -1)+']');
        data.splice(n, 1);
        const newData = (JSON.stringify(data)).substring(1).slice(0, -1);
        const finalData = newData.length === 0 ? newData : newData+',';
        localStorage.setItem("carrinho", finalData);
        window.location.reload();
    }

    return (
        <div>
            <div className="products-container">
                <div className="products-title"><img src={cartIcon} alt="cart icon" /> Carrinho</div>
                {
                    localStorage.getItem("carrinho") && JSON.parse('['+localStorage.getItem("carrinho").slice(0, -1)+']').map((item, index) => {
                        totalPrice = totalPrice + parseInt(item.price);
                        return(
                            <div className="product-item" key={index}>
                                <div className="main-info">
                                    <img alt={item.name} src={item.avatar} width="90" height="90" />
                                    <div className="product-name">{item.name}</div>
                                </div>
                                <div className="buy-info">
                                    <div className="product-price">R$ {item.price}</div>
                                    <strap.Button color="primary" className="product-button" onClick={() => removeItem(index)}>Remover</strap.Button>
                                </div>
                            </div>
                        )
                    })
                }
                {localStorage.getItem("carrinho").length === 0 ? <span /> : <><h4>Total: <span>R$ {totalPrice},00</span></h4><strap.Button color="info">Confirmar Pedido</strap.Button></>}
            </div>
        </div>
    )
}

// JSON.parse('['+localStorage.getItem("carrinho").slice(0, -1)+']')

export default Carrinho;