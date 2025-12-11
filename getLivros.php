<?php
header("Content-Type: application/json");

// Conexão
$conn = new mysqli("localhost", "root", "", "bibliodb");

if ($conn->connect_error) {
    echo json_encode(["erro" => "Falha na conexão."]);
    exit;
}

// Pega livros com status
$sql = "SELECT id, nome, autor, reservado FROM livros ORDER BY id DESC LIMIT 20";
$result = $conn->query($sql);

$livros = [];

while ($row = $result->fetch_assoc()) {
    $livros[] = $row;
}

echo json_encode($livros);

$conn->close();
?>
