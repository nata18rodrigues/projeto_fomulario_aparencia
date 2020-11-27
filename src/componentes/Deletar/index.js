import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from './../../server/api';

function Deletar(props){

    const [deletar, setDeletar] = useState([]);
    const del = props.match.params.del;

    useEffect(() => {
        async function deletando(){
            const response = await api.delete(`/users/${del}`);
            setDeletar(response.data)
            console.log("deletar",deletar);
        } 
        deletando();
    },[]);
    
    return(
        <div>
            {deletar.map((item) => {
                    return(
                        <div>
                            <p 
                            key={item.menssege}>
                                {item.menssege}<br />
                            </p> 
                            <br />
                            <hr />
                            <br />
                        </div>
                        );
                    })}
            <Link to="/Buscar" >Consultar</Link> 
        </div>  
        
    );
};

export default Deletar;