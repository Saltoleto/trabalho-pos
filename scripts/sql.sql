-- necessario para autenticacao local com o VsCode
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'
CREATE DATABASE agenda;

CREATE TABLE IF NOT EXISTS contato (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL    
)  ENGINE=INNODB;


ALTER TABLE tablename AUTO_INCREMENT = 1

insert into contato(nome,endereco,telefone,email) VALUES ('Fernando Saltoleto','Rual Manoel Ribas 50','(44) 96734-6627','fernandosaltoleto@hotmail.com');
insert into contato(nome,endereco,telefone,email) VALUES ('Pedro da Silva','Rual Itália 50','(44) 97734-6627','pedro@hotmail.com');
insert into contato(nome,endereco,telefone,email) VALUES ('Maria dos Santos','Rual Estados Unidos 50','(44) 98734-6627','maria@hotmail.com');
insert into contato(nome,endereco,telefone,email) VALUES ('José de Freitas','Rual Inglaterra 50','(44) 69734-6627','jose@hotmail.com');
insert into contato(nome,endereco,telefone,email) VALUES ('Carlos Pedroso','Rual México 50','(44) 79734-6627','carlos@hotmail.com');
insert into contato(nome,endereco,telefone,email) VALUES ('Manoel dos Santos','Rual Espanha 50','(44) 89734-6627','manoel@hotmail.com');
