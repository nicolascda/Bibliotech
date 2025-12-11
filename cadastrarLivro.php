<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "bibliodb";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$autor = $_POST['autor'];
$resumo = $_POST['resumo'];
$genero = $_POST['genero'];

// Upload da imagem
$img_nome = $_FILES['imagem']['name'];
$img_tmp = $_FILES['imagem']['tmp_name'];

$destino = "img/" . $img_nome;

if (!file_exists("img")) {
    mkdir("img", 0777, true);
}

if (move_uploaded_file($img_tmp, $destino)) {

    $sql = "INSERT INTO livros (nome, img, autor, resumo, Genero)
            VALUES ('$nome', '$destino', '$autor', '$resumo', '$genero')";

    if ($conn->query($sql) === TRUE) {
        echo "Livro cadastrado com sucesso!";
    } else {
        echo "Erro ao cadastrar: " . $conn->error;
    }

} else {
    echo "Erro ao enviar a imagem.";
}

$conn->close();
?>
