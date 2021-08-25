/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useContext } from "react";

import IndexNavbar from "components/Navbars/IndexNavbarExemplo3.js";
import Banner from 'components/Inicio/BannerExemplo3'
import Outros from 'components/Inicio/Outros'
import Number3 from 'components/Inicio/Number3'
import Footer from "components/Footers/Footer.js";
import ContextPagina from 'components/contexts/ContextPagina'

export default function Index() {
  console.log('Rodei Index')

  const [ valor, setValor ] = useState(0)

  return (
    <>
      <ContextPagina.Provider value={{
        valor, setValor
      }}>
        <IndexNavbar fixed />
        <Banner/>
        <Number3/>
        <Outros/>
        <Footer />
      </ContextPagina.Provider>
    </>
  );
}
