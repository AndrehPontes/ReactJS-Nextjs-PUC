import React, { useContext } from "react";

export default function Number2(props) {

    const {
        valor,
        setValor
    } = props

    return (
        <>
            <div id={"div"}>
                <h1>
                    {valor}
                </h1>
                <button onClick={() => setValor(valor+1)}>
                    ADD 1
                </button>
            </div>
        </>
    )
}