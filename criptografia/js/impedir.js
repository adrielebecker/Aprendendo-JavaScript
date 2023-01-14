function funA(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var mandar = document.getElementById("acao");
        mandar.disabled = true;
    var tamanho = 4
    if(pass1.value.length == tamanho && pass2.value.length == tamanho){
        if(pass1.value != pass2.value){
            alert("As senhas são diferentes!");
            mandar.disabled = true;
        }
        else{
            mandar.disabled = false;
        }
    }
}
