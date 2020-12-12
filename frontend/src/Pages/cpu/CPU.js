import React, { useState, useEffect } from 'react';
import * as strap from 'reactstrap';
import connect from '../../services/connect';

import "./styles.css";

function CPU(){
    const [data, setData] = useState(undefined);

    useEffect(() => {
        connect.get("/cpu").then(res => {
            const serverRes = res.data;
            setData(serverRes);
        })
    }, []);

    return (
        <div>
            <div className="products-container">{
                data && data.map((item) => {
                    return(
                        <div className="product-item" key={item.id}>
                            <div className="main-info">
                                <img alt={item.name} src={item.avatar} width="90" height="90" />
                                <div className="product-name">{item.name}</div>
                            </div>
                            <div className="buy-info">
                                <div className="product-price">R$ {item.price}</div>
                                <strap.Button color="primary" className="product-button">Comprar</strap.Button>
                            </div>
                        </div>
                    )
                })
        }
            </div>
        </div>
    )
}

export default CPU;