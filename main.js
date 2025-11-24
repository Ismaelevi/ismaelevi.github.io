const listaRobos = [
  "robotron-azul.png",
  "robotron-amarelo.png",
  "robotron-branco.png",
  "robotron-preto.png",
  "robotron-rosa.png",
  "robotron-vermelho.png"
];

const roboImg = document.querySelector(".robo")
const btnAnterior = document.querySelector("#robo-anterior");
const btnProximo = document.querySelector("#robo-proximo");

let roboAtual = 0;

function trocarRobo(direcao) {
  if (direcao === "proximo") {
    roboAtual++;

    if (roboAtual >= listaRobos.length) {
      roboAtual = 0;
    }
  
  } else if (direcao === "anterior") {
    roboAtual--;

    if (roboAtual < 0) {
      roboAtual = listaRobos.length - 1;
    }
  }

  roboImg.src = listaRobos[roboAtual];
}

btnProximo.addEventListener("click", () => {
  trocarRobo("proximo");
});

btnAnterior.addEventListener("click", () => {
  trocarRobo("anterior");
});                            

const controles = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 0,
        "poder": 0,
        "energia": 0,
        "velocidade": 0
    },
    "blindagem": {
        "forca": 0,
        "poder": 0,
        "energia": 0,
        "velocidade": 0
    },
    "nucleos": {
        "forca": 0,
        "poder": 0,
        "energia": 0,
        "velocidade": 0
    },
    "pernas": {
        "forca": 0,
        "poder": 0,
        "energia": 0,
        "velocidade": 0
    },
    "foguetes": {
        "forca": 0,
        "poder": 0,
        "energia": 0,
        "velocidade": 0
    }
}
