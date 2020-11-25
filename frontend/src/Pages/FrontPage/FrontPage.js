import React, { useState, useEffect } from 'react';
import connect from '../../services/connect';

import './styles.css';

function FrontPage(){
    const [data, setData] = useState("null");
    const [fetchString, setString] = useState('/Users');

    // useEffect(() => {
    //     connect.get(fetchString).then(res => {
    //         const serverRes = res.data;
    //         setData(serverRes);
    //     })
    // }, []);

    function changeFetchString(dataType){
        setString(dataType);
        connect.get(fetchString).then(res => {
            const serverRes = res.data;
            setData(serverRes);
        })
    }

    return (
        <div className="page-container">
            <div>
                <div className="alert alert-primary">
                    {/* {typeof data === 'undefined' ? "" : data.map((item) => {
                        return(
                            <div key={item.id}>
                                {item.id + " "}
                                {item.category}
                            </div>
                        )
                    })} */}
                    {JSON.stringify(data)}
                </div>
            </div>
            <div>
                <div className="buttons-container">
                    <button type="button" class="btn btn-secondary" onClick={() => changeFetchString('/Roles')}>Roles</button>
                    <button type="button" class="btn btn-secondary" onClick={() => changeFetchString('/Users')}>Users</button>
                    <button type="button" class="btn btn-secondary" onClick={() => changeFetchString('/Categories')}>Categories</button>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;