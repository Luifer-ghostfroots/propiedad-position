function calcular(){
    let horas = document.getElementById("inputhoras").value
    let valor = document.getElementById("inputvalor").value

    let total =horas*valor
    document.getElementById("sueldo").textContent=total
}
