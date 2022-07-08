const cep = document.querySelector("#cep")

//aqui evento perde o foco e busco os valores do cep e prepara para envio

cep.addEventListener("blur",(e)=>
{
    //arrow function
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET', //solicitação
        mode: 'cors', //acesso externo
        Cache: 'default'
    }


//aqui envia o cep digitado para o via cep e retorna

    fetch(`https://viacep.com.br/ws/${search}/json`,options)
    //quando se acessa uma URL com fatch api retorna se uma promessa
    //se der certo .then()
    //se der errado .catch()

    .then(Response => {Response.json()
        .then(data => mostrarDados(data))    
    })
    .catch(e => console.log('Erro Inesperado'+e,message))
})

//alimentar todos os campos do formulário

const mostrarDados = (result)=>{ // aqui busco o retoro
    for(const campo in result){ //aqui armazenamos todo o retorno na variavel campo
        if(document.querySelector("#"+campo)){//verifico se o campo existe
            document.querySelector("#"+campo).value=result[campo]
        }
    }
}

