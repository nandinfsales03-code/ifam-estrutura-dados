let n = parseInt(prompt("quantas disciplinas?"))
let soma = 0
for(let i=0; i<n; i++){
    soma += parseFloat(prompt("digite a nota da disciplina"+(i+1)))}
        let media = soma /n
        if(media >= 6){
            alert ("aprovados! sua média é:" + media)
        }else{
            alert("reprovado! sua média é:" + media)
        }
    