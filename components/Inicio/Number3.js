import React, { useContext } from "react";
import ContextPagina from 'components/contexts/ContextPagina'
import Link from "next/link";

export default function Number3() {

    const {
        valor,
        setValor,
    } = useContext(ContextPagina);

    return (
        <>
            <div id={"div"}>
                <h1>
                    {valor}
                </h1>
                <button onClick={() => setValor(valor+1)}>
                    ADD 1
                </button>
                <Link href="/exemplo4" >
                    <a style={{marginTop: '1em', backgroundColor: "green", borderRadius: '10px', padding: '5px 10px'}}>
                        DIRECIONAR PARA PAGINA EXEMPLO 4
                    </a>       
                </Link>
            </div>
        </>
    )
}