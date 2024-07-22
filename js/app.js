document.addEventListener('DOMContentLoaded', () => {
    let produtoInput = document.getElementById('produto');
    let quantidadeInput = document.getElementById('quantidade');
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
  
    let total = 0;
  
    // Função para adicionar produtos ao carrinho
    function adicionar() {
      let produtoTexto = produtoInput.value;
      let quantidade = parseInt(quantidadeInput.value);
      
      if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
      }
  
      let [produto, precoTexto] = produtoTexto.split(' - R$');
      let preco = parseFloat(precoTexto);
  
      total += preco * quantidade;
  
      let novoProduto = document.createElement('section');
      novoProduto.classList.add('carrinho__produtos__produto');
      novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${(preco * quantidade).toFixed(2)}</span>`;
      listaProdutos.appendChild(novoProduto);
  
      valorTotal.textContent = `R$${total.toFixed(2)}`;
  
      limparFormulario();
    }
  
    // Função para limpar o carrinho
    function limpar() {
      total = 0;
      listaProdutos.innerHTML = '';
      valorTotal.textContent = 'R$0.00';
    }
  
    // Função para limpar o formulário
    function limparFormulario() {
      quantidadeInput.value = '';
      produtoInput.selectedIndex = 0;
    }
  
    // Adiciona eventos aos botões
    document.querySelector('.botao-adicionar').addEventListener('click', adicionar);
    document.querySelector('.botao-limpar').addEventListener('click', limpar);
  
    // Inicializa o carrinho com 0
    limpar();
  });