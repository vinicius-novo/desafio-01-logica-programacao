// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

//Declaração das variáveis
let nome = "Vinicius"
let xp = 52000
let nivel = ""
let prox_nivel = ""

//Estruturas de decisão
if (xp <= 1000) {
  nivel = "Ferro"
  prox_nivel = 1001 - xp
} else if (xp <= 2000) {
  nivel = "Bronze"
  prox_nivel = 2001 - xp
} else if (xp <= 5000) {
  nivel = "Prata"
  prox_nivel = 5001 - xp
} else if (xp <= 7000) {
  nivel = "Ouro"
  prox_nivel = 7001 - xp
} else if (xp <= 8000) {
  nivel = "Platina"
  prox_nivel = 8001 - xp
} else if (xp <= 9000) {
  nivel = "Ascendente"
  prox_nivel = 9001 - xp
} else if (xp <= 10000) {
  nivel = "Imortal"
  prox_nivel = 10001 - xp
} else {
  nivel = "Radiante"
  } 

// Saídas
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)

if(xp <= 10000){
  console.log(`Para alcançar o próximo nível o herói precisa de ${prox_nivel} pontos de xp`)
}else{
  console.log(`O herói está no nível máximo`)
}
