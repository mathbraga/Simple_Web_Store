import React, { useState } from 'react';
import connect from '../../services/connect';
import * as strap from 'reactstrap';

import './styles.css';

function Removeproduto(){
    const [id, setId] = useState("");

    function insertProduct(){
        connect.post("/removeproduct", {
            id
        }).then((res) => {
            console.log(res);
            window.location.href = "http://localhost:3000/";
        });
    }

    return (
        <div className="flex-row align-items-center animated fadeIn card-container">
            <strap.Container>
                <strap.Row className="justify-content-center">
                    <strap.Col md="8">
                    <strap.Card className="mx-4">
                        <strap.CardBody className="p-4 card-body-container">
                            <strap.Form>
                                <strap.FormGroup>
                                    <strap.Label for="p_Id">Id</strap.Label>
                                    <strap.Input name="id" id="p_Id" value={id} onChange={(e) => {setId(e.target.value)}} placeholder="Id" />
                                </strap.FormGroup>
                                <strap.Button color="primary" onClick={() => insertProduct()}>Remover</strap.Button>
                            </strap.Form>
                        </strap.CardBody>
                    </strap.Card>
                    </strap.Col>
                </strap.Row>
            </strap.Container>
        </div>
    )
}

export default Removeproduto;