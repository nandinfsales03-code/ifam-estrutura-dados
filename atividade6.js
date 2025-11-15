let n = parseInt(prompt("quantos itens você comprou?"))
let total = 0
let texto = ""
for (let i=0; i<n; i++)
{
    let valor = parseFloat(prompt("valor do item")+(i+1))
texto += "item" + (i+1)+":R$"+valor+"\n"
total+=valor
}
alert(texto+"\n valor total:R$"+total)