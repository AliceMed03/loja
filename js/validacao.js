function validaEmail(){

    let email = document.getElementById("username").value; 
    let senha = document.getElementById("senha").value;    
    
    const emailok= "alice@gmail.com";
    const senhaok= "1234";
    
    if(      
        email == emailok  && senha == senhaok
    ) {
        return true;
    }
     else{
      alert("email ou senha inválidos");
      return false;
     }

}

function cadastrar(){
    var produtos = [];
    
    var codigo = document.getElementById("codigo").value;
    var nome = document.getElementById("nome").value; 
    var preco = document.getElementById("preco_de_venda").value; 
    var categoria = document.getElementById("categoria").value; 

    var ativo = document.getElementById("Ativo").value; 
    var nome = document.getElementById("nome").value; //parei aqui


    if (sessionStorage.getItem("vetor_contatos")) {
        contatos = JSON.parse(sessionStorage.getItem("vetor_contatos"));
    }

    var pessoa = {};
    pessoa = {
        Nome: nome,
        Telefone: telefone,
        Preço: preco_de_venda,
        Categoria: categoria
    };

    contatos.push(pessoa);
    // Para armazenar na session storage, localizado em application, apertando F12.
    sessionStorage.setItem("vetor_contatos", JSON.stringify(contatos)); 
    console.log(contatos);
    return true
}

function listar() {

    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];

    var contatos = JSON.parse(sessionStorage.getItem("vetor_contatos"));
    for (var i = 0 ; i < contatos.length ; i++){

        var novaLinha = document.createElement("tr"); //Cria uma nova linha (tr)
        console.log(novaLinha)
        novaLinha.innerHTML = dados.innerHTML; // inserir as colunas do 'id-"colunas"'
        registros.appendChild(novaLinha); //inserir a tag <tr> criada

        for (var indice in novaLinha.childNodes){ //retornar os nós filhos da minha novaLinha  
            
            var celula = novaLinha.childNodes[indice]; //<td>
            if (celula.nodeName == "TD"){ //verificar se a tag é <td>
                switch(celula.dataset.column){ //verificar o nome da coluna para poder inserir o dado correto
                    case "Nome":
                        celula.innerHTML = contatos[i]["Nome"];
                        break;
                    case "Telefone":
                        celula.innerHTML = contatos[i]["Telefone"];
                        break;
                    case "Categoria":
                        celula.innerHTML = contatos[i]["Categoria"];


                } 
            }     
        }
    }

}
     
    
    
    