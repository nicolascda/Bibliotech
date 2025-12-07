<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

$input = json_decode(file_get_contents("php://input"), true);

$email = $input["email"] ?? "";
$nome = $input["nome"] ?? "";
$senha = $input["senha"] ?? "";
$data_nasc = $input["data_nasc"] ?? "";

// Verificação básica
if (!$email || !$nome || !$senha || !$data_nasc) {
    echo json_encode(["status" => "error", "msg" => "Preencha todos os campos"]);
    exit;
}

// Conexão MySQL
$conn = new mysqli("localhost", "root", "", "bibliodb");

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "msg" => "Erro ao conectar ao banco"]);
    exit;
}

// Verifica se email já existe
$stmt = $conn->prepare("SELECT id FROM usuario WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "msg" => "Email já cadastrado"]);
    exit;
}

// Criptografa senha
$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

// Insere usuário
$stmt = $conn->prepare("INSERT INTO usuario (email, nome, senha, data_nasc) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $email, $nome, $senha_hash, $data_nasc);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "msg" => "Usuário cadastrado com sucesso!"]);
} else {
    echo json_encode(["status" => "error", "msg" => "Erro ao cadastrar usuário"]);
}

exit;
