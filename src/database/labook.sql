-- Active: 1675429441295@@127.0.0.1@3306



--criando as seguintes tabelas: users, posts e likes_dislikes
CREATE TABLE users (
  id TEXT PK UNIQUE NOT  NULL,
  name TEXT NOT  NULL,
  email TEXT  NOT  NULL,
  password TEXT NOT  NULL,
  role TEXT NOT  NULL,
  created_at TEXT DEFAULT (DATETIME('now')) NOT NULL
);
DROP TABLE users;

CREATE TABLE posts (
  id TEXT PK UNIQUE NOT  NULL,
  creator_id TEXT NOT  NULL,
  content TEXT NOT  NULL,
  likes INTEGER NOT  NULL,
  dislikes INTEGER NOT  NULL,
  created_at TEXT DEFAULT (DATETIME('now')) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME('now')) NOT NULL,
     FOREIGN KEY (creator_id) REFERENCES users (id)

);
DROP TABLE posts;

CREATE TABLE likes_dislikes (
  user_id TEXT NOT  NULL,
  post_id TEXT NOT  NULL,
  like INTEGER NOT  NULL
   FOREIGN KEY (user_id) REFERENCES users (id)
    FOREIGN KEY (post_id) REFERENCES posts (id)
);



--populando as seguintes tabelas: users, posts e likes_dislikes


INSERT INTO users(id, name, email, password, role )
VALUES("a01", "Gleice", "gleiscylima@gmail.com", "gleicea123", "usuario"),
("a02", "Pedro", "pedrolima@gmail.com", "pedroa123", "usuario"),
("a03", "Layane", "layanelima@gmail.com", "layane123", "usuario"),
("a04", "Bruna", "brunalima@gmail.com", "gleicea123", "usuario"), 
("a05", "Ricardo", "ricardolima@gmail.com", "ricardoa123", "usuario");


INSERT INTO posts(id, creator_id,  content, likes, dislikes  )
VALUES("p01", "a01", "Foto na praia", "300", "2" ),
("p02", "a02", "Foto do céu", "100", "5" ),
("p03", "a03", "Foto da cachoeira", "800", "0" ),
("p04", "a04", "Foto do por do sol", "500", "0" ),
("p05", "a05", "Foto do mar", "700", "1" );


INSERT INTO likes_dislikes( user_id,  post_id,  like  )
VALUES("a01", "p01", "" )


--verificando as tabelas
SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM likes_dislikes;


