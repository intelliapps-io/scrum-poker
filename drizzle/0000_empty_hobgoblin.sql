CREATE TABLE IF NOT EXISTS "user" (
	"uuid" uuid PRIMARY KEY NOT NULL,
	"first_name" varchar(256),
	"last_name" varchar(256),
	"email" varchar(256)
);
