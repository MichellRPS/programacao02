-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3325
-- Tempo de geração: 25-Nov-2021 às 17:21
-- Versão do servidor: 10.4.20-MariaDB
-- versão do PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `intercodedb`
--
CREATE DATABASE IF NOT EXISTS `intercodedb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `intercodedb`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `clienteid` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`clienteid`, `nome`, `imagem`) VALUES
(1, 'Rede Globo', 'assets/img/clientes/rede_globo_logo.jpg'),
(2, '97 FM', 'assets/img/clientes/97fm_logo.jpg'),
(3, 'ACIF CDL', 'assets/img/clientes/acif_cdl_logo.jpg'),
(4, 'Air System', 'assets/img/clientes/air_system_logo.jpg'),
(5, 'America Business Park', 'assets/img/clientes/america_business_park_logo.jpg'),
(6, 'Associação Arte Despertar', 'assets/img/clientes/associacao_arte_despertar_logo.jpg'),
(7, 'Associação Viva e Deixe Viver', 'assets/img/clientes/associacao_viva_e_deixe_viver_logo.jpg'),
(8, 'Ativo.com', 'assets/img/clientes/ativo_ponto_com_logo.jpg'),
(9, 'Azevedo Decor', 'assets/img/clientes/azevedo_decor_logo.jpg'),
(10, 'Barros Decoração', 'assets/img/clientes/barros_decoracao_logo.jpg'),
(11, 'Bicschool', 'assets/img/clientes/bicschool_logo.jpg'),
(12, 'Bio-Médicin', 'assets/img/clientes/bio_medicin_logo.jpg'),
(13, 'Brinca Brasil', 'assets/img/clientes/brinca_brasil_logo.jpg'),
(14, 'C+6 Marketing', 'assets/img/clientes/c_mais_6_marketing_logo.jpg'),
(15, 'Casamento Jundiaí', 'assets/img/clientes/casamento_jundiai_logo.jpg'),
(16, 'Cimino Marmoraria', 'assets/img/clientes/cimino_marmoraria_logo.jpg'),
(17, 'Citrik', 'assets/img/clientes/citrik_logo.jpg'),
(18, 'Colégio IBPI', 'assets/img/clientes/colegio_ibpi_logo.jpg'),
(19, 'Contra Regras Produção e Comunicação', 'assets/img/clientes/contra_regras_producao_e_comunicacao_logo.jpg'),
(20, 'Cory', 'assets/img/clientes/cory_logo.jpg'),
(21, 'Cushman & Wakefield', 'assets/img/clientes/cushman_e_wakefield_logo.jpg'),
(22, 'DL Eletrônicos', 'assets/img/clientes/dl_eletronicos_logo.jpg'),
(23, 'Editora Roncarati', 'assets/img/clientes/editora_roncarati_logo.jpg'),
(24, 'Engemon', 'assets/img/clientes/engemon_logo.jpg'),
(25, 'Engepol', 'assets/img/clientes/engepol_logo.jpg'),
(26, 'EPTV', 'assets/img/clientes/eptv_logo.jpg'),
(27, 'Ficael', 'assets/img/clientes/ficael_logo.jpg'),
(28, 'Fields', 'assets/img/clientes/fields_logo.jpg'),
(29, 'Gemelo', 'assets/img/clientes/gemelo_logo.jpg'),
(30, 'Greika', 'assets/img/clientes/greika_logo.jpg'),
(31, 'Hazime', 'assets/img/clientes/hazime_logo.jpg'),
(32, 'Helicidade', 'assets/img/clientes/helicidade_logo.jpg'),
(33, 'Icasaa', 'assets/img/clientes/air_system_logo.jpg'),
(34, 'Imagine Instituto', 'assets/img/clientes/imagine_instituto_logo.jpg'),
(35, 'Insca', 'assets/img/clientes/insca_logo.jpg'),
(36, 'Intelitera Editora', 'assets/img/clientes/intelitera_editora_logo.jpg'),
(37, 'Irmãos Queiroz e Domingos', 'assets/img/clientes/irmaos_queiroz_e_domingos_logo.jpg'),
(38, 'Latin Sports', 'assets/img/clientes/latin_sports_logo.jpg'),
(39, 'Lube Metal', 'assets/img/clientes/lube_metal_logo.jpg'),
(40, 'Lucerna', 'assets/img/clientes/lucerna_logo.jpg'),
(41, 'Machado Meyer', 'assets/img/clientes/machado_meyer_logo.jpg'),
(42, 'Mirabilis Produções Culturais', 'assets/img/clientes/mirabilis_producoes_culturais_logo.jpg'),
(43, 'Momentum Empreendimentos', 'assets/img/clientes/momentum_empreendimentos_logo.jpg'),
(44, 'Ópticas Luppino', 'assets/img/clientes/opticas_luppino_logo.jpg'),
(45, 'Planem Engenharia e Sistemas', 'assets/img/clientes/planem_engenharia_e_sistemas_logo.jpg'),
(46, 'Porto Seguro Cia de Seguros Gerais', 'assets/img/clientes/porto_seguro_cia_de_seguros_gerais_logo.jpg'),
(47, 'Prefeitura Municipal de Frutal', 'assets/img/clientes/prefeitura_municipal_de_frutal_logo.jpg'),
(48, 'PwC', 'assets/img/clientes/pwc_logo.jpg'),
(49, 'Skill Aliança Inglesa', 'assets/img/clientes/skill_alianca_inglesa_logo.jpg'),
(50, 'Steel Knife', 'assets/img/clientes/steel_knife_logo.jpg'),
(51, 'Supera RX Medicamentos', 'assets/img/clientes/supera_rx_medicamentos_logo.jpg'),
(52, 'Tradaq Ltda', 'assets/img/clientes/tradaq_ltda_logo.jpg'),
(53, 'Travel Around Viagens e Turismo', 'assets/img/clientes/travel_around_viagens_e_turismo_logo.jpg'),
(54, 'Vitality Saúde', 'assets/img/clientes/vitality_saude_logo.jpg'),
(55, 'Prefeitura Municipal de Santa Adélia', 'assets/img/clientes/prefeitura_municipal_de_santa_adelia_logo.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`clienteid`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `clienteid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
