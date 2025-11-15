let n = parseInt(prompt("quantos números deseja digitar?"))
let numeros = []
let pares = 0
let impares = 0
for (let i=0; i<n; i++){
    numeros[i] = parseInt(prompt("digite um numero"))
if (numeros[i]%2==0){pares++
} else {impares++}}
alert("quantidade de pares: "+pares+"\n Quantidade de ímpares: "+ impares)