const db = require("./db");
const app = require("./app");
const request= require("supertest");

let song_url;
let song_difficulty;

beforeEach(async ()=>{
    const result= await db.query(`INSERT INTO SONGS
    VALUES('KA0vaJuiSy0','impossible','videogame','Castle Corridor','Castlevania: Aria of Sorrow',NULL)
    RETURNING url,difficulty`);
    song_url=result.rows[0].url;
    song_difficulty=result.rows[0].difficulty;
});

afterEach(async ()=>{
    await db.query(`DELETE FROM SONGS`);
});

afterAll(async ()=>{
    await db.end();
});