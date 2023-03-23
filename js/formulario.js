let adicionaCliente = document.querySelector("#adicionarCliente")

adicionaCliente.addEventListener('click', function (evento){
    //impede a natureza padrão do elemento
    evento.preventDefault()

    let form = document.querySelector('#formAdd')
    
    let cliente = obtemClienteDoForm(form)
    
    let erros = validaCliente(cliente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaClienteNaTabela(cliente)
    form.reset()

    console.log(document.querySelector("#tabela-clientes"))
    
    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    
})

function obtemClienteDoForm(form){
    let cliente = {
        nome    : form.nome.value,
        numero  : form.numero.value,
        data    : form.data.value,
        hora    : form.hora.value
    }

    return cliente
}

function validaCliente(cliente) {

    let erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (cliente.numero.length == 0) {
        erros.push("O número de pessoas não pode ser em branco");
    }

    if (cliente.data.length == 0) {
        erros.push("A data não pode ser em branco");
    }

    if (cliente.hora.length == 0) {
        erros.push("As horas não pode ser em branco");
    }

    return erros;
}


function montarTr(cliente){
    //createElemete cria um novo elemento de html
    let clienteTr = document.createElement('tr')
    clienteTr.classList.add('cliente')

    //Fazendo filhos de elemntos html
    clienteTr.appendChild(montarTd(cliente.nome, "info-nome"))
    clienteTr.appendChild(montarTd(cliente.numero, "info-numero"))
    clienteTr.appendChild(montarTd(cliente.data, "info-data"))
    clienteTr.appendChild(montarTd(cliente.hora, "info-horario"))
    return clienteTr
}

function montarTd(dado, classe){
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function adicionaClienteNaTabela(cliente){
    let clienteTr = montarTr(cliente)
    let tabela = document.querySelector('#tabela-clientes')
    tabela.appendChild(clienteTr)
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


