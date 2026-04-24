// model.js - Membro 3
// Guarda os dados da aplicacao: produtos e carrinho

var produtos = [];
var carrinho = [];

function adicionarProduto(nome, preco) {
  var produto = {
    id: Date.now(),
    nome: nome,
    preco: preco
  };
  produtos.push(produto);
}

function adicionarAoCarrinho(id) {
  var produto = null;

  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) {
      produto = produtos[i];
      break;
    }
  }

  if (produto === null) return;

  var itemExistente = null;

  for (var j = 0; j < carrinho.length; j++) {
    if (carrinho[j].id === id) {
      itemExistente = carrinho[j];
      break;
    }
  }

  if (itemExistente !== null) {
    itemExistente.quantidade = itemExistente.quantidade + 1;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1
    });
  }
}

function getTotalQuantidade() {
  var total = 0;
  for (var i = 0; i < carrinho.length; i++) {
    total = total + carrinho[i].quantidade;
  }
  return total;
}

function getTotalPreco() {
  var total = 0;
  for (var i = 0; i < carrinho.length; i++) {
    total = total + (carrinho[i].preco * carrinho[i].quantidade);
  }
  return total;
}

function limparCarrinho() {
  carrinho = [];
}
