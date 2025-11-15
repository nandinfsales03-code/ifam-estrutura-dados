let n = parseFloat (prompt("números inteiros:"))
const inteiros = []

for (let i=0; i<n; i++){
  inteiros[i] = parseFloat (prompt(`Números: ${i+1}`))
    document.writeln("vetor" + inteiros)
}