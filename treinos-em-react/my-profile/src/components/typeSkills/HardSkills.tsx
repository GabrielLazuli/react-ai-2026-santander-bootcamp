
interface ImgOptions{
    color: string;
}

export function HardSkills(){

    const listaOptions: ImgOptions = { color: "red"};
    

    return(
        <ul style={{color:listaOptions.color}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>TS</li>
            <li>REACT</li>
        </ul>
    )
}