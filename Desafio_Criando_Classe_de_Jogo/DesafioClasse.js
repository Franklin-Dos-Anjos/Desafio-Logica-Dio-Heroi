/*Instruções para entrega

# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/
//----------------------------------------------------

// Aqui eu criei a classe que gera os moldes dos herois
class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  // Aqui eu criei o método atacar que exibe a mensagem conforme o tipo do heroi
  atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}
// Aqui eu criei os objetos que vão utilizar dos dados da classe heroi
let personagem1 = new heroi("Aragorn", 87, "guerreiro");
personagem1.tipo = "guerreiro";
personagem1.atacar();
let personagem2 = new heroi("Gandalf", 2019, "mago");
personagem2.tipo = "mago";
personagem2.atacar();
let personagem3 = new heroi("Kame", 35, "monge");
personagem3.tipo = "monge";
personagem3.atacar();
let personagem4 = new heroi("Naruto", 17, "ninja");
personagem4.tipo = "ninja";
personagem4.atacar();
