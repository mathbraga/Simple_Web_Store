import React, { useState, useEffect } from 'react';
import connect from '../../services/connect';
import { Nav, NavItem, NavLink, Header } from 'reactstrap';
import wIcon from './icon/pc-icon.png';

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
            <Nav className="header-bar">
                <NavItem className="header-bar-item">
                    <div><img src={wIcon} alt="Girl in a jacket"/></div>
                    <div className="header-title">WebStore</div>
                </NavItem>
            </Nav>
            <Nav vertical className="side-bar">
                <NavItem className="side-bar-item">
                    <NavLink href="#" className="side-bar-link">Home</NavLink>
                </NavItem>
                <NavItem className="side-bar-item">
                    <NavLink href="#" className="side-bar-link">CPU</NavLink>
                </NavItem>
                <NavItem className="side-bar-item">
                    <NavLink href="#" className="side-bar-link">GPU</NavLink>
                </NavItem>
                <NavItem className="side-bar-item">
                    <NavLink href="#" className="side-bar-link">Placas-mãe</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default FrontPage;