import React, { useState, useEffect } from 'react';
import * as strap from 'reactstrap';
import connect from '../../services/connect';

import orderIcon from "../../assets/icons/order-icon.png";

import "./styles.css";

const statusCode = {
    1: "Em análise",
    2: "À caminho",
    3: "Entregue"
}

const statusColor = {
    1: "warning",
    2: "primary",
    3: "success"
}

function AllOrders(){
    const [data, setData] = useState(undefined);

    useEffect(() => {
        connect.get("/allorders").then(res => {
            const serverRes = res.data;
            console.log(serverRes);
            setData(serverRes);
        })
    }, []);

    function updateStatus(barcode){
        const status = window.prompt("Escolha novo status.");
        connect.post("/updatestatus", {
            status,
            barcode
        }).then(() => {
            window.location.reload();
        })
    }

    return (
        <div>
            <div className="products-container">
                <div className="products-title"><img src={orderIcon} alt="Order icon" />Todos os Pedidos</div>
            {
                data && data.map((item, index) => {
                    return(
                        <div className="product-item" key={index}>
                            <div className="main-info">
                                <div className="product-name">Nº {item.id}</div>
                            </div>
                            <div className="product-code">{item.barcode}</div>
                            <div className="buy-info">
                                <strap.Badge color={statusColor[item.status]} className="product-button">{statusCode[item.status]}</strap.Badge>
                            </div>
                            <strap.Button color="primary" onClick={() => updateStatus(item.barcode)}>Editar</strap.Button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default AllOrders;