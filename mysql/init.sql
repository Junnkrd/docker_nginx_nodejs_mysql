CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;

CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO people (name) SELECT 'Jeverton' WHERE NOT EXISTS (SELECT * FROM people WHERE name='Jeverton');
INSERT INTO people (name) SELECT 'Jeverton Teste' WHERE NOT EXISTS (SELECT * FROM people WHERE name='Jeverton Teste');
