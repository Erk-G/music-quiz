// require("dotenv").config();
// const SECRET_KEY = process.env.SECRET_KEY || "something";

// const PORT = +process.env.PORT || 3001;

// function getDatabaseUri() {
//   return (process.env.NODE_ENV === "test")
//       ? "music_test"
//       : process.env.DATABASE_URL || "music";
// }

// module.exports = {
//     SECRET_KEY,
//     PORT,
//     getDatabaseUri,
//   };


require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY || "5674856578475783292";

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "postgres://ncqfimmj:HslnYUpzmqRxyCLer2IMYhdvNQZJo7n5@berry.db.elephantsql.com/ncqfimmj"
      // ? "music_test"
      //: process.env.DATABASE_URL || "music";
      : process.env.DATABASE_URL || "postgres://ncqfimmj:HslnYUpzmqRxyCLer2IMYhdvNQZJo7n5@berry.db.elephantsql.com/ncqfimmj";
}

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
  };