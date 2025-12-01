<?php

$dsn = "mysql:host=localhost;dbname=bibliodb;charset=utf8mb4";

$options = [
  PDO::ATTR_EMULATE_PREPARES   => false, // Disable emulation mode for "real" prepared statements
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Disable errors in the form of exceptions
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Make the default fetch be an associative array
];

try {
  $pdo = new PDO($dsn, "root", "1234", $options);
} 
catch (Exception $e) {
  error_log($e->getMessage());
}

class Contact {
    //   public $senha;
}


$contacts = $pdo->query( "SELECT * FROM usuarios ")->fetchAll(PDO::FETCH_CLASS, 'Contact');
$oi = $contacts[0]->senha;

?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="icon" href="./img/Logo.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bibliotech - Administração</title>
    <link rel="stylesheet" href="./css/admin.css">
    <link rel="stylesheet" href="./CSS/cadastrar.css">
</head>
<body>

<div class="sidebar">
    <img src="./IMG/logo.png" alt="Bibliotech Logo" class="logo">
    <a href="admin.html" >Dashboard</a>
    <a class="active" href="#">Cadastrar</a>

    <a class="logout" href="./index.html">Sair</a>
</div>

<div class="content">
    <header>
        <h1 class="tituloc">Cadastrar</h1>
    </header>
    <section class="tabelaArea">
            <section class="container-form">
            <form action="#">

                <label for="nome">Nome do autor</label>
                <input type="text" id="nome" name="nome" placeholder="Digite o nome do autor" required>
                <div class="container-radio">
                </div>
                <label for="descricao">Descrição</label>
                <input type="text" id="descricao" name="descricao"  placeholder="Digite uma descrição" required>

                <label for="genero">Gênero</label>
                <input type="text" id="genero" name="genero"  placeholder="Digite uma descrição" required>

                <label for="imagem">Envie uma imagem do Livro</label>
                <input type="file" name="imagem" accept="image/*" id="imagem"   placeholder="Envie um imagem" required>

                <input type="submit" name="cadastro" class="botao-cadastrar" value="Cadastrar Livro"/>
            </form>
        </section>  
    </section>
</div>

<script src="./JS/admin.js"></script>
</body>
</html>
?>