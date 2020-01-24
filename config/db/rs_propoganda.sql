-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2020 at 02:21 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rs_propoganda`
--

-- --------------------------------------------------------

--
-- Table structure for table `bericht`
--

CREATE TABLE `bericht` (
  `bericht_id` int(11) NOT NULL,
  `gebruiker_id` int(11) DEFAULT NULL,
  `bericht` varchar(255) DEFAULT NULL,
  `datum` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `commentaar`
--

CREATE TABLE `commentaar` (
  `commentaar_id` int(11) NOT NULL,
  `presentie_id` int(11) DEFAULT NULL,
  `commentaar` tinytext,
  `type` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gebruikers`
--

CREATE TABLE `gebruikers` (
  `gebruiker_id` int(11) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `voornaam` varchar(255) NOT NULL,
  `adres` varchar(255) NOT NULL,
  `telefoonnummer` int(12) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gebruikernaam` varchar(255) NOT NULL,
  `wachtwoord` varchar(255) NOT NULL,
  `type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `presentie`
--

CREATE TABLE `presentie` (
  `presentie_id` int(11) NOT NULL,
  `vergader_id` int(11) DEFAULT NULL,
  `naam` varchar(255) DEFAULT NULL,
  `voornaam` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ressort`
--

CREATE TABLE `ressort` (
  `ressort_id` int(11) NOT NULL,
  `ressortnaam` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `vergadering`
--

CREATE TABLE `vergadering` (
  `vergader_id` int(11) NOT NULL,
  `ressort_id` int(11) DEFAULT NULL,
  `datum` date NOT NULL,
  `sprekers` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `gebruiker_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `presentie`
--
ALTER TABLE `presentie`
  MODIFY `presentie_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ressort`
--
ALTER TABLE `ressort`
  MODIFY `ressort_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `commentaar_ibfk_1` FOREIGN KEY (`presentie_id`) REFERENCES `presentie` (`presentie_id`);

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
