import React, { useState, useEffect } from 'react';
import connect from '../../services/connect';
import * as strap from 'reactstrap';

import './styles.css';

function Cadastro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

    function clickSign(e){
        e.preventDefault();
        connect.post("/signup", {
            email,
            password,
            name,
            address
        }).then((res) => {
            console.log(res);
            window.location.href = "http://localhost:3000/login";
        });
    }

    return (
        <div className="flex-row align-items-center animated fadeIn card-container">
            <strap.Container>
                <strap.Row className="justify-content-center">
                    <strap.Col md="8">
                    <strap.Card className="mx-4">
                        <strap.CardBody className="p-4 card-body-container">
                            <h3>Cadastrar</h3>
                            <strap.Form>
                                <strap.FormGroup>
                                    <strap.Label for="Email">Email</strap.Label>
                                    <strap.Input required type="email" name="email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="@" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="Password">Password</strap.Label>
                                    <strap.Input required type="password" name="password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="name">Nome completo</strap.Label>
                                    <strap.Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="address">Endereço</strap.Label>
                                    <strap.Input required id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="endereço" />
                                </strap.FormGroup>
                                <div className="login-buttons">
                                    <strap.Button color="primary" onClick={(e) => clickSign(e)}>Cadastrar</strap.Button>
                                </div>
                            </strap.Form>
                        </strap.CardBody>
                    </strap.Card>
                    </strap.Col>
                </strap.Row>
            </strap.Container>
        </div>
    )
}

export default Cadastro;