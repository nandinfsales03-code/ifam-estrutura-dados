let n = parseInt(prompt("quantos números deseja digitar?"))
let soma = 0
for (let i=0; i<n; i++){
    soma += parseFloat(prompt("digite um número"))
}
if(soma>100){
    alert("soma:" + soma)
}else{
    alert("a soma não é maior que 100.")
}