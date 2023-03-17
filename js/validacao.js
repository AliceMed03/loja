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
    var preco = document.getElementById("preco").value; 
    var categoria = document.getElementById("categoria").value; 
    var ativo = document.querySelector('input[name=ativo]:checked').value; 

    if (sessionStorage.getItem("vetor_produtos")) {
        produtos = JSON.parse(sessionStorage.getItem("vetor_produtos"));
    }

    var pessoa = {};
    pessoa = {
        Codigo: codigo,
        Nome: nome,
        Preco: preco,
        Categoria: categoria,
        Ativo: ativo,
    };
    
    var tamanhos = [];
    tamanhos = document.getElementsByName("tam");
    var tam = {};
    for (var i = 0; i < tamanhos.length; i++) {
        if (tamanhos[i].checked) {
            tam[i] = tamanhos[i].value;         
        }
    }
    pessoa["Tamanho"] = tam;

    produtos.push(pessoa);
    // Para armazenar na session storage, localizado em application, apertando F12.
    sessionStorage.setItem("vetor_produtos", JSON.stringify(produtos));
    console.log(produtos) 
    return true   
}

function listar() {

    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];

    var produtos = JSON.parse(sessionStorage.getItem("vetor_produtos"));
    for (var i = 0 ; i < produtos.length ; i++){

        var novaLinha = document.createElement("tr"); //Cria uma nova linha (tr)
        console.log(novaLinha)
        novaLinha.innerHTML = dados.innerHTML; // inserir as colunas do 'id-"colunas"'
        registros.appendChild(novaLinha); //inserir a tag <tr> criada

        for (var indice in novaLinha.childNodes){ //retornar os nós filhos da minha novaLinha  
            
            var celula = novaLinha.childNodes[indice]; //<td>
            if (celula.nodeName == "TD"){ //verificar se a tag é <td>
                switch(celula.dataset.column){ //verificar o nome da coluna para poder inserir o dado correto
                    case "Codigo":
                        celula.innerHTML = produtos[i]["Codigo"];
                        break;
                    case "Nome":
                        celula.innerHTML = produtos[i]["Nome"];
                        break;
                    case "Preco":
                        celula.innerHTML = produtos[i]["Preco"];
                        break;
                    case "Categoria":
                        celula.innerHTML = produtos[i]["Categoria"];
                        break; 
                    case "Ativo":
                         celula.innerHTML = produtos[i]["Ativo"];
                        break; 

                    case "Tamanhos_Disponiveis":                        
                        for (var x in produtos[i]["Tamanho"]) {
                        celula.innerHTML = celula.innerHTML + produtos[i]["Tamanho"][x];
                        celula.innerHTML = celula.innerHTML + ' / ';
                        console.log(x);
                        console.log(produtos[i]["Tamanho"][x]);  
                    }
                    break;
                } 
            }     
        }
    }

}
     
    
    
    