<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "bibliodb";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro ao conectar: " . $conn->connect_error);
}

$sql = "SELECT COUNT(*) AS total FROM livros WHERE reservado = 1";
$res = $conn->query($sql);

$dados = $res->fetch_assoc();

echo $dados['total'];

$conn->close();
?>
