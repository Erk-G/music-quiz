const db=require("../db");

class Song{
    /**
     * Given a difficulty and genre return an array of songs of that difficulty
     * =>{[{url,difficulty,genre,song_title,song_origin,player_targets}...]}
     */
    static async getSongs(genre,difficulty){
        const songRes=await db.query(
            `SELECT url,
                    difficulty,
                    genre,
                    song_title,
                    song_origin,
                    player_targets
                    FROM songs
                    WHERE genre=$1 AND difficulty=$2`,[genre,difficulty]);
        return songRes.rows;
    }


    /**
     * Putting a new song into the database
     * INPUT:
     * {url,difficulty,genre,song_title,song_origin,player_targets}
     * => {url,difficulty,genre,song_title,song_origin,player_targets}
     */

    static async newSong(data){
        const songRes=await db.query(
            `INSERT INTO songs(
                url,
                difficulty,
                genre,
                song_title,
                song_origin,
                player_targets)
                VALUES ($1,$2,$3,$4,$5,$6)
                RETURNING url,
                          difficulty,
                          genre,
                          song_title,
                          song_origin,
                          player_targets`,
            [
                data.url,
                data.difficulty,
                data.genre,
                data.song_title,
                data.song_origin,
                data.player_targets
            ]
        );

        return songRes.rows[0];
    }
}