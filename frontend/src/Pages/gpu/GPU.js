import React, { useState, useEffect } from 'react';
import * as strap from 'reactstrap';
import connect from '../../services/connect';

import gpuIcon from "../../assets/icons/gpu.png";

import "./styles.css";

function GPU(){
    const [data, setData] = useState(undefined);

    useEffect(() => {
        connect.get("/gpu").then(res => {
            const serverRes = res.data;
            console.log(serverRes);
            setData(serverRes);
        })
    }, []);

    function addToCart(id){
        console.log(id);
    }

    return (
        <div>
            <div className="products-container">
                <div className="products-title"><img src={gpuIcon} alt="GPU icon" /> GPUs</div>
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
                                <strap.Button color="primary" className="product-button" onClick={() => addToCart(item.id)}>Carrinho</strap.Button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default GPU;