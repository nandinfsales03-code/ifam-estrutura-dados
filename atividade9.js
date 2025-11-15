let  = parseint(prompt("quantos numeros deseja digitar"))
let numeros = []
let soma = 0
for(let i=0; i<n; i++){
    numeros[i] = parseFloat(prompt("digite o numero"+(i+1)))
    if(i%2==1){
        soma+=1
    }
}
alert("soma das posições ímpares:"+soma)