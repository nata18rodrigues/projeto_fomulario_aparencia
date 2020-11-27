import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import api from './../../server/api';

function Atualizar(props)    {

    const [id, setID] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const valor = props.match.params.valor;

    useEffect(() => {
        async function atualizei() {
            const response = await api.get(`/users/${valor}`);
            console.log(response.data.id)
            setID(response.data.id);
            setNome(response.data.username);
            setSenha(response.data.password);
        }
        atualizei()
    },[])

    const mudar = async(evento) => {
        evento.preventDefault();
        const response = await api.put(`/users/${valor}`,{
            "senha":senha
        });
        setID(response.data.id);
            setNome(response.data.username);
            setSenha(response.data.password);
    }

    const mudarSenha = (evento) => {
        setSenha(evento.target.value);
    }


    return(
        <div>
            <form onSubmit={mudar}>
                <input 
                    type="text"
                    value={id}
                    disabled
                /><br /> 
                <input 
                    type="text"
                    value={nome}
                    disabled
                /><br />
                <input
                type="file"
                

                <input 
                    type="text"
                    value={senha}
                    placeholder="senha não pode ser vazia..."
                    onChange={mudarSenha}
                />
                <button 
                type="submit"
                >Atualizar</button>
            </form>
            <Link to="/Buscar">Retornar</Link>
        </div>
    );
}
export default Atualizar;