import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import connect from '../../services/connect';
import * as strap from 'reactstrap';
import Dashboard from "../../components/Dashboard/Dashboard";
import CPU from "../cpu/CPU";
import GPU from "../gpu/GPU";
import Login from "../login/Login";
import Addproduto from "../addproduto/Addproduto";
import Removeproduto from "../removeproduto/Removeproduto";

import wIcon from '../../assets/icons/pc-icon.png';
import userIcon from '../../assets/icons/user.png';

import './styles.css';

function FrontPage(){

    return (
        <div>
            <div className="header-bar">
                <div className="header-bar-item">
                    <div><img src={wIcon} /></div>
                    <div className="header-title">WebStore</div>
                </div>
                {!(localStorage.getItem("session")) && <a className="header-login" href="/login"><img src={userIcon} /> Login</a>}
                {localStorage.getItem("session") && 
                    <div className="header-logout">
                        <div className="header-email text-muted">{localStorage.getItem("session") + ","}</div>
                        <a 
                            className="header-login" 
                            href="/" 
                            onClick={() => {
                                localStorage.removeItem("session");
                                localStorage.removeItem("session_id");
                            }}>
                            Logout
                        </a>
                    </div>
                }
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
                            <strap.NavLink href="/gpu" className="side-bar-link">GPU</strap.NavLink>
                        </strap.NavItem>
                        <strap.NavItem className="side-bar-item">
                            <strap.NavLink href="#" className="side-bar-link">Placas-mãe</strap.NavLink>
                        </strap.NavItem>
                        {localStorage.getItem("session_id") === "1" ? 
                            <>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/addproduto" className="side-bar-link">+ Produto</strap.NavLink>
                            </strap.NavItem>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/removeproduto" className="side-bar-link">- Produto</strap.NavLink>
                            </strap.NavItem>
                            </> :
                            <span />
                        }
                    </strap.Nav>
                </strap.Col>
                <strap.Col sm="10">
                    <BrowserRouter>
                        <Route render={() => (
                            <Switch>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/cpu" component={CPU}/>
                                <Route path="/gpu" component={GPU}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/addproduto" component={Addproduto}/>
                                <Route path="/removeproduto" component={Removeproduto}/>
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