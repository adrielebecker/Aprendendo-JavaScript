function js(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    if(pass1.value != pass2.value){
    alert("As senhas são diferentes!");
    } 
    else{
    alert("As senhas são iguais!");
    }
}