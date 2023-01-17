-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Jan 17. 17:03
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `lego`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `legoitems`
--

CREATE TABLE `legoitems` (
  `id` int(4) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `theme` varchar(50) NOT NULL,
  `serial` varchar(10) NOT NULL,
  `year` int(4) NOT NULL,
  `pieces` int(6) NOT NULL,
  `price` int(6) NOT NULL,
  `state` varchar(20) NOT NULL,
  `imgUrl` varchar(100) NOT NULL,
  `imgAlt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `legoitems`
--

INSERT INTO `legoitems` (`id`, `name`, `category`, `theme`, `serial`, `year`, `pieces`, `price`, `state`, `imgUrl`, `imgAlt`) VALUES
(1, 'App-Controlled Cat D11 Bulldozer', 'Technic', '', '42131', 2021, 3854, 500, 'new', '/img/lego_42131.jpg', 'LEGO App-Controlled Cat D11 Bulldozer'),
(2, 'Crocodile Locomotive', 'Creator', 'Expert', '10277', 2020, 1271, 100, 'new', '/img/lego_10277.jpg', 'LEGO Crocodile Locomotive'),
(3, 'Pirate Ship', 'Creator', '3in1', '31109', 2020, 1264, 130, 'new', '/img/lego_31109.jpg', 'LEGO Pirate Ship'),
(4, 'Forbidden Cove', 'System', 'Islanders', '6264', 1994, 214, 80, 'used', '/img/lego_6264.jpg', 'LEGO Pirate Cave'),
(5, 'Alien Avenger', 'System', '', '6975', 1997, 369, 85, 'used', '/img/lego_6975.jpg', 'Lego UFO'),
(6, 'Super Car', 'Technic', '', '8880', 1994, 1343, 160, 'used', '/img/lego_8880.jpg', 'LEGO Super Car'),
(7, 'Hogwarts Express Collector\'s Editon', '', 'Harry Potter', '76405', 2022, 5129, 500, 'new', '/img/lego_76405.jpg', 'Hogwarts Express Collector\'s Editon'),
(8, 'Medieval Castle', 'Creator', '3in1', '31120', 2021, 1426, 100, 'new', '/img/lego_31120.jpg', 'LEGO Medieval Castle'),
(9, 'McLaren Formula 1 Race Car', 'Technic', '', '42141', 2022, 1434, 200, 'new', '/img/lego_42141.jpg', 'LEGO McLaren Formula 1 Race Car'),
(10, 'Poolside Paradise', 'System', 'Town / Paradisa', '6416', 1992, 229, 62, 'used', '/img/lego_6416.jpg', 'LEGO Poolside Paradise'),
(11, 'Town Center', 'City', '', '60292', 2021, 790, 100, 'new', '/img/lego_60292.jpg', 'LEGO City Town Center'),
(12, 'Skull Island', 'System', 'Pirates', '6279', 1995, 378, 100, 'used', '/img/lego_6279.jpg', 'LEGO Pirates\' Skull Island'),
(13, 'Train Station', 'City', 'Trains', '60335', 2022, 907, 80, 'new', '/img/lego_60335.jpg', 'LEGO City Train Station'),
(14, 'Titanic', 'Icons', '', '10294', 2021, 9090, 680, 'new', '/img/lego_10294.jpg', 'LEGO Icons Titanic ship'),
(15, 'Big Ben', 'Creator Expert', 'Buildings', '10253', 2016, 4163, 220, 'new', '/img/lego_10253.jpg', 'LEGO Creator Expert Big Ben'),
(16, 'Sheriff\'s Lock Up', 'Western', 'Cowboys', '6755', 1996, 176, 55, 'used', '/img/lego_6755.jpg', 'LEGO Western Sheriff\'s Lock Up');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `address`, `password`) VALUES
(1, 'John Doe', 'johndoe86', 'jd86@gmail.com', 'NYC 8th Street 8', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c8'),
(2, 'Kakukk Marci', 'kmarci86', 'kmarci86@email.hu', 'asdada', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c8');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `legoitems`
--
ALTER TABLE `legoitems`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `legoitems`
--
ALTER TABLE `legoitems`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
