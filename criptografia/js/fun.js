function funA(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var mandar = document.getElementById("acao");
        mandar.disabled = true;

    if(pass1.value != pass2.value){
        alert("As senhas são diferentes!");
        mandar.disabled = true;
    }
    else{
        alert("Ok!");
        mandar.disabled = false;
    }
}


document.getElementById("acao").disabled = false;
document.getElementById("pass1").addEventListener;
document.getElementById("pass2").addEventListener;
("pass1", "pass2", function funA(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    if(pass1.value != pass2.value){
        document.getElementById("acao").disabled = true;
    }
    else{
        document.getElementById("acao").disabled = false;
    }
});



document.getElementById("acao").disabled = true;
    document.getElementById("pass1").addEventListener;
    document.getElementById("pass2").addEventListener;
    ("pass1", "pass2", function funA(){
        var pass1 = document.getElementById("pass1").value;
        var pass2 = document.getElementById("pass2").value;
        if(pass1.value != pass2.value){
            alert("As senhas são diferentes!");
            mandar.disabled = true;
        }
        else{
            alert("Ok!");
            mandar.disabled = false;
        }
    });


/*function funA(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var mandar = document.getElementById("acao");
        mandar.disabled = true;
        if(document.getElementById("acao").value === ""){
            mandar.disabled = true;
        }
        else if(pass1.value != pass2.value){
            mandar.disabled = true;
        }
        else{
            alert("OK");
        }
}
*/

/*function funB(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var sub = document.getElementById("acao").onclick;
    var tamanho = 8;
    if(pass1.value.length == tamanho && pass2.value.length == tamanho){
    if(pass1.value != pass2.value){
        alert("As senhas não são iguais!");
        function funA(){
            var sub = false;
    }
}
    else{
        document.getElementById("acao");
    }
}
function funA(){
    var sub = document.getElementById("acao").onclick;
    this.disabled = true;
}
}*/

/*function funA(){
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var tamanho = 3;

    if(pass1.value.length == tamanho && pass2.value.length == tamanho){
        if(pass1.value != pass2.value){
            alert("As senhas são diferentes!");
        }
        else{
            alert("Ok!");
        }
    }
}*/