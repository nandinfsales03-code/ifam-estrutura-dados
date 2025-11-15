let n = parseInt (prompt("quantos numeros deseja digitar?"))
let numeros = []
for(let i=0; i<n; i++){
    numeros[i] = parseInt (prompt("digite um número"))
}
let inverso = ""
for (let i=n-1; i>=0; i--){
    inverso += numeros [i] + " " 
}
alert("ordem inversa: " + inverso)