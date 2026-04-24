
let produtos = [];
let carrinho = [];

function adicionarProduto(nome, preco) {
  const produto = {
    id: Date.now(),
    nome: nome,
    preco: preco
  };
  produtos.push(produto);
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);

  if (!produto) return;

  const itemExistente = carrinho.find(item => item.id === id);

  if (itemExistente) {
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
  let total = 0;
  for (const item of carrinho) {
    total = total + item.quantidade;
  }
  return total;
}

function getTotalPreco() {
  let total = 0;
  for (const item of carrinho) {
    total = total + (item.preco * item.quantidade);
  }
  return total;
}

function limparCarrinho() {
  carrinho = [];
}
