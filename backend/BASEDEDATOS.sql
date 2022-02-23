-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 23-02-2022 a las 22:11:43
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `transportesmartes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(6, 'Mejoras en los entornos de estaciones', 'se realizarán obras que contribuyen a la conservación de toda la infraestructura ferroviaria que forme parte del patrimonio histórico y cultural de la comunidad.', 'Los existentes serán mejorados con intervenciones como parquización, zonas de juegos, puntos aeróbicos, senderos, etc. tanto para actividades recreativas como de valoración paisajística.', 'wu34sg4wsgq1boydzzwq'),
(7, 'Cuáles son las 10 empresas que recibieron más dólares para comprar aviones y helicópteros en los últimos dos años', 'Los datos fueron aportados por el Banco Central y la ANAC. La Justicia investiga si hubo sobrefacturación en algunas de esas operaciones', 'Los investigadores posaron su mirada sobre los Gulfstream por los montos declarados. El primero, modelo Aerospace GV, habría costado USD 9.435.000 aunque algunos reportes privados indican que su precio real estaba cerca de los USD 7 millones. El segundo, modelo Aerospace G-IV, se pagó USD 7.230.000. Los registros de la Administración Nacional de Aviación Civil (ANAC) indican que se inscribió en octubre de 2020 con la matrícula LV-JQW. Según una empresa internacional de tasaciones, esa aeronave podía comprarse en el mercado por 5,5 millones, aunque los valores de los aviones siempre son relativos.', 'bxsy90koznnkurlxaty0'),
(8, 'titulo', 'subtitulo', 'cuerpo', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `user`, `password`) VALUES
(1, 'lucas', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
