create database MlClone;
use MlClone;

create table login(
	email varchar(250) not null,
    password varchar(50) not null,
    primary key(email, password)
);

INSERT INTO login (email, password) VALUES
	("pepito@gmail.com", "123"),
    ("pepita@unahur.edu.ar","123");