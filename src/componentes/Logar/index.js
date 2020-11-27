import React, {useState} from 'react';
import { Redirect } from 'react-router';
import api from '../../server/api'
import { Link } from 'react-router-dom';

function Logar() {

    const [usuario, setUsuario] = useState("");
    const [menssagem, setMenssagem] = useState({menssege:""});
    const [rotear, setRotear] = useState(false);
    const [estados, setEstados] = useState("digite o ID...")
    const comparar = useState({"menssege": "usuario não cadastrado"})
    


    const Logando = async(evento) => {
        evento.preventDefault();
        if(usuario!==""){
        const response = await api.get(`users/${usuario}`);
        setMenssagem(response.data);
        console.log(response.data);
            if(menssagem !== comparar){
                setRotear(!rotear)
            }
        } else {
            setEstados("usuario não pode ser nulo...")
        }
    }

    const mudarUsuario = (evento) => {
        setUsuario(evento.target.value);
    }

    return(
        <div>
            <h1>Logar</h1>
            <form onSubmit={Logando}>
                <input 
                    type="text"
                    value={usuario}
                    placeholder={estados}
                    onChange={mudarUsuario}
                /><br />
                <button
                type="sub"
                >login</button>
            </form>
            {rotear?<Redirect to="/Buscar"/> :menssagem.menssege}
            <Link to="/Cadastrar">Cadastre-se</Link>
        </div>
    )

}
export default Logar;