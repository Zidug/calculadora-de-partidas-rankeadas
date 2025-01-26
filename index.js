function saldoVitorias(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let rankAtual = saldoVitorias (102,30)
let nivel = "Ferro"

if(rankAtual<=10){
    nivel = "Ferro"
}

else if(rankAtual<=20){
    nivel = "Bronze"
}

else if(rankAtual<=50){
    nivel = "Prata"
}

else if(rankAtual<=80){
    nivel = "Ouro"
}

else if(rankAtual<=90){
    nivel = "Diamante"
}

else if(rankAtual<=100){
    nivel = "Lendário"
}

else{
    nivel = "Imortal"
}

console.log("\nO Herói tem saldo de " + rankAtual + " e está no nível de " + nivel + "\n")
