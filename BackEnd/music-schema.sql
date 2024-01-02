DROP TABLE IF EXISTS songs;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    difficulty text NOT NULL,
    name text NOT NULL,
    url text NOT NULL,
    target text
)
