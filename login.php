<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$input = json_decode(file_get_contents("php://input"), true);

$email = $input["email"] ?? "";
$senha = $input["senha"] ?? "";

$conn = new mysqli("localhost", "root", "", "bibliodb");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "msg" => "Erro ao conectar no banco"]);
    exit;
}

$stmt = $conn->prepare("SELECT id, nome, email, senha FROM usuario WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["status" => "error", "msg" => "Email não encontrado"]);
    exit;
}

$user = $result->fetch_assoc();

if (!password_verify($senha, $user["senha"])) {
    echo json_encode(["status" => "error", "msg" => "Senha incorreta"]);
    exit;
}

echo json_encode([
    "status" => "success",
    "msg" => "Logado!",
    "user" => [
        "id" => $user["id"],
        "nome" => $user["nome"],
        "email" => $user["email"]
    ]
]);





exit;