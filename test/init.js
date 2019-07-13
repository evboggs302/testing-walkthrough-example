const massive = require("massive");
require("dotenv").config();
const { TEST_CONNECTION_STRING } = process.env;

let dbPromise;

module.exports = {
  initDb() {
    dbPromise = dbPromise || massive(TEST_CONNECTION_STRING);
    return dbPromise;
  }
};
