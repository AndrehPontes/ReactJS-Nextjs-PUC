import React, { useContext } from "react";

export default function Number1() {

    const [ valor, setValor ] = useState(0)


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