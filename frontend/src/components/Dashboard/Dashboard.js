import React from 'react';
import * as strap from 'reactstrap';

import "./styles.css";

function Dashboard(){

    return (
            <div className="flex-row align-items-center animated fadeIn card-container">
                <strap.Container>
                    <strap.Row className="justify-content-center">
                        <strap.Col md="8">
                        <strap.Card className="mx-4">
                            <strap.CardBody className="p-4 card-body-container">
                                <h3>
                                    Welcome to our store.
                                </h3>
                                <br />
                                <div className="text-muted text-justify">
                                    <p>
                                    Choose one of the categories on the left to navigate through our products.
                                    </p>
                                </div>
                            </strap.CardBody>
                        </strap.Card>
                        </strap.Col>
                    </strap.Row>
                </strap.Container>
            </div>
    )
}

export default Dashboard;