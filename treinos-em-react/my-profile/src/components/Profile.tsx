import {Skills} from './Skills'

export function Profile(){

     const nome: string = "Gabriel Souza";

    return( 
        <div>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQEtYK80ZBt1Vw/profile-displayphoto-scale_400_400/B4DZ89z8csIEAg-/0/1783448460146?e=1788998400&v=beta&t=7eMnoxoFIFcBjuOZK_-aanLbMgSTemN8ECbysKZYXPg" alt="" />
            <h3>{nome} Santos </h3>
            <h4>Estudante de Ciência da Computação | Dev Front-End</h4>
            <Skills/>
        </div>
    )
}
