import React, { useEffect, useState } from "react";
import api from "./../../server/api";
import { Link, Redirect } from "react-router-dom";
import index from "./../../styles/index.css";

import { Container, Menu } from "./styles";

function Buscar() {
  const [geralUsuarios, setGeralUsuarios] = useState([]);

  const [abrirModal, setAbrirModal] = useState(false);

  useEffect(() => {
    async function sinal() {
      const response = await api.get("/users");
      setGeralUsuarios(response.data);
      console.log(response.data);
    }
    // sinal();
  }, []);

  const abrirOuFecharModal = () => {
    setAbrirModal(!abrirModal);
  };

  return (
    <div>
      <center>
        <h1>Consulta de Usuarios</h1>

        <Link to="/Cadastrar">Cadastre-se</Link>

        <br />

        <button onClick={abrirOuFecharModal}> login </button>
      </center>

      {abrirModal === true ? (
        <Container>
          <Menu>
            <header>
              <h4> entrar / criar conta </h4>
              <button onClick={abrirOuFecharModal}> X </button>
            </header>
            <hr />
            <main>
              <label htmlFor="">cadastre-se usando seu CPF</label>
              <input placeholder="Enter CPF" />
              <button> continuar </button>
              <span>esqueceu a sua senha? clique aqui</span>
            </main>
          </Menu>
        </Container>
      ) : null}
    </div>
  );
}
export default Buscar;
