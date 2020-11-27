import React,{useEffect, useState} from 'react';
import api from './../../server/api';
import { Link, Redirect } from 'react-router-dom'
import index from './../../styles/index.css';


function Buscar() {

    const [geralUsuarios, setGeralUsuarios] = useState([]);
    

    useEffect( () => {
        async function sinal(){
            const response = await api.get('/users');
            setGeralUsuarios(response.data);
            console.log(response.data)
        }
        sinal();
    },[]);

    
    return(
        <div><center>
                <h1>Consulta de Usuarios</h1>
                {geralUsuarios.map((item) => {
                    return(
                        <div>
                            <div class="table" 
                            key={item.id}>
                                <th colspan="4"> 
                                    <img class="a"
                                        src={item.imgUser}
                                        alt="" 
                                        width="60,3px" 
                                        height="15,3px"
                                    />
                                </th>
                                <th>
                                    <tr>ID: {item.id}</tr>
                                    <tr>E - MAIL : {item.email}</tr>
                                    <tr>Nome Completo : {item.username}</tr>
                                    <tr>Senha : {item.password}</tr>
                                    <tr><Link to={`/Deletar/${item.id}`}>Deletar</Link></tr>
                                    <tr><Link to={`/Atualizar/${item.id}`}>Atualizar</Link></tr>
                                </th>
                            </div>
                            
                            <br />
                            <hr />
                            <br />
                        </div>
                        );
                    })}
                <Link to="/Cadastrar">Cadastre-se</Link>
            </center>
        </div>
    );
}
export default Buscar;