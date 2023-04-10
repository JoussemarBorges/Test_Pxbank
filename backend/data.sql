DROP DATABASE IF EXISTS pxbank_db;
CREATE DATABASE pxbank_db;

USE pxbank_db;

DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
  id int NOT NULL AUTO_INCREMENT,
  department_name varchar(255) NOT NULL,
  PRIMARY KEY (id)
) Engine=InnoDB;

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id int NOT NULL AUTO_INCREMENT,
  employee_name varchar(255) NOT NULL,
  cpf varchar(255) NOT NULL,
  wage decimal(7,2) NOT NULL,
  date_of_birth datetime NOT NULL,
  department_id int NOT NULL,
  PRIMARY KEY (id),
  KEY department_id (department_id),
  CONSTRAINT employees_ibfk_1 FOREIGN KEY (department_id) REFERENCES departments (id)
) ENGINE=InnoDB

