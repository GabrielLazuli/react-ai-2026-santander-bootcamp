import { useState } from 'react';
import './App.css';
import Produtos from './components/Produtos';

const produtos = [
  {
    id: 1,
    nome: "TV",
    descricao: "aparalho de 5 polegadas",
    disponivel: true
  },
  {
    id: 2,
    nome: "Tablet",
    descricao: "7 polegadas",
       disponivel: true
  },
  {
    id: 3,
    nome: "Celular",
    descricao: "um bom celular",
    disponivel: true
  }
]

function App() {

  const [tema, setTema] = useState('black');

  function alterarTema(){
      setTema( () => tema === "black" ? "white" : "black")
  
  }  

  return (
    <div className="App">
        
      <header className={`App-header ${tema}`} >

      <button onClick={alterarTema}>
         Alterar tema
      </button>

      <Produtos/>

      </header>
    </div>
  );
}

export default App;
