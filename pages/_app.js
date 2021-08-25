import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import { ContextGlobalProvider } from 'components/contexts/ContextGlobal'
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";


function MeuAppSw({ Component, pageProps }) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return Component
}


export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
  
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <ContextGlobalProvider>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Escola de Ferias</title>
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
        </Head>
        <Layout>
            <MeuAppSw Component={<Component {...pageProps} />}/>
        </Layout>
      </ContextGlobalProvider>
    );
  }
}
