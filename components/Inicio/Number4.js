import React, { useContext } from "react";
import {ContextGlobal} from 'components/contexts/ContextGlobal'
import Link from "next/link";

export default function Number4() {

    const {
        valor, setValor
      } = useContext(ContextGlobal);

    return (
        <>
            <div id={"div"}>
                <h1>
                    {valor}
                </h1>
                <button onClick={() => setValor(valor+1)}>
                    ADD 1
                </button>
                <Link href="/exemplo5" >
                    <a style={{marginTop: '1em', backgroundColor: "green", borderRadius: '10px', padding: '5px 10px'}}>
                        DIRECIONAR PARA PAGINA EXEMPLO 5
                    </a>        
                </Link>
            </div>
        </>
    )
}