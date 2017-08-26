CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured BOOL DEFAULT 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
