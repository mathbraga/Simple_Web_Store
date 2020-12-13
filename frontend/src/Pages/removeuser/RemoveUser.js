import React, { useState, useEffect } from 'react';
import connect from '../../services/connect';
import * as strap from 'reactstrap';

import './styles.css';

function RemoveUser(){
    const [email, setEmail] = useState("");

    function removeUser(){
        connect.post("/removeuser", {
            email
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
                                    <strap.Label for="email">Email</strap.Label>
                                    <strap.Input name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="email" />
                                </strap.FormGroup>
                                <strap.Button color="primary" onClick={() => removeUser()}>Remover</strap.Button>
                            </strap.Form>
                        </strap.CardBody>
                    </strap.Card>
                    </strap.Col>
                </strap.Row>
            </strap.Container>
        </div>
    )
}

export default RemoveUser;