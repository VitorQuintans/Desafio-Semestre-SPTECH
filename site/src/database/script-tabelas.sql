-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
create database simpsorama;
use simpsorama;

create table personagem(
idpersonagem int primary key auto_increment,
nome varchar(45)
);

create table usuario(
idusuario int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(50),
fkpersonagem int,
foreign key(fkpersonagem) references personagem(idpersonagem)
);

create table aviso(
idaviso int primary key auto_increment,
titulo varchar(45),
descricao varchar(250),
fkusuario int,
foreign key(fkusuario) references usuario(idusuario)
);

insert into personagem values
(null , 'Bart'),
(null , 'Lisa'),
(null , 'Maggie'),
(null , 'Marge'),
(null , 'Homer');



/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE DATABASE simpsorama;
GO
USE simpsorama;
GO

CREATE TABLE personagem (
  idpersonagem INT PRIMARY KEY IDENTITY(1,1),
  nome VARCHAR(45)
);

CREATE TABLE usuario (
  id INT PRIMARY KEY IDENTITY(1,1),
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(50),
  fkpersonagem INT,
  FOREIGN KEY (fkpersonagem) REFERENCES personagem(idpersonagem)
);

CREATE TABLE aviso (
  idaviso INT PRIMARY KEY IDENTITY(1,1),
  titulo VARCHAR(45),
  descricao VARCHAR(250),
  fkusuario INT,
  FOREIGN KEY (fkusuario) REFERENCES usuario(id)
);

INSERT INTO personagem (nome) VALUES
  ('Bart'),
  ('Lisa'),
  ('Maggie'),
  ('Marge'),
  ('Homer');
/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
