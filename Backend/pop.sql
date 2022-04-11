-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: vaccineregistration
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--
use heroku_d840c52ac2b6f87;

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `adminid` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(100) DEFAULT NULL,
  `zipcode` varchar(100) DEFAULT NULL,
  `contact_no` varchar(100) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(15) NOT NULL,
  `username` varchar(20) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`adminid`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Rajkot','115233','9811154155','bansi.joshi@gmail.com','Bansi Joshi','bansi123','b_joshi',0),(2,'Hyderabad','11785','7854112896','suhas.bagothula@gmail.com','Suhas Bagothula','suhas456','s_bagothula',0),(3,'Hyderabad','11785','9854129861','waseem.akram@gmail.com','Waseem Akram','waseem789','w_akram',0),(4,'Mumbai','145987','9995476321','kartik.bauskar@gmail.com','Kartik Bauskar','kartik567','k_bauskar',0),(5,'Rohtak','124001','9992011459','himanimalhotra@gmail.com','Himani Malhotra','himani178','h_malhotra',0),(6,'Hyderabad','11785','7845559732','srivalli@gmail.com','Srivalli','srivalli234','srivalli',0);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `inventoryid` bigint NOT NULL AUTO_INCREMENT,
  `purchase_date` date NOT NULL,
  `no_of_vac` bigint NOT NULL,
  `type_of_vac` varchar(100) NOT NULL,
  PRIMARY KEY (`inventoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (1,'2022-03-22',10,'MRNA'),(2,'2022-04-09',10,'Viral Vector'),(3,'2022-05-07',10,'MRNA'),(4,'2022-06-14',10,'Viral Vector'),(5,'2022-03-05',10,'MRNA');
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(100) DEFAULT NULL,
  `zipcode` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `contact_no` varchar(100) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(15) NOT NULL,
  `username` varchar(20) NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Rajkot','115233',NULL,'9811154155','suhani.joshi@gmail.com','Suhani Joshi','suhani123','s_joshi',1),(2,'Hyderabad','11785',NULL,'7854112896','Rihansh.bagothula@gmail.com','Rihansh Bagothula','rihansh456','r_bagothula',0),(3,'Hyderabad','11785',NULL,'9854129861','Aseem.akram@gmail.com','Aseem Akram','aseem789','a_akram',0),(4,'Mumbai','145987',NULL,'9995476321','Chandni.bauskar@gmail.com','Chandni Bauskar','chandni567','c_bauskar',0),(5,'Rohtak','124001',NULL,'9992011459','siddharthmalhotra@gmail.com','Siddharth Malhotra','siddharth178','s_malhotra',0),(6,'Hyderabad','11785',NULL,'7845559732','rohan@gmail.com','Rohan','Rohan234','rohan',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vac_center`
--

DROP TABLE IF EXISTS `vac_center`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vac_center` (
  `vac_centerid` bigint NOT NULL AUTO_INCREMENT,
  `opentime` time NOT NULL,
  `closetime` time NOT NULL,
  `center_address` varchar(100) NOT NULL,
  `vac_count` bigint NOT NULL,
  `inventoryid` bigint NOT NULL,
  PRIMARY KEY (`vac_centerid`),
  KEY `inventoryid` (`inventoryid`),
  CONSTRAINT `vac_center_ibfk_1` FOREIGN KEY (`inventoryid`) REFERENCES `inventory` (`inventoryid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vac_center`
--

LOCK TABLES `vac_center` WRITE;
/*!40000 ALTER TABLE `vac_center` DISABLE KEYS */;
INSERT INTO `vac_center` VALUES (25,'09:30:00','06:30:00','Indore',100,3),(32,'09:30:00','06:30:00','Bangalore',100,5),(47,'09:30:00','06:30:00','Rohtak',100,2),(64,'09:30:00','06:30:00','Mumbai',100,4),(95,'09:30:00','06:30:00','Hyderabad',100,1);
/*!40000 ALTER TABLE `vac_center` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vac_reg`
--

DROP TABLE IF EXISTS `vac_reg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vac_reg` (
  `vac_regid` bigint NOT NULL AUTO_INCREMENT,
  `registration_date` date NOT NULL,
  `registration_time` time NOT NULL,
  `clinic_address` varchar(100) DEFAULT NULL,
  `dose_number` bigint NOT NULL,
  `userid` bigint NOT NULL,
  `vac_centerid` bigint NOT NULL,
  PRIMARY KEY (`vac_regid`),
  KEY `userid` (`userid`),
  CONSTRAINT `vac_reg_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vac_reg`
--

LOCK TABLES `vac_reg` WRITE;
/*!40000 ALTER TABLE `vac_reg` DISABLE KEYS */;
INSERT INTO `vac_reg` VALUES (1,'2022-03-22','10:30:00','Mumbai',1,2,95),(2,'2022-03-09','09:30:00','Rohtak',2,5,47),(3,'2022-04-18','11:30:00','Indore',1,3,25),(4,'2022-05-22','12:30:00','Hyderabad',4,2,64),(5,'2022-04-04','10:00:00','Bangalore',1,2,32);
/*!40000 ALTER TABLE `vac_reg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vac_sec`
--

DROP TABLE IF EXISTS `vac_sec`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vac_sec` (
  `vac_secid` bigint NOT NULL AUTO_INCREMENT,
  `vac_name` varchar(100) DEFAULT NULL,
  `availability` tinyint(1) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `vac_type` varchar(100) DEFAULT NULL,
  `userid` bigint NOT NULL,
  `vac_regid` bigint NOT NULL,
  `inventoryid` bigint NOT NULL,
  PRIMARY KEY (`vac_secid`),
  KEY `userid` (`userid`),
  KEY `inventoryid` (`inventoryid`),
  KEY `vac_regid` (`vac_regid`),
  CONSTRAINT `vac_sec_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE,
  CONSTRAINT `vac_sec_ibfk_2` FOREIGN KEY (`inventoryid`) REFERENCES `inventory` (`inventoryid`) ON DELETE CASCADE,
  CONSTRAINT `vac_sec_ibfk_3` FOREIGN KEY (`vac_regid`) REFERENCES `vac_reg` (`vac_regid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vac_sec`
--

LOCK TABLES `vac_sec` WRITE;
/*!40000 ALTER TABLE `vac_sec` DISABLE KEYS */;
INSERT INTO `vac_sec` VALUES (1,'MRNA',1,'For people aged 5 years and above','viral drug',1,3,1),(2,'Viral Vector',1,'For people aged 18 years and above','viral drug',2,5,2),(3,'MRNA',1,'For people aged 5 years and above','viral drug',1,2,3),(4,'Viral Vector',1,'For people aged 18 years and above','viral drug',1,1,4),(5,'MRNA',1,'For people aged 5 years and above','viral drug',1,5,5);
/*!40000 ALTER TABLE `vac_sec` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-31 19:46:03
