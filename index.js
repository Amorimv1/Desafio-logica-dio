let nome = "Xaulin matador de porco"
let XpDoHeroi = 15000

if (XpDoHeroi < 1000){
  nivel = "ferro";
} else if (XpDoHeroi >= 1001 && XpDoHeroi <= 2001){
  nivel = "bronze";
} else if (XpDoHeroi >= 2001 && XpDoHeroi <= 5000){
  nivel = "prata";
} else if (XpDoHeroi >= 5001 && XpDoHeroi <= 7000){
  nivel = "ouro";
} else if (XpDoHeroi >= 7001 && XpDoHeroi <= 8000){
  nivel = "platina";
} else if (XpDoHeroi >= 8001 && XpDoHeroi <= 9000){
  nivel = "ascendente";
} else if (XpDoHeroi >= 9001 && XpDoHeroi <= 10000){
  nivel = "imortal";
} else if (XpDoHeroi >= 10001){
   nivel = "Radiante";
}

console.log("Seu nome de heroi é " + nome + " e seu elo é " + nivel)