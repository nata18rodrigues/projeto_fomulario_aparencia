import React,{ useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../server/api';



function Cadastrar(){

    const [email, setEmail] = useState("");
    const [imagem, setImagem] = useState(null);
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha ] = useState("");
    const [visao, setVisao] = useState(false);
    const [menssege, setMenssege] = useState("");
    const [modulo, setModulo] = useState(false);
    const [img , setIMG] = useState(new FormData());
    
    const criar = async (evento) => {
        evento.preventDefault();
        img.append('file',imagem);
        img.append('email',email);
        img.append('username',usuario);
        img.append('password',senha);
        const response = await api.post('/users', img);
        if(response.data){
            setMenssege("usuario cadastrado com sucesso");
            const timer = setTimeout(() => {
                setModulo(true);
              }, 1000);
              return () => clearTimeout(timer);
        }
        
    };
        
    const mudarEmail = (evento) =>  {
        setEmail(evento.target.value);
    };

    const mudarUsuario = (evento) =>  {
        setUsuario(evento.target.value);
    };

    const mudarImagem = (evento) =>  {
        setImagem(evento.target.files[0]);
        console.log("my image",evento.target.files[0]);
    };

    const mudarSenha = (evento) =>  {
        setSenha(evento.target.value);
    }
     const ocultar = () => {
         setVisao(!visao);
     }

    return(
        <center><div>
            <h1>Cadastrar</h1>
            <form onSubmit={criar}>
            <input
                type="email"
                value={email}
                placeholder="digite seu e-mail..."
                onChange={mudarEmail}
            /><br />
            <input
                type="text"
                value={usuario}
                placeholder="digite seu nome de usuario..."
                onChange={mudarUsuario}
            /><br />
            <input 
            type="file"
            placeholder="imagem de usuario..."
            onChange={mudarImagem}
            /><br />
            <input
                type={visao?"text":"password"}
                value={senha}
                placeholder="digite sua senha..."
                onChange={mudarSenha}
            />
            <button type="submit">Cadastrar</button>
            </form>
            <button 
            type="submit" 
            onClick={ocultar}
            >{visao?"ocultar senha":"mostrar senha"}
            </button><br />
            {modulo?<Redirect to="/Buscar">Efetuar login</Redirect>:""}
            {menssege}
        </div></center>
    );
};
export default Cadastrar;

// {
//     "file":imagem,
//     "username":usuario,
//     "email":email,
//     "img":imagem,
//     "password":senha
// }