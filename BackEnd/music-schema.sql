DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS genre;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    difficulty TEXT NOT NULL,
    genre TEXT NOT NULL,
    song_title TEXT NOT NULL,
    song_origin TEXT NOT NULL,
    url TEXT UNIQUE NOT NULL,
    player_targets TEXT
);
