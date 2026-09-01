import { useState } from "react";



function Produtos(){

    const [quantidade, setquantiade] = useState(0);

    return(
        <div>
            <p>Quantidade {quantidade}</p>
            <button onClick={() => setquantiade( quantidade + 1)}>adicionar</button>
        </div>
    );
}

export default Produtos;