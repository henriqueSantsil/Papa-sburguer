let tabela = document.querySelector('#tabela-clientes')

tabela.addEventListener('dblclick', function (evento){
    evento.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        evento.target.parentNode.remove()
    }, 1000)
   
})