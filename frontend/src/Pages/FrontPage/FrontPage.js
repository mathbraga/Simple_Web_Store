import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import * as strap from 'reactstrap';
import Dashboard from "../../components/Dashboard/Dashboard";
import CPU from "../cpu/CPU";
import GPU from "../gpu/GPU";
import Motherboard from "../motherboard/Motherboard";
import Login from "../login/Login";
import Cadastro from '../cadastro/Cadastro';
import Addproduto from "../addproduto/Addproduto";
import Removeproduto from "../removeproduto/Removeproduto";
import RemoveUser from "../removeuser/RemoveUser";
import Carrinho from '../carrinho/Carrinho';
import AllOrders from '../allorders/AllOrders';

import wIcon from '../../assets/icons/pc-icon.png';
import userIcon from '../../assets/icons/user.png';

import './styles.css';
import Order from '../oders/Orders';

function FrontPage(){

    return (
        <div>
            <div className="header-bar">
                <div className="header-bar-item">
                    <div><img src={wIcon} alt="app Icon" /></div>
                    <div className="header-title">WebStore</div>
                </div>
                {!(localStorage.getItem("session")) && <a className="header-login" href="/login"><img src={userIcon} alt="user Icon"/> Login</a>}
                {localStorage.getItem("session") && 
                    <div className="header-logout">
                        <div className="header-email text-muted">{localStorage.getItem("session") + ","}</div>
                        <a 
                            className="header-login" 
                            href="/" 
                            onClick={() => {
                                localStorage.removeItem("session");
                                localStorage.removeItem("session_id");
                                localStorage.removeItem("carrinho");
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
                            <strap.NavLink href="/motherboard" className="side-bar-link">Motherboards</strap.NavLink>
                        </strap.NavItem>
                        {localStorage.getItem("session") && 
                            <>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/cart" className="side-bar-link">Shopping cart</strap.NavLink>
                            </strap.NavItem>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/orders" className="side-bar-link">My Orders</strap.NavLink>
                            </strap.NavItem>
                            </>
                        }
                        {localStorage.getItem("session_id") === "1" ? 
                            <>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/allorders" className="side-bar-link">All Orders (admin)</strap.NavLink>
                            </strap.NavItem>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/addproduto" className="side-bar-link">Add Product (admin)</strap.NavLink>
                            </strap.NavItem>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/removeproduto" className="side-bar-link">Remove Product (admin)</strap.NavLink>
                            </strap.NavItem>
                            <strap.NavItem className="side-bar-item">
                                <strap.NavLink href="/removeuser" className="side-bar-link">Remove User (admin)</strap.NavLink>
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
                                <Route path="/motherboard" component={Motherboard}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/cadastro" component={Cadastro}/>
                                <Route path="/cart" component={Carrinho}/>
                                <Route path="/orders" component={Order}/>
                                <Route path="/allorders" component={AllOrders}/>
                                <Route path="/removeuser" component={RemoveUser}/>
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