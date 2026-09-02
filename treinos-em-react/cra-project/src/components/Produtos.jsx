import { useEffect, useState } from "react";



function Produtos(){

    const [quantidade, setquantiade] = useState(0)


    useEffect(()=> {

        document.title = `voce clicou ${quantidade}`;

    }, [quantidade]
)



     return(
        <div>

                <p>Tema alterado</p>

            <p>Quantidade {quantidade}</p>
            <button onClick={ () => setquantiade( quantidade + 1)}>adicionar</button>
        </div>  
    );
}

export default Produtos;