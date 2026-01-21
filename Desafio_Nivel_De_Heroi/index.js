/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis --- feito //
- Operadores --- feito //
- Laços de repetição --- feito
- Estruturas de decisões --- feito //

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:


Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

/*let nome = "Frankão";
let xp = 0;
let nivel = "";

for (let xp = 0; xp <= 9000; xp += 1) {
  if (xp >= 0 && xp <= 1000) {
    nivel = "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
  } else if (xp >= 10001) {
    nivel = "Radiante";
  } else {
    nivel = "XP inválido";
  }
}
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
*/
let nome = "Frankão";
let xp = 0;
let nivel = "";

let ArrayElo = [
  { nomeelo: "ferro", max: 1000 },
  { nomeelo: "bronze", max: 2000 },
  { nomeelo: "prata", max: 5000 },
  { nomeelo: "ouro", max: 7000 },
  { nomeelo: "platina", max: 8000 },
  { nomeelo: "ascendente", max: 9000 },
  { nomeelo: "imortal", max: 10000 },
  { nomeelo: "radiante", max: Infinity },
];

for (let xp = 0; xp <= 12000; xp += 2500) {
  for (let elo = 0; elo < ArrayElo.length; elo++) {
    if (xp <= ArrayElo[elo].max) {
      nivel = ArrayElo[elo].nomeelo;
      break;
    }
  }
  console.log(`XP ${xp} é = ${nivel}`);
}
/*for (let elo = 0; elo < ArrayElo.length; elo++) {
  if (xp <= ArrayElo[elo].max) {
    nivel = ArrayElo[elo].nomeelo;
    break;
  }
}
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
*/
