-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 22 jan 2020 om 14:05
-- Serverversie: 10.4.8-MariaDB
-- PHP-versie: 7.3.11

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
-- Tabelstructuur voor tabel `bericht`
--

CREATE TABLE `bericht` (
  `bericht_id` int(11) NOT NULL,
  `bericht` text DEFAULT NULL,
  `datum` datetime DEFAULT current_timestamp(),
  `gebruiker_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `commentaar`
--

CREATE TABLE `commentaar` (
  `commentaar_id` int(11) NOT NULL,
  `commentaar` tinytext NOT NULL,
  `type` tinyint(1) NOT NULL,
  `presentie_id` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `gebruikers`
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
  `type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `gebruikers`
--

INSERT INTO `gebruikers` (`gebruiker_id`, `naam`, `voornaam`, `adres`, `telefoonnummer`, `email`, `gebruikernaam`, `wachtwoord`, `type_id`) VALUES
(2, 'Latchmansing', 'Kenson', 'j Lachmonstraat 43', 8674583, 'kLatch@yahoo.com', 'klatch', '$2b$10$KGbS9HMrBsGWCxRwM0UEnu2Wal//tZVltOgg8u9Zomenvi3HphIGK', 3);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `presentie`
--

CREATE TABLE `presentie` (
  `presentie_id` int(11) NOT NULL,
  `naam` varchar(255) DEFAULT NULL,
  `voornaam` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `vergader_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `ressort`
--

CREATE TABLE `ressort` (
  `ressort_id` int(11) NOT NULL,
  `ressortnaam` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `ressort`
--

INSERT INTO `ressort` (`ressort_id`, `ressortnaam`, `district`) VALUES
(1, 'koewarasan', 'wanica');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `type`
--

CREATE TABLE `type` (
  `type_id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `type`
--

INSERT INTO `type` (`type_id`, `type`) VALUES
(2, 'Administrator'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `vergadering`
--

CREATE TABLE `vergadering` (
  `vergader_id` int(11) NOT NULL,
  `ressort_id` int(11) DEFAULT NULL,
  `datum` date NOT NULL,
  `sprekers` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `bericht`
--
ALTER TABLE `bericht`
  ADD PRIMARY KEY (`bericht_id`),
  ADD KEY `gebruiker_id` (`gebruiker_id`);

--
-- Indexen voor tabel `commentaar`
--
ALTER TABLE `commentaar`
  ADD PRIMARY KEY (`commentaar_id`),
  ADD KEY `presentie_id` (`presentie_id`);

--
-- Indexen voor tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD PRIMARY KEY (`gebruiker_id`),
  ADD UNIQUE KEY `gebruikernaam` (`gebruikernaam`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexen voor tabel `presentie`
--
ALTER TABLE `presentie`
  ADD PRIMARY KEY (`presentie_id`),
  ADD KEY `vergader_id` (`vergader_id`);

--
-- Indexen voor tabel `ressort`
--
ALTER TABLE `ressort`
  ADD PRIMARY KEY (`ressort_id`);

--
-- Indexen voor tabel `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexen voor tabel `vergadering`
--
ALTER TABLE `vergadering`
  ADD PRIMARY KEY (`vergader_id`),
  ADD KEY `ressort_id` (`ressort_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `bericht`
--
ALTER TABLE `bericht`
  MODIFY `bericht_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `commentaar`
--
ALTER TABLE `commentaar`
  MODIFY `commentaar_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `gebruiker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `presentie`
--
ALTER TABLE `presentie`
  MODIFY `presentie_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `ressort`
--
ALTER TABLE `ressort`
  MODIFY `ressort_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT voor een tabel `type`
--
ALTER TABLE `type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `vergadering`
--
ALTER TABLE `vergadering`
  MODIFY `vergader_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `bericht`
--
ALTER TABLE `bericht`
  ADD CONSTRAINT `bericht_ibfk_1` FOREIGN KEY (`gebruiker_id`) REFERENCES `gebruikers` (`gebruiker_id`);

--
-- Beperkingen voor tabel `commentaar`
--
ALTER TABLE `commentaar`
  ADD CONSTRAINT `commentaar_ibfk_2` FOREIGN KEY (`presentie_id`) REFERENCES `presentie` (`presentie_id`);

--
-- Beperkingen voor tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD CONSTRAINT `gebruikers_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `type` (`type_id`);

--
-- Beperkingen voor tabel `presentie`
--
ALTER TABLE `presentie`
  ADD CONSTRAINT `presentie_ibfk_1` FOREIGN KEY (`vergader_id`) REFERENCES `vergadering` (`vergader_id`);

--
-- Beperkingen voor tabel `vergadering`
--
ALTER TABLE `vergadering`
  ADD CONSTRAINT `vergadering_ibfk_1` FOREIGN KEY (`ressort_id`) REFERENCES `ressort` (`ressort_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
