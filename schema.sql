-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema movies_management
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema movies_management
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movies_management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `movies_management` ;

-- -----------------------------------------------------
-- Table `movies_management`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies_management`.`movies` (
  `idmovies` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `Description` VARCHAR(255) NOT NULL,
  `awards` INT NOT NULL,
  `actors` VARCHAR(45) NOT NULL,
  `year` INT NOT NULL,
  PRIMARY KEY (`idmovies`),
  UNIQUE INDEX `idmovies_UNIQUE` (`idmovies` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
