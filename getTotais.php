<?php
header("Content-Type: application/json");
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    // Conexão
    $conn = new mysqli("localhost", "root", "", "bibliodb");
    $conn->set_charset("utf8");

    // Total de livros
    $result1 = $conn->query("SELECT COUNT(*) AS totalLivros FROM livros");
    $totalLivros = $result1->fetch_assoc()["totalLivros"];

    // Total de usuários
    // $result2 = $conn->query("SELECT COUNT(*) AS totalUsuarios FROM usuarios");
    // $totalUsuarios = $result2->fetch_assoc()["totalUsuarios"];

    echo json_encode([
        "totalLivros" => $totalLivros,
        // "totalUsuarios" => $totalUsuarios,
    ]);

} catch (Exception $e) {

    echo json_encode([
        "erro" => $e->getMessage()
    ]);
}
?>
