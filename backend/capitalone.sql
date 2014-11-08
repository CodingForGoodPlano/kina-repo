-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 08, 2014 at 11:58 PM
-- Server version: 5.5.32
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `capitalone`
--
CREATE DATABASE IF NOT EXISTS `capitalone` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `capitalone`;

-- --------------------------------------------------------

--
-- Table structure for table `loan`
--

CREATE TABLE IF NOT EXISTS `loan` (
  `Type` text NOT NULL,
  `Interest` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loan`
--

INSERT INTO `loan` (`Type`, `Interest`) VALUES
('Unsubsidized', 4.66),
('Subsidized', 4.66),
('Direct Plus', 7.21);

-- --------------------------------------------------------

--
-- Table structure for table `major`
--

CREATE TABLE IF NOT EXISTS `major` (
  `Major` text NOT NULL,
  `Starting` int(10) NOT NULL,
  `Mid` int(10) NOT NULL,
  `Monthly` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `major`
--

INSERT INTO `major` (`Major`, `Starting`, `Mid`, `Monthly`) VALUES
('Accounting', 45300, 74900, 3775),
('Art', 36100, 57100, 3008.3333),
('Biology', 40200, 70800, 3350),
('Business Administration', 43500, 71000, 3625),
('Computer Science', 59800, 102000, 4983.3333),
('Economics', 50100, 96700, 4175),
('Electrical Engineering', 64300, 106000, 5358.3333),
('Mathematics', 49400, 88000, 4116.6667),
('Liberal Arts', 36600, 60500, 3050),
('Petroleum Engineering', 103000, 160000, 8583.3333);

-- --------------------------------------------------------

--
-- Table structure for table `schoolinfo`
--

CREATE TABLE IF NOT EXISTS `schoolinfo` (
  `University` text NOT NULL,
  `Total` int(10) NOT NULL,
  `TenLoan` int(10) NOT NULL,
  `Monthly` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schoolinfo`
--

INSERT INTO `schoolinfo` (`University`, `Total`, `TenLoan`, `Monthly`) VALUES
('UTD', 97800, 12184, 1011),
('UTA', 101500, 127173, 1069.775),
('A&M', 88920, 111411, 928.425),
('SMU', 215900, 270509, 2254.242),
('Harvard', 218200, 273391, 2278.258),
('Stanford', 230100, 288301, 2402.508),
('UNT', 81590, 102227, 851.892),
('Rice', 194000, 243070, 2025.583),
('Texas Tech', 84570, 105961, 883.008),
('Texas State', 84470, 105836, 881.967);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
