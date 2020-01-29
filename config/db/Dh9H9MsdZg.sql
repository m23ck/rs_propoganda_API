-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 29, 2020 at 01:39 PM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.24-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Dh9H9MsdZg`
--

-- --------------------------------------------------------

--
-- Table structure for table `bericht`
--

CREATE TABLE `bericht` (
  `bericht_id` int(11) NOT NULL,
  `bericht` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `datum` datetime DEFAULT CURRENT_TIMESTAMP,
  `gebruiker_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `commentaar`
--

CREATE TABLE `commentaar` (
  `commentaar_id` int(11) NOT NULL,
  `commentaar` tinytext NOT NULL,
  `type` tinyint(1) NOT NULL,
  `presentie_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `gebruikers`
--

INSERT INTO `gebruikers` (`gebruiker_id`, `naam`, `voornaam`, `adres`, `telefoonnummer`, `email`, `gebruikernaam`, `wachtwoord`, `type_id`) VALUES
(2, 'Latchmansing', 'Kenson', 'j Lachmonstraat 43', 8674583, 'kLatch@yahoo.com', 'klatch', '$2b$10$KGbS9HMrBsGWCxRwM0UEnu2Wal//tZVltOgg8u9Zomenvi3HphIGK', 3),
(3, 'Mack', 'Andojo', 'Mahadew Missierweg 43', 7254402, 'andojomack@gmail.com', 'm23ck', '$2b$10$n04/Gjoqiw9hrSzPh.9zbedGnjKxFhsxPmz0rR/5320xTT/JUj6FK', 3);

-- --------------------------------------------------------

--
-- Table structure for table `presentie`
--

CREATE TABLE `presentie` (
  `presentie_id` int(11) NOT NULL,
  `naam` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `voornaam` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `vergader_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ressort`
--

CREATE TABLE `ressort` (
  `ressort_id` int(11) NOT NULL,
  `ressortnaam` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `ressort`
--

INSERT INTO `ressort` (`ressort_id`, `ressortnaam`, `district`) VALUES
(1, 'koewarasan', 'wanica');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`type_id`, `type`) VALUES
(2, 'Administrator'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `vergadering`
--

CREATE TABLE `vergadering` (
  `vergader_id` int(11) NOT NULL,
  `ressort_id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `sprekers` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  MODIFY `bericht_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `commentaar`
--
ALTER TABLE `commentaar`
  MODIFY `commentaar_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `gebruiker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `presentie`
--
ALTER TABLE `presentie`
  MODIFY `presentie_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ressort`
--
ALTER TABLE `ressort`
  MODIFY `ressort_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vergadering`
--
ALTER TABLE `vergadering`
  MODIFY `vergader_id` int(11) NOT NULL AUTO_INCREMENT;

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
