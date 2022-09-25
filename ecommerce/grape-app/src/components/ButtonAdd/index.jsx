
import React, { useState, useEffect } from 'react'

function ButtonAdd() {

    const [quantidade, setQuantidade] = useState(
        (quantidade) => {
            return quantidade = 1;
        }
    )


    return (
        <>
            <div className="btn__options"> <button onClick={() => setQuantidade(quantidade - 1)}>Menos</button>  {quantidade} Garrafa  <button onClick={() => setQuantidade(quantidade + 1)}>Mais</button> </div>
        </>
    )
}

export default ButtonAdd