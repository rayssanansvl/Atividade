const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};

let exercicio2 = () => {
    document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 0; i <= document.getElementById("num").value; i += 2) {
    document.getElementById("resposta").innerHTML += `#${i} `;
  }
};

let exercicio3 = () => {
    document.getElementById("resultado").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  if (num % num == 0) {
    document.getElementById(
      "resultado"
    ).innerHTML += `O número ${num} é um número primo!`;
  } else {
    document.getElementById(
      "resultado"
    ).innerHTML += `O número ${num} não é um número primo!`;
  }
};
