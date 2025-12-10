-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           12.1.2-MariaDB - MariaDB Server
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para bibliodb
CREATE DATABASE IF NOT EXISTS `bibliodb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `bibliodb`;

-- Copiando estrutura para tabela bibliodb.livros
CREATE TABLE IF NOT EXISTS `livros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `autor` varchar(50) NOT NULL,
  `resumo` varchar(500) NOT NULL,
  `Genero` varchar(50) NOT NULL,
  `reservado` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Copiando dados para a tabela bibliodb.livros: ~17 rows (aproximadamente)
INSERT INTO `livros` (`id`, `nome`, `img`, `autor`, `resumo`, `Genero`, `reservado`) VALUES
	(1, 'Código Limpo', './img/CodigoLimpo.png', 'Robert C. Martin', 'O livro aborda como criar um código e te ajuda a desenvolver suas habilidades de programação', 'Educaçao', 0),
	(2, 'Five Nights at Freddys Into the Pit', './img/FnafIntoThePit.jpg', 'Scott Cawthon', 'Eita higor', 'Mistério', 1),
	(3, 'Guerra Dos Tronos', './img/GuerraDosTronos.jpg', 'George R. R. Martin', 'Uma série bem legal', 'Aventura', 0),
	(4, 'O Alquimista', './img/OAlquimista.jpg', 'Paulo Coelho', 'Um alquimista bem legal', 'Romance', 0),
	(5, 'O Guia do Mochileiro das Galáxias', './img/OGuiaDoMochileiroDasGalaxias.jpg', 'Neil Gaiman', 'O maior livro de comédia e ficção científica da história', 'Ficção', 0),
	(6, 'Senhor dos Anéis', './img/SenhorDosAneis.jpg', 'J.R.R Tolkien', 'Espada, guerra e anel do poder', 'Aventura', 0),
	(7, 'Diário de um Banana', './img/DiarioDeUmBanana.jpg', 'Jeff Kinney', 'história de Greg Heffley, um garoto que está tentando sobreviver ao ensino fundamental, vivendo aventuras e enfrentando os desafios comuns da pré-adolescência, como a escola, a família e as amizades.', 'Comédia', 0),
	(8, 'O Ladrão de Raios', './img/Percyjackson.png', 'Rick Riordan', 'conta a história de Percy Jackson, um garoto de 12 anos que descobre ser um semideus, filho do deus Poseidon. Ele é acusado de roubar o raio-mestre de Zeus, o que pode causar uma guerra entre os deuses. Para impedir isso, Percy, acompanhado de seus amigos Annabeth e Grover, embarca em uma missão perigosa para encontrar o verdadeiro ladrão e devolver o raio antes do solstício de verão. ', 'Fantasia', 0),
	(9, 'Harry Potter e a Pedra Filosofal', './img/HarryPotter.jpg', 'J.K. Rowling', 'Harry descobre que é um bruxo e passa a estudar em Hogwarts, onde enfrenta perigos e aprende sobre seu passado mágico.', 'Fantasia', 0),
	(10, 'A Culpa é das Estrelas', './img/ACulpaEDasEstrelas.jpg', 'John Green', 'A relação emocionante entre Hazel e Gus, dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer.', 'Romance', 0),
	(11, 'O Pequeno Príncipe', './img/OPequenoPrincipe.jpg', 'Antoine de Saint-Exupéry', 'Um piloto encontra um pequeno príncipe vindo de outro planeta e aprende lições profundas sobre amor, amizade e humanidade.', 'Fantasia', 0),
	(12, '1984', './img/1984.jpg', 'George Orwell', 'Retrata um mundo distópico onde o governo controla tudo, inclusive pensamentos, através do Grande Irmão.', 'Ficção', 0),
	(13, 'O Hobbit', './img/OHobbit.jpg', 'J.R.R. Tolkien', 'Bilbo Bolseiro embarca em uma aventura ao lado de anões para recuperar um tesouro guardado por um dragão.', 'Fantasia', 0),
	(14, 'Dom Casmurro', './img/DomCasmurro.jpg', 'Machado de Assis', 'A história de Bentinho e Capitu, marcada por dúvidas, ciúmes e uma narrativa envolvente sobre amor e traição.', 'Drama', 0),
	(15, 'A Menina que Roubava Livros', './img/AMeninaQueRoubavaLivros.jpg', 'Markus Zusak', 'A história de Liesel, que encontra conforto roubando livros durante a Segunda Guerra Mundial, narrada pela própria Morte.', 'Drama', 0),
	(16, 'Coraline', './img/Coraline.png', 'Neil Gaiman', 'Coraline encontra uma porta para um mundo alternativo onde tudo parece perfeito demais — e muito perigoso.', 'Fantasia', 0),
	(17, 'Jogos Vorazes', './img/JogosVorazes.jpg', 'Suzanne Collins', 'Katniss Everdeen se oferece como tributo em uma competição mortal televisionada pelo governo totalitário.', 'Ficção', 0);

-- Copiando estrutura para tabela bibliodb.reservado
CREATE TABLE IF NOT EXISTS `reservado` (
  `usuario_id` int(11) NOT NULL,
  `livro_id` int(11) NOT NULL,
  KEY `FK_reservado_usuario` (`usuario_id`),
  KEY `FK_reservado_livros` (`livro_id`),
  CONSTRAINT `FK_reservado_livros` FOREIGN KEY (`livro_id`) REFERENCES `livros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reservado_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Copiando dados para a tabela bibliodb.reservado: ~3 rows (aproximadamente)
INSERT INTO `reservado` (`usuario_id`, `livro_id`) VALUES
	(1, 2),
	(1, 3),
	(2, 4);

-- Copiando estrutura para tabela bibliodb.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `nome` varchar(100) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `senha` varchar(200) NOT NULL DEFAULT '0',
  `token_id` varchar(100) NOT NULL DEFAULT '0',
  `email` varchar(100) NOT NULL,
  `data_nasc` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Copiando dados para a tabela bibliodb.usuario: ~2 rows (aproximadamente)
INSERT INTO `usuario` (`nome`, `id`, `senha`, `token_id`, `email`, `data_nasc`) VALUES
	('Higor', 1, '$2y$12$9PVlsq/0yJf7UpVhoLc5XuzHsUiPI/9g/HXKSJk8tsZ/kUS0rDOW2', '0', 'HigorLeandro@gmail.com', '2008-12-22'),
	('LeandroHigor', 2, '$2y$12$6QHEAe0DWw7sqdCbLV4eEugeJzziVJiVoaoUHQUGnIbdIdAWmuZ9y', '0', 'HigorLeandroHigor@gmail.com', '2008-12-30');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
