// controller.js - Membro 4
// Liga o Model ao View: recebe os eventos e chama as funcoes certas

var Controller = {

  adicionarProduto: function () {
    var nome = document.getElementById("input-nome").value.trim();
    var preco = parseFloat(document.getElementById("input-preco").value);

    if (nome === "") {
      alert("Por favor, escreve o nome do produto.");
      return;
    }

    if (isNaN(preco) || preco <= 0) {
      alert("Por favor, insere um preco valido.");
      return;
    }

    adicionarProduto(nome, preco);

    // Limpar os campos
    document.getElementById("input-nome").value = "";
    document.getElementById("input-preco").value = "";

    mostrarProdutos();
    mostrarCarrinho();
  },

  adicionarAoCarrinho: function (id) {
    adicionarAoCarrinho(id);  // chama a funcao do model.js
    mostrarCarrinho();
  },

  encerrarCompra: function () {
    if (getTotalQuantidade() === 0) {
      alert("O carrinho esta vazio.");
      return;
    }

    limparCarrinho();
    mostrarCarrinho();
    alert("Compra encerrada! O carrinho foi reiniciado.");
  }

};

// Ligar os botoes aos eventos
document.getElementById("btn-adicionar").addEventListener("click", function () {
  Controller.adicionarProduto();
});

document.getElementById("btn-encerrar").addEventListener("click", function () {
  Controller.encerrarCompra();
});