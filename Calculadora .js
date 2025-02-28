let tela = document.getElementById("tela");
let expressao = "";

function adicionar(valor) {
  expressao += valor;
  atualizarTela();
}

function atualizarTela() {
  tela.innerHTML = expressao || "0";
  tela.classList.add("numero-animado");
  setTimeout(() => tela.classList.remove("numero-animado"), 200);
}

function limpar() {
  expressao = "";
  atualizarTela();
}

function apagar() {
  expressao = expressao.slice(0, -1);
  atualizarTela();
}

function calcular() {
  try {
    expressao = eval(expressao).toString();
  } catch (error) {
    expressao = "Erro";
  }
  atualizarTela();
}
