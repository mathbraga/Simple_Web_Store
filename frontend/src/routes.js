import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FrontPage from './FrontPage';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={FrontPage} />
        </BrowserRouter>
    )
}

export default Routes;