const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};

function exercicio2() {
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  let numero = document.getElementById("num");
  let error = document.getElementById("erro");
  error.style.display = "none";

  if (numero.value <= 0) {
    error.style.display = "block";
    error.innerHTML = "Erro, favor inserir números positivos diferentes de 0.";
  } else {
    for (let i = 0; i <= num.value; i += 2) {
      result.innerHTML += `#${i}`;
    }
  }
}

const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `O número ${num} não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true;

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (result.innerText = `O número ${num} não é primo!`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  if (num <= 0) {
    error.innerText = `O número ${num} não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    result.innerHTML = "";
    for (let i = 0; i <= 10; i++) {
      num[i] * 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
      result.innerHTML += `${num} x ${i} = ${num * i} <br>`;
    }
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  if (num <= 0) {
    error.innerText = `O número ${num} não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    result.innerHTML = "";
    let contador = 0;
    while (num >= contador) {
      if (contador % 2 != 0) result.innerHTML += `#${contador} <br>`;
      contador++;
    }
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  if (num <= 0) {
    error.innerText = `O número ${num} não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    result.innerHTML = "";
    let contador = 0;
    let soma = 0;
    while (num >= contador) {
      if (contador % 2 == 0) {
        soma += contador;
      }
      contador++;
    }
    result.innerHTML = soma;
  }
};

const exercicio7 = () => {
  let contador = 10;
  let result = document.getElementById("resposta");
  result.innerHTML = "";
  while (contador > 0) {
    result.innerHTML += `#${contador} `;
    contador--;
  }
};
const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let palavraVetor = palavra.split("");
  const inverter = [];
  console.log(palavraVetor);
  for (let i = palavraVetor.length; i >= 0; i--) {
    inverter.push(palavraVetor[i])
  }
  let inverter = inverter.join("");
  if(palavra == retrevni){
    document.getElementById("resultado").innerText = "Esta palavra é um palíndromo!"
  }
  else{
    document.getElementById("erro").innerText = "Essa palavra não é um palíndromo!"
  }

};


const exercicio9 = () => {
  let result = document.getElementById("resposta");
  let soma = 0;
  result.innerHTML = "";
  for (let contador = 1; contador <= 100; contador++) {
    result.innerHTML += `#${contador} `;
    soma += contador;
  }
  result.innerHTML = soma;
};

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resposta");
  let media = (result.innerHTML = "");
  while (num);
};
