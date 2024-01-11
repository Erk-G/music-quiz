require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY || "something";

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "music_test"
      : process.env.DATABASE_URL || "music";
}

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
  };