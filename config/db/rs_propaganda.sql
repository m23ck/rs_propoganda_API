-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2020 at 04:22 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rs_propaganda`
--

-- --------------------------------------------------------

--
-- Table structure for table `bericht`
--

CREATE TABLE `bericht` (
  `bericht_id` int(11) NOT NULL,
  `bericht` text NOT NULL,
  `datum` datetime DEFAULT current_timestamp(),
  `gebruiker_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bericht`
--

INSERT INTO `bericht` (`bericht_id`, `bericht`, `datum`, `gebruiker_id`) VALUES
(1, 'Hallo dit is een bericht', '2020-02-19 11:43:51', 4),
(2, 'BERICHTT!!!', '2020-02-19 11:53:16', 5),
(3, 'NIeuw bericht', '2020-02-19 12:05:14', 5);

-- --------------------------------------------------------

--
-- Table structure for table `commentaar`
--

CREATE TABLE `commentaar` (
  `commentaar_id` int(11) NOT NULL,
  `commentaar` tinytext NOT NULL,
  `type` tinyint(1) NOT NULL,
  `presentie_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `commentaar`
--

INSERT INTO `commentaar` (`commentaar_id`, `commentaar`, `type`, `presentie_id`) VALUES
(1, 'PUINNNNN', 0, 1),
(2, 'Heel goede partij hoor.', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `gebruikers`
--

CREATE TABLE `gebruikers` (
  `gebruiker_id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `voornaam` varchar(255) NOT NULL,
  `adres` varchar(255) NOT NULL,
  `telefoonnummer` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gebruikernaam` varchar(255) NOT NULL,
  `wachtwoord` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gebruikers`
--

INSERT INTO `gebruikers` (`gebruiker_id`, `naam`, `voornaam`, `adres`, `telefoonnummer`, `email`, `gebruikernaam`, `wachtwoord`, `type_id`) VALUES
(4, 'test01', 'test01', 'test01straat 43', 7254402, 'test01@memail.com', 'test01', '$2b$10$VMoOuOsXTVx7WncwsK9H2OzcGHQvtFT6WLaTiXSpYPXFC/9hjedva', 4),
(5, 'Samadhan', 'Shaniel', 'meowstraat 2', 89526465, 'shaniel29samadhan@gmail.com', 'esaniello', '$2b$10$.IUyzGoklGKJsJ9VIycKnu9HKhedre7OZduQlIAcrT7Z7W43OrqAy', 4);

-- --------------------------------------------------------

--
-- Table structure for table `presentie`
--

CREATE TABLE `presentie` (
  `presentie_id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `voornaam` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `vergader_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `presentie`
--

INSERT INTO `presentie` (`presentie_id`, `naam`, `voornaam`, `email`, `vergader_id`) VALUES
(1, 'Paules', 'Paula', 'paules@gmail.com', 1),
(2, 'Pablo', 'Escobar', 'pablo@yahoo.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ressort`
--

CREATE TABLE `ressort` (
  `ressort_id` int(11) NOT NULL,
  `ressortnaam` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ressort`
--

INSERT INTO `ressort` (`ressort_id`, `ressortnaam`, `district`) VALUES
(2, 'Meerzorg', 'Commewijne'),
(3, 'Koewarasan', 'Wanica'),
(4, 'Welgedacht A', 'Wanica'),
(5, 'Houttuin', 'Wanica'),
(6, 'Blauwgrond', 'Paramaribo');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`type_id`, `type`) VALUES
(4, 'ADMIN'),
(5, 'MODERATOR');

-- --------------------------------------------------------

--
-- Table structure for table `vergadering`
--

CREATE TABLE `vergadering` (
  `vergader_id` int(11) NOT NULL,
  `ressort_id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `sprekers` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vergadering`
--

INSERT INTO `vergadering` (`vergader_id`, `ressort_id`, `datum`, `sprekers`) VALUES
(1, 6, '2020-02-19', 'Juan de la rosa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bericht`
--
ALTER TABLE `bericht`
  ADD PRIMARY KEY (`bericht_id`),
  ADD KEY `gebruiker_id` (`gebruiker_id`);

--
-- Indexes for table `commentaar`
--
ALTER TABLE `commentaar`
  ADD PRIMARY KEY (`commentaar_id`),
  ADD KEY `presentie_id` (`presentie_id`);

--
-- Indexes for table `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD PRIMARY KEY (`gebruiker_id`),
  ADD UNIQUE KEY `gebruikernaam` (`gebruikernaam`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `presentie`
--
ALTER TABLE `presentie`
  ADD PRIMARY KEY (`presentie_id`),
  ADD KEY `vergader_id` (`vergader_id`);

--
-- Indexes for table `ressort`
--
ALTER TABLE `ressort`
  ADD PRIMARY KEY (`ressort_id`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `vergadering`
--
ALTER TABLE `vergadering`
  ADD PRIMARY KEY (`vergader_id`),
  ADD KEY `ressort_id` (`ressort_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bericht`
--
ALTER TABLE `bericht`
  MODIFY `bericht_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `commentaar`
--
ALTER TABLE `commentaar`
  MODIFY `commentaar_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `gebruiker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `presentie`
--
ALTER TABLE `presentie`
  MODIFY `presentie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ressort`
--
ALTER TABLE `ressort`
  MODIFY `ressort_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vergadering`
--
ALTER TABLE `vergadering`
  MODIFY `vergader_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bericht`
--
ALTER TABLE `bericht`
  ADD CONSTRAINT `bericht_ibfk_1` FOREIGN KEY (`gebruiker_id`) REFERENCES `gebruikers` (`gebruiker_id`);

--
-- Constraints for table `commentaar`
--
ALTER TABLE `commentaar`
  ADD CONSTRAINT `commentaar_ibfk_2` FOREIGN KEY (`presentie_id`) REFERENCES `presentie` (`presentie_id`);

--
-- Constraints for table `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD CONSTRAINT `gebruikers_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `type` (`type_id`);

--
-- Constraints for table `presentie`
--
ALTER TABLE `presentie`
  ADD CONSTRAINT `presentie_ibfk_1` FOREIGN KEY (`vergader_id`) REFERENCES `vergadering` (`vergader_id`);

--
-- Constraints for table `vergadering`
--
ALTER TABLE `vergadering`
  ADD CONSTRAINT `vergadering_ibfk_1` FOREIGN KEY (`ressort_id`) REFERENCES `ressort` (`ressort_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
