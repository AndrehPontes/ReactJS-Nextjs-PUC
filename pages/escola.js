/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useContext } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Banner from 'components/Inicio/Banner'
import Outros from 'components/Inicio/Outros'
import Footer from "components/Footers/Footer.js";

export default function Escola() {
  console.log('Rodei Escola')
  return (
    <>
        {/* <IndexNavbar fixed /> */}
        {/* <Banner/> */}
        <Outros/>
        <Footer />
    </>
  );
}
