-- Active: 1676558409027@@127.0.0.1@3306


--criando as seguintes tabelas: users, posts e likes_dislikes
CREATE TABLE users (
  id TEXT PK UNIQUE NOT NULL ,
  name TEXT  NOT NULL,
  email TEXT  NOT  NULL,
  password TEXT NOT  NULL,
  role TEXT NOT NULL ,
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
     FOREIGN KEY (creator_id) REFERENCES users (id) ON DELETE CASCADE

);
DROP TABLE posts;

CREATE TABLE likes_dislikes (
  user_id TEXT NOT  NULL,
  post_id TEXT NOT  NULL,
  like INTEGER NOT  NULL,
   FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
);

DROP TABLE likes_dislikes;

--populando as seguintes tabelas: users, posts e likes_dislikes


INSERT INTO users(id, name, email, password, role )
VALUES("a01", "Gleice", "gleiscylima@gmail.com", "gleicea123", "ADMIN"),
("a02", "Pedro", "pedrolima@gmail.com", "pedroa123", "NORMAL"),
("a03", "Layane", "layanelima@gmail.com", "layane123", "NORMAL"),
("a04", "Bruna", "brunalima@gmail.com", "gleicea123", "NORMAL"), 
("a05", "Ricardo", "ricardolima@gmail.com", "ricardoa123", "NORMAL");
INSERT INTO users(id, name, email, password, role )
VALUES

("a06", "tathy", "tathylima@gmail.com", "tathya123", "NORMAL");



INSERT INTO posts(id, creator_id,  content, likes, dislikes  )
VALUES("p01", "a01", "Foto na praia", 300, 2 ),
("p02", "a02", "Foto do céu", 100, 5 ),
("p03", "a03", "Foto da cachoeira", 800, 0 ),
("p04", "a04", "Foto do por do sol", 500, 0 ),
("p05", "a05", "Foto do mar", 700 , 1 );

DROP TABLE posts;

INSERT INTO likes_dislikes( user_id,  post_id,  like  )
VALUES("a01", "p01", 300 ),
("a02", "p01", 101 ),
("a03", "p01", 800 ),
("a04", "p04", 505 ),
("a05", "p05", 700 )
;

DROP TABLE likes_dislikes;
--verificando as tabelas
SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM likes_dislikes;

DROP TABLE posts;


