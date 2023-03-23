let clientes = document.querySelectorAll('#cliente')
let quantidadeClientes = document.querySelector('.qtdCliente')


let soma = 0 

for(let i = 0; i <= clientes.length; i++){
    let cliente = clientes[i]
    let qtdCliente = cliente.querySelector('.info-numero')
    let valor = Number(qtdCliente.textContent)

    soma = soma + valor
    quantidadeClientes.textContent = soma
}