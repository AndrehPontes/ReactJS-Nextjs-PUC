/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useContext } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Banner from 'components/Inicio/Banner'
import Outros from 'components/Inicio/Outros'
import Number4 from 'components/Inicio/Number4'
import Footer from "components/Footers/Footer.js";
import { ContextGlobal } from 'components/contexts/ContextGlobal'

export default function Exemplo4() {
  console.log('Rodei Index')

  const {
    carregando, setCarregando
  } = useContext(ContextGlobal);

  useEffect(() => {
    window.setTimeout(function(){
      setCarregando(false)
    },2500)
  }, []);

  if(carregando === true){
    return (<h1 style={{textAlign:"center", fontSize: '48px'}}> Caregando... </h1>)
  }

  return (
    <>
        <IndexNavbar fixed />
        <Banner/>
        <Number4/>
        <Outros/>
        <Footer />
    </>
  );
}
