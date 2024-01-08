const db = require("./db");
const app = require("./app");
const request= require("supertest");

let song_genre;
let song_difficulty;

beforeEach(async ()=>{
    const result= await db.query(`INSERT INTO SONGS
    VALUES('KA0vaJuiSy0','impossible','videogame','Castle Corridor','Castlevania: Aria of Sorrow')
    RETURNING genre,difficulty`);
    song_genre=result.rows[0].genre;
    song_difficulty=result.rows[0].difficulty;
});

    describe("GET /:genre/:difficulty",()=>{
        test("If we get an array of songs", async ()=>{
            const response= await request(app).get(`/songs/${song_genre}/${song_difficulty}`);
            expect(response.body.songs).toStrictEqual([{
                "url": "KA0vaJuiSy0",
                "difficulty": "impossible",
                "genre": "videogame",
                "song_title": "Castle Corridor",
                "song_origin": "Castlevania: Aria of Sorrow",
                "player_targets": null
              }]);
        })
    })

    describe("POST /",()=>{
        test("If Post works", async ()=>{
            const response= await request(app).post(`/songs`).send({
                url:"cOWRNLaCMJg" ,
                difficulty: "easy",
                genre: "videogame",
                song_title:"Pallet Town Theme",
                song_origin:"Pokemon Red/Blue"
            });
            expect(response.statusCode).toBe(201);
        })
    })


afterEach(async ()=>{
    await db.query(`DELETE FROM SONGS`);
});

afterAll(async ()=>{
    await db.end();
});