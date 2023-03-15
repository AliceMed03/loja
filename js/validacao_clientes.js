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
    var clientes = [];
    
    var codigo = document.getElementById("codigo").value;
    var nome = document.getElementById("nome").value; 
    var CPF = document.getElementById("CPF").value; 
    var nascimento = document.getElementById("nascimento").value; 
    var telefone = document.getElementById("telefone").value; 
    var email = document.getElementById("email").value; 



    if (sessionStorage.getItem("vetor_clientes")) {
        clientes = JSON.parse(sessionStorage.getItem("vetor_clientes"));
    }

    var pessoa = {};
    pessoa = {
        Codigo: codigo,
        Nome: nome,
        CPF: CPF,
        Nascimento: nascimento,
        Telefone: telefone,
        Email: email,
    };

    clientes.push(pessoa);
    // Para armazenar na session storage, localizado em application, apertando F12.
    sessionStorage.setItem("vetor_clientes", JSON.stringify(clientes));
    console.log(clientes) 
    return true
}

function listar() {

    var dados = document.getElementById("colunas");
    var registros = document.getElementsByTagName("tbody")[0];

    var clientes = JSON.parse(sessionStorage.getItem("vetor_clientes"));
    for (var i = 0 ; i < clientes.length ; i++){

        var novaLinha = document.createElement("tr"); //Cria uma nova linha (tr)
        console.log(novaLinha)
        novaLinha.innerHTML = dados.innerHTML; // inserir as colunas do 'id-"colunas"'
        registros.appendChild(novaLinha); //inserir a tag <tr> criada

        for (var indice in novaLinha.childNodes){ //retornar os nós filhos da minha novaLinha  
            
            var celula = novaLinha.childNodes[indice]; //<td>
            if (celula.nodeName == "TD"){ //verificar se a tag é <td>
                switch(celula.dataset.column){ //verificar o nome da coluna para poder inserir o dado correto
                    case "Codigo":
                        celula.innerHTML = clientes[i]["Codigo"];
                        break;
                    case "Nome":
                        celula.innerHTML = clientes[i]["Nome"];
                        break;
                    case "CPF":
                        celula.innerHTML = clientes[i]["CPF"];
                        break;
                    case "Nascimento":
                        celula.innerHTML = clientes[i]["Nascimento"];
                    case "Telefone":
                        celula.innerHTML = clientes[i]["Telefone"];
                    case "Email":
                        celula.innerHTML = clientes[i]["Email"];
                } 
            }     
        }
    }

}
     
    
    
    