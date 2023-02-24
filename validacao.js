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
      alert("email e senha inválido");
      return false;
     }

}
     
    
    
    