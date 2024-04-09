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
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Informe uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
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
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let soma = 0;
  contador = 0;
  if (num <= 0) {
    error.innerText = `O número ${num} não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    while (num >= contador) {
      soma += contador;
      contador++;
      result.innerText = `A soma é ${num} e a média da soma é ${soma / num}`;
      error.innerHTML = "";
    }
  }
};

const exercicio11 = () => {
  let result = document.getElementById("resposta");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) result.innerHTML += `# ${i}`;
  }
};

const exercicio12 = () => {
  let result = document.getElementById("resultado");
  let num = document.getElementById("num").value;
  let soma = 0;
  let error = document.getElementById("erro");
  if (num <= 0) {
    error.innerText = `O número ${num} não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    result.innerHTML = "";
    error.innerHTML = "";
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num[i]);
    }
    result.innerHTML += `${soma} `;
    error.innerHTML = "";
  }
};

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let menor, maior;
  if (Number(num1) < Number(num2)) {
    menor = Number(num1);
    maior = Number(num2);
  } else {
    menor = Number(num2);
    maior = Number(num1);
  }

  if (menor <= 0 || maior <= 0) {
    error.innerText = `O número não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let numPrimo = menor; numPrimo <= maior; numPrimo++) {
      let primo = true;
      for (let i = 2; i < numPrimo; i++) {
        if (numPrimo % i == 0) primo = false; // % resto da divisão
      }
      primo && (result.innerText += `#${numPrimo} `);
    }
  }
};

const exercicio14 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let area = 0;

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O número não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    area = parseFloat(num1) * parseFloat(num2);
    result.innerHTML = `A área do retângulo é: ${area}`;
  }
};

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let vogais = "";
  let consoantes = "";

  if (palavra == "") {
    error.innerText = "Informe uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      let l = palavra.charAt(i).toLowerCase();
      if (l == "a" || l == "e" || l == "i" || l == "o" || l == "u") {
        vogais += ` ${l}`;
      } else {
        consoantes += ` ${l}`;
      }
    }

    result.innerText = `Vogais: ${vogais} - Consoantes ${consoantes}`;
  }
};

const exercicio16 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let areaCirculo = 0;
  if (num1 <= 0) {
    error.innerText = `O número apresentado não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    areaCirculo = Math.PI.toFixed(5) * (num1 * num1);
    result.innerHTML = `A área da circunferência é: ${areaCirculo}`;
  }
};

const exercicio17 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let areaTriangulo = 0;
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 <= 0) {
    error.innerText = `O número apresentado não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    areaTriangulo = (parseFloat(num1) * parseFloat(num2)) / 2;
    result.innerHTML = `A área do triângulo é: ${areaTriangulo}`;
  }
};

const exercicio18 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let areaTrapezio = 0;
  if (num1 <= 0) {
    error.innerText = `O número apresentado não é válido, insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    areaTrapezio = (parseFloat(num1) * parseFloat(num2) * parseFloat(num3)) / 2;
    result.innerHTML = `A área do trapézio é: ${areaTrapezio}`;
  }
};

const exercicio19 = () => {
  let data1 = document.getElementById("data").value;
  let dataAniversario = new Date(data1);
  let dataAtual = new Date();
  let result = document.getElementById("resultado");

  let idade = dataAtual.getFullYear() - dataAniversario.getFullYear();
  let idadeMes = dataAtual.getMonth() - dataAniversario.getMonth();
  if (idadeMes < 0 || dataAtual.getDate() < dataAniversario.getDate()) {
    idade--;
  }
  result.innerText = `Esse usuário possui ${idade} anos`;
};

const exercicio20 = () => {
  let texto = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";
  result.innerText = "";

  if (texto == "") {
    error.innerText = "Informe uma frase!";
  } else {
    let frase = texto.split(" ");
    let fraseInvertida = frase.reverse();
    let novoTexto = fraseInvertida.join(" ");
    result.innerText = `${novoTexto}`;
  }
};

const exercicio21 = () => {
  let texto = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let frase = texto.split(" ");
  error.innerText = "";
  result.innerText = "";

  if (texto == "") {
    error.innerText = "Informe uma frase!";
  } else {
    let novoTexto = frase.join("");
    result.innerText = `${novoTexto}`;
  }
};

var soma22 = 0;
const exercicio22 = () => {
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let num = document.getElementById("num").value;
  let contador = 0;
  if (num <= 0) {
    error.innerText = `O número ${num} não é um número válido, insira um número positivo!`;
    result.innerText = "";
  } else if (soma22 <= 100) {
    soma22 += parseInt(num);
    result.innerText = soma22;
    error.innerHTML = "";
    contador++;

    console.log(soma22);
  }
};

const exercicio23 = () => {
  let palavra = document.getElementById("palavra").value.toLowerCase();
  let frase = document.getElementById("frase").value.toLowerCase();
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";
  result.innerText = "";

  let palavrafrase = frase.split(" ");
  let contador = 0;

  if (frase == "" || palavra == "") {
    error.innerText = "Preencha os campos!";
  } else {
    for (let i = 0; i < palavrafrase.length; i++) {
      if (palavrafrase[i] === palavra) {
        contador++;
        result.innerText = `A palavra '${palavra}' apareceu ${contador} vezes na frase!`;
        error.innerText = "";
      }
    }
  }
};

const exercicio24 = () => {
  let valor = document.getElementById("frase").value;
  let frase = valor.split(" ");
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  const letrasMaiusculas = [];
  error.innerText = "";
  result.innerText = "";

  if (valor == "") {
    error.innerText = "Informe uma frase!";
  } else {
    const mudarFrase = frase.map((palavra) => {
      //O map tem como objetivo retornar as alterações feitas pela função
      const primeiraletraMaiuscula = palavra[0].toUpperCase(); //Seleciona o primeiro caracter da palavra colocada
      letrasMaiusculas.push(primeiraletraMaiuscula); //A primeira letra se torna maiúscula no vetor primeiraletraMaiuscula
      return primeiraletraMaiuscula + palavra.slice(1); //Adicionando as letras maiúsculas na frase digitada pelo usúario
    });
    resultado.innerHTML = `${mudarFrase.join(" ")}`;
  }
};

const exercicio25 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerHTML = "";
  let numeros = [num1, num2, num3];

  if (num1 > 0 && (num2 > 0) & (num3 > 0)) {
    numeros = numeros.sort((a, b) => a - b);
    for (let i = 0; i < 3; i++) {
      result.innerHTML += `#${numeros[i]}`;
    }
  } else {
    error.innerHTML = "Informe números diferente de zero!";
  }
};
