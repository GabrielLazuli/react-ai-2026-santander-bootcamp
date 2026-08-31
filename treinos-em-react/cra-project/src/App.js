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
  return (
    <div className="App">
      <header className="App-header">
    

      {
      produtos.map((produto) => {
          if(produto.disponivel){
            return (
            <div key={produto.id}>
                <Produtos name={produto.nome} descricao={produto.descricao}/>
            </div>
            )
          }
      }
    )
    }
      

      </header>
    </div>
  );
}

export default App;
