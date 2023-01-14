<!DOCTYPE html>
<?php
    $pass = isset($_POST['pass1']) ? $_POST['pass1'] : "";
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>A sua senha criptografada é:</h1>
    <?php
    if(isset($_POST['pass1'])){
    $pass = sha1($pass);
    echo "<h1>{$pass}</h1>";
    }
    ?>
</body>
</html>