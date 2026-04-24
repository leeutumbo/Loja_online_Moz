
function mostrarProdutos() {
  const lista = document.getElementById("lista-produtos");
  lista.innerHTML = "";

  if (produtos.length === 0) {
    lista.innerHTML = "<li class='vazio'>Nenhum produto adicionado ainda.</li>";
    return;
  }

  for (const p of produtos) {
    const item = document.createElement("li");
    item.innerHTML =
      "<span>" + p.nome + "</span>" +
      "<span>" + p.preco.toFixed(2) + " MZN</span>" +
      "<button onclick='Controller.adicionarAoCarrinho(" + p.id + ")'>+ Carrinho</button>";
    lista.appendChild(item);
  }
}

function mostrarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";

  if (carrinho.length === 0) {
    lista.innerHTML = "<li class='vazio'>Carrinho vazio.</li>";
  } else {
    for (const item of carrinho) {
      const li = document.createElement("li");
      li.innerHTML =
        "<span>" + item.nome + "</span>" +
        "<span>x" + item.quantidade + "</span>" +
        "<span>" + (item.preco * item.quantidade).toFixed(2) + " MZN</span>";
      lista.appendChild(li);
    }
  }

  document.getElementById("total-quantidade").textContent = getTotalQuantidade();
  document.getElementById("total-preco").textContent = getTotalPreco().toFixed(2) + " MZN";
}
