const produtos = {
    "CC": "Cartao de Credito",
    "CD": "Conta Digital",
    "EMP": "Emprestimo",
    "INV": "Investimento"
};

// Lê o código do produto digitado pelo usuário
const codigo = gets();
const ND = 0;
let nomeProduto = "Produto desconhecido";

  for(const[chave,valor] of Object.entries(produtos)){
    if(chave == codigo){
      nomeProduto = valor;
    }
}

print(nomeProduto);