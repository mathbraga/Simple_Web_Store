import React, { useState, useEffect } from 'react';
import connect from '../../services/connect';
import * as strap from 'reactstrap';

import './styles.css';

function Addproduto(){

    return (
        <div className="flex-row align-items-center animated fadeIn card-container">
            <strap.Container>
                <strap.Row className="justify-content-center">
                    <strap.Col md="8">
                    <strap.Card className="mx-4">
                        <strap.CardBody className="p-4 card-body-container">
                            <strap.Form>
                                <strap.FormGroup>
                                    <strap.Label for="Email">Email</strap.Label>
                                    <strap.Input type="email" name="email" id="Email" value={"email"} onChange={"changeEmail"} placeholder="@" />
                                </strap.FormGroup>
                                <strap.FormGroup>
                                    <strap.Label for="Password">Password</strap.Label>
                                    <strap.Input type="password" name="password" id="Password" value={"password"} onChange={"changePassword"} placeholder="password" />
                                </strap.FormGroup>
                                <strap.Button color="primary">Adicionar</strap.Button>
                            </strap.Form>
                        </strap.CardBody>
                    </strap.Card>
                    </strap.Col>
                </strap.Row>
            </strap.Container>
        </div>
    )
}

export default Addproduto;