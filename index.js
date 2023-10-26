let nome="xXEmBuscaDoEstágioXx"
let rank= ""
let xp = 9500


if  (xp<= 1000){
    rank = "Ferro"
}
else if (xp <= 2000){
    rank= "Bronze"
}
else if (xp <=5000){
    rank= "Prata"
}
else if (xp <= 7000){
    rank= "Ouro"
}
else if (xp <= 8000){
    rank= "Platina"
}
else if (xp <= 9000){
    rank= "Ascendente"
}
else if (xp <= 10000){
    rank= "Imortal"
}
else if (xp >= 10001){
    rank= "Radiante"
}


console.log("O jogador " + nome +" é do ranque: " + rank)