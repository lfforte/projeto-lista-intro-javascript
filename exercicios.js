// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite uma altura: ");
  const largura = prompt("Digite uma largura: ");
  console.log(altura * largura);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual: ");
  const anoNascimento = prompt("Digite o ano de seu nascimento: ");

  console.log(anoAtual - anoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome: ");
  const idade = prompt("Digite sua idade: ");
  const email = prompt("Digite seu e-mail: ");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresFavoritas = [];
  coresFavoritas.push(cor = prompt("Digite uma cor favorita: "));
  coresFavoritas.push(cor = prompt("Digite outra cor favorita: "));
  coresFavoritas.push(cor = prompt("Digite mais uma cor favorita: "));

  console.log(coresFavoritas);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return (custo / valorIngresso);
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroelento = array.shift();
  let ultimoelento = array.pop();
  array.unshift(ultimoelento);
  array.push(primeiroelento);

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoatual = prompt("Digite o ano atual: ");
  const anoNascimento = prompt("Digite o ano de nascimento: ");
  const anoaidentidade = prompt("Digite o ano de emissão da RG: ");
  let idadeAte20 = (((anoatual - anoNascimento) <= 20) && (anoatual - anoaidentidade >= 5));
  let idade20a50 = (((((anoatual - anoNascimento) > 20) && (anoatual - anoNascimento) <= 50)) && ((anoatual - anoaidentidade) >= 10));
  let idadeMaior50 = (((anoatual - anoNascimento) > 50) && (anoatual - anoaidentidade > 15));

  console.log(idadeAte20 || idade20a50 || idadeMaior50);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 400 === 0) || (ano % 4 === 0) && (ano % 100 != 0);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}