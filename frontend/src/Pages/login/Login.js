import React, { useState, useEffect } from 'react';
import connect from '../../services/connect';
import * as strap from 'reactstrap';

import './styles.css';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("nn");

    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changePassword(e){
        setPassword(e.target.value);
    }

    function clickLogin(){
        connect.post("/login", {
            email,
            password
        }).then((res) => {
            const data = res.data[0];
            setUser(data);
            if(data !== undefined){
                localStorage.setItem("session", data.email);
                localStorage.setItem("session_id", data.role_id);
                window.location.href = "http://localhost:3000/";
            }
        });
    }

    return (
        <div className="flex-row align-items-center animated fadeIn card-container">
            <strap.Container>
                <strap.Row className="justify-content-center">
                    <strap.Col md="8">
                    <strap.Card className="mx-4">
                        <strap.CardBody className="p-4 card-body-container">
                            <h3>Login</h3>
                            {user === undefined ? <div className="not-found">Usuário não encontrado.</div> : <span />}
                            <strap.Form>
                                <strap.FormGroup>
                                    <strap.Label for="Email">Email</strap.Label>
                                    <strap.Input type="email" name="email" id="Email" value={email} onChange={changeEmail} placeholder="@" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="Password">Password</strap.Label>
                                    <strap.Input type="password" name="password" id="Password" value={password} onChange={changePassword} placeholder="password" />
                                </strap.FormGroup>
                                <div className="login-buttons">
                                    <strap.Button color="primary" onClick={() => clickLogin()}>Login</strap.Button>
                                    <a href="/dashboard">Cadastre-se</a>
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

export default Login;