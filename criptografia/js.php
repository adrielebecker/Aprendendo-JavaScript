<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio</title>
    <script src="js/impedir.js"></script>
</head>
<body>
    <form action="pg2.php" method="post">
        <fieldset>
            <legend>Impedir com JavaScript</legend>
            <label for="pass1">Digite uma senha de quatro caracteres:</label>
            <input type="password" name="pass1" id="pass1" oninput="funA()"><br>
            <label for="pass2">Confirme a sua senha de quatro caracteres:</label>
            <input type="password" name="pass2" id="pass2" oninput="funA()"><br>
            <input type="submit" name="acao" id="acao" value="Enviar" onclick="funA()"><br>
        </fieldset>
    </form>
</body>
</html>