import React, { useState } from 'react';

export const ContextGlobal  = React.createContext(null);

export function ContextGlobalProvider(parametros) {
   const {
      children
   } = parametros
    const [ valor, setValor ] = useState(0)
    const [ carregando, setCarregando ] = useState(true)

    return(
       <ContextGlobal.Provider
          value = {{
            valor, setValor,
            carregando, setCarregando
          }}
       >
          {children}
       </ContextGlobal.Provider>
    )
 } 