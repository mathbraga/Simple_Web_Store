import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import connect from '../../services/connect';
import * as strap from 'reactstrap';
import Dashboard from "../../components/Dashboard/Dashboard";
import CPU from "../cpu/CPU";

import wIcon from '../../assets/icons/pc-icon.png';

import './styles.css';

function FrontPage(){
    // const [data, setData] = useState("null");
    // const [fetchString, setString] = useState('/Users');

    // useEffect(() => {
    //     connect.get(fetchString).then(res => {
    //         const serverRes = res.data;
    //         setData(serverRes);
    //     })
    // }, []);

    // function changeFetchString(dataType){
    //     setString(dataType);
    //     connect.get(fetchString).then(res => {
    //         const serverRes = res.data;
    //         setData(serverRes);
    //     })
    // }

    return (
        <div>
            <div className="header-bar">
                <div className="header-bar-item">
                    <div><img src={wIcon} /></div>
                    <div className="header-title">WebStore</div>
                </div>
            </div>
            <strap.Row>
                <strap.Col>
                    <strap.Nav vertical className="side-bar">
                        <strap.NavItem className="side-bar-item">
                            <strap.NavLink href="/dashboard" className="side-bar-link">Home</strap.NavLink>
                        </strap.NavItem>
                        <strap.NavItem className="side-bar-item">
                            <strap.NavLink href="/cpu" className="side-bar-link">CPU</strap.NavLink>
                        </strap.NavItem>
                        <strap.NavItem className="side-bar-item">
                            <strap.NavLink href="#" className="side-bar-link">GPU</strap.NavLink>
                        </strap.NavItem>
                        <strap.NavItem className="side-bar-item">
                            <strap.NavLink href="#" className="side-bar-link">Placas-mãe</strap.NavLink>
                        </strap.NavItem>
                    </strap.Nav>
                </strap.Col>
                <strap.Col sm="10">
                    <BrowserRouter>
                        <Route render={() => (
                            <Switch>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/cpu" component={CPU}/>
                                <Redirect from="/" to={{ pathname: "/dashboard" }}/>
                            </Switch>
                        )} />
                    </BrowserRouter>
                </strap.Col>
            </strap.Row>
            
        </div>
    )
}

export default FrontPage;