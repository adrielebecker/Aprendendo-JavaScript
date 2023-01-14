<!DOCTYPE html>
<?php
    $pass1 = isset($_POST['pass1']) ? $_POST['pass1'] : "";
    $pass2 = isset($_POST['pass2']) ? $_POST['pass2'] : "";
?>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/estilo.css">
    <title>Criptografia</title>
    <script src="js/funcao.js"></script>
</head>
<body>
    <form action="" method="post">
        <label for="user">User</label>
        <input type="text" name="user" id="user"><br>
        <label for="pass1">Password</label>
        <input type="password" name="pass1" id="pass1"><br>
        <label for="pass2">Password</label>
        <input type="password" name="pass2" id="pass2">
        <input type="submit" value="Login" onclick= "js()";>
    </form>
<?php
    if(isset($_POST['pass1']) && isset($_POST['pass2'])){
    if($pass1 == $pass2){
        $pass1 = sha1($pass1);
        echo "<h1 class='ok'> Ok! Senha alterada! </h1>"; 
        echo "<h1 class='ok'> {$pass1}</h1>";
    } else {
        echo "<h1 class='erro'> Senha Inválida! </h1>" ;
    }
}
    #$pass = sha1($pass);
    #echo "<h1>{$pass}</h1>";
?>
</body>
</html>