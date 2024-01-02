require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY || "5543243145";

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "jobly_test"
      //: process.env.DATABASE_URL || "jobly";
      : process.env.DATABASE_URL || "postgres://ncqfimmj:HslnYUpzmqRxyCLer2IMYhdvNQZJo7n5@berry.db.elephantsql.com/ncqfimmj";
}

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
  };