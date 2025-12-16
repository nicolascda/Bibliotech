-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           12.1.2-MariaDB - MariaDB Server
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.13.0.7147
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

-- Copiando estrutura para tabela bibliodb.comentario
CREATE TABLE IF NOT EXISTS `comentario` (
  `comentario_Livro_Id` int(11) NOT NULL,
  `comentario_Usuario_Id` int(11) NOT NULL,
  `comentarioTexto` varchar(500) NOT NULL DEFAULT '',
  `nota` int(1) NOT NULL DEFAULT 5,
  `perfil_Img` varchar(200) DEFAULT NULL,
  KEY `FK_comentario_livros` (`comentario_Livro_Id`) USING BTREE,
  KEY `FK_comentario_usuario` (`comentario_Usuario_Id`) USING BTREE,
  CONSTRAINT `FK_comentario_livros` FOREIGN KEY (`comentario_Livro_Id`) REFERENCES `livros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_comentario_usuario` FOREIGN KEY (`comentario_Usuario_Id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela bibliodb.livros
CREATE TABLE IF NOT EXISTS `livros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `img` varchar(150) DEFAULT NULL,
  `autor` varchar(100) NOT NULL,
  `resumo` varchar(1000) NOT NULL,
  `Genero` varchar(50) NOT NULL,
  `reservado` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;


REPLACE INTO `livros` (`id`, `nome`, `img`, `autor`, `resumo`, `Genero`, `reservado`) VALUES
	(1, 'Rei Arthur e os caveleiros da Távola Redonda', './img/ReiArthur.jpg', 'Godofredo de Monmouth', 'Rei Arthur é uma figura lendária presente no imaginário popular há centenas de anos. Segundo a lenda, ele governou os bretões com auxílio dos Cavaleiros da Távola Redonda.', 'Fantasia', 0),
	(2, 'Hamlet', './img/Hamlet.jpg', 'William Shakespeare', 'Hamlet é uma obra clássica do dramaturgo inglês William Shakespeare. Essa tragédia tem como protagonista o príncipe Hamlet, o qual busca vingar a morte do pai.', 'Mistério', 0),
	(3, 'Código Limpo', './img/CodigoLimpo.png', 'Robert C. Martin', 'O livro aborda como criar um código e te ajuda a desenvolver suas habilidades de programação', 'Educaçao', 0),
	(4, 'Five Nights at Freddys Into the Pit', './img/FnafIntoThePit.jpg', 'Scott Cawthon', 'Pule na piscina e mergulhe em um novo capítulo no universo de Five Nights at Freddy’s. Oswald deseja que sua cidade, e sua vida, não sejam tão entediantes. Tudo muda quando ele explora a piscina de bolinhas em uma pizzaria decadente e se vê no passado. No entanto, o desejo mais profundo de Oswald terá um custo inesperado...', 'Mistério', 1),
	(5, 'Guerra Dos Tronos', './img/GuerraDosTronos.jpg', 'George R. R. Martin', 'Guerra Dos Tronos se passa em Westeros, onde famílias nobres disputam o poder pelo Trono de Ferro. Ao mesmo tempo, a última herdeira exilada dos Targaryen busca reconquistar seu lugar, enquanto uma ameaça sobrenatural ressurge no extremo norte. A história acompanha o ponto de vista de múltiplos personagens que se veem envolvidos nessa complexa teia de política, guerra, traição e magia', 'Aventura', 0),
	(6, 'O Alquimista', './img/OAlquimista.jpg', 'Paulo Coelho', 'O Alquimista segue a jornada de um pastor andaluz chamado Santiago. Acreditando em um sonho recorrente de ser profético, ele decide viajar para uma adivinha Romani em uma cidade próxima para descobrir seu significado. A mulher interpreta o sonho como uma profecia dizendo ao menino que há um tesouro nas pirâmides no Egito.', 'Romance', 0),
	(7, 'O Guia do Mochileiro das Galáxias', './img/OGuiaDoMochileiroDasGalaxias.jpg', 'Neil Gaiman', 'O maior livro de comédia e ficção científica da história', 'Ficção', 0),
	(8, 'Senhor dos Anéis', './img/SenhorDosAneis.jpg', 'J.R.R Tolkien', 'Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.', 'Aventura', 0),
	(9, 'Diário de um Banana', './img/DiarioDeUmBanana.jpg', 'Jeff Kinney', 'história de Greg Heffley, um garoto que está tentando sobreviver ao ensino fundamental, vivendo aventuras e enfrentando os desafios comuns da pré-adolescência, como a escola, a família e as amizades.', 'Comédia', 0),
	(10, 'O Ladrão de Raios', './img/Percyjackson.png', 'Rick Riordan', 'conta a história de Percy Jackson, um garoto de 12 anos que descobre ser um semideus, filho do deus Poseidon. Ele é acusado de roubar o raio-mestre de Zeus, o que pode causar uma guerra entre os deuses. Para impedir isso, Percy, acompanhado de seus amigos Annabeth e Grover, embarca em uma missão perigosa para encontrar o verdadeiro ladrão e devolver o raio antes do solstício de verão. ', 'Fantasia', 0),
	(11, 'Harry Potter e a Pedra Filosofal', './img/HarryPotter.jpg', 'J.K. Rowling', 'Harry descobre que é um bruxo e passa a estudar em Hogwarts, onde enfrenta perigos e aprende sobre seu passado mágico.', 'Fantasia', 0),
	(12, 'A Culpa é das Estrelas', './img/ACulpaEDasEstrelas.jpg', 'John Green', 'A relação emocionante entre Hazel e Gus, dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer.', 'Romance', 0),
	(13, 'O Pequeno Príncipe', './img/OPequenoPrincipe.jpg', 'Antoine de Saint-Exupéry', 'Um piloto encontra um pequeno príncipe vindo de outro planeta e aprende lições profundas sobre amor, amizade e humanidade.', 'Fantasia', 0),
	(14, '1984', './img/1984.jpg', 'George Orwell', 'Retrata um mundo distópico onde o governo controla tudo, inclusive pensamentos, através do Grande Irmão.', 'Ficção', 0),
	(15, 'O Hobbit', './img/OHobbit.jpg', 'J.R.R. Tolkien', 'Bilbo Bolseiro embarca em uma aventura ao lado de anões para recuperar um tesouro guardado por um dragão.', 'Fantasia', 0),
	(16, 'Dom Casmurro', './img/DomCasmurro.jpg', 'Machado de Assis', 'A história de Bentinho e Capitu, marcada por dúvidas, ciúmes e uma narrativa envolvente sobre amor e traição.', 'Drama', 0),
	(17, 'A Menina que Roubava Livros', './img/AMeninaQueRoubavaLivros.jpg', 'Markus Zusak', 'A história de Liesel, que encontra conforto roubando livros durante a Segunda Guerra Mundial, narrada pela própria Morte.', 'Drama', 0),
	(18, 'Coraline', './img/Coraline.png', 'Neil Gaiman', 'Coraline encontra uma porta para um mundo alternativo onde tudo parece perfeito demais — e muito perigoso.', 'Fantasia', 0),
	(19, 'Jogos Vorazes', './img/JogosVorazes.jpg', 'Suzanne Collins', 'Katniss Everdeen se oferece como tributo em uma competição mortal televisionada pelo governo totalitário.', 'Ficção', 0),
	(20, 'Authentic Games', './img/download.jpg', 'Marco Tulio', 'Com meus amigos', 'Educaçao', 0);

-- Copiando estrutura para tabela bibliodb.reservado
CREATE TABLE IF NOT EXISTS `reservado` (
  `usuario_id` int(11) NOT NULL,
  `livro_id` int(11) NOT NULL,
  KEY `FK_reservado_usuario` (`usuario_id`),
  KEY `FK_reservado_livros` (`livro_id`),
  CONSTRAINT `FK_reservado_livros` FOREIGN KEY (`livro_id`) REFERENCES `livros` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_reservado_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela bibliodb.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `nome` varchar(150) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(150) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `data_nasc` date NOT NULL,
  `perfilImg` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Exportação de dados foi desmarcado.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
