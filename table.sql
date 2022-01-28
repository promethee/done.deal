CREATE TABLE IF NOT EXISTS "users" (
	"id" serial NOT NULL PRIMARY KEY,
  "title" VARCHAR(100) NOT NULL,
  "firstname" VARCHAR(100) NOT NULL,
  "lastname" VARCHAR(100) NOT NULL,
  "thumbnail" VARCHAR(100) NOT NULL,
  "picture" VARCHAR(100) NOT NULL
);