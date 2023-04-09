import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props)
  return (
    <>
    <h1>Seja bem vindo!</h1>
    <Link to='/app'>
      clique para iniciar
    </Link>
    </>
  )
}

export default Home