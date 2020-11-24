import React, { useState, useEffect } from 'react';
import connect from './services/connect';

function FrontPage(){
    const [data, setData] = useState();

    useEffect(() => {
        connect.get('/').then(res => {
            const serverRes = res.data;
            setData(serverRes);
        })
    }, []);

    return (
        <div>{typeof data === 'undefined' ? "" : data.map((item) => {
                return(
                    <div key={item.id}>
                        {item.id + " "}
                        {item.category}
                    </div>
                )
            })}
        </div>
    )
}

export default FrontPage;