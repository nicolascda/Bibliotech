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


