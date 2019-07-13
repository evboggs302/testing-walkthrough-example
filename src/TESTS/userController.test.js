const userController = require("../../server/userController");
const testInit = require("../../test/init");
const sinon = require("sinon");
const sandbox = sinon.createSandbox();

describe("integration tests", () => {
  let db;
  function clearDatabase() {
    return db.query("DELETE FROM users");
  }

  beforeAll(() => {
    sandbox.stub(console, "error");
    return testInit.initDb().then(database => {
      db = database;
    });
  }),
    beforeEach(() => {
      return clearDatabase();
    }),
    afterAll(() => {
      sandbox.restore();
    });
  describe("register new user", () => {
    it("SUCCESSFUL new user", done => {
      const req = {
        app: {
          get: () => db
        },
        body: {
          full_name: "Evan Boggs",
          email: "evan@evan.com",
          password: "eboggs123456789"
        },
        session: {
          user: {}
        }
      };
      const res = {
        send: function(data) {
          expect(data).toMatchObject({
            full_name: "Evan Boggs",
            email: "evan@evan.com"
          });
          done();
        },
        status(num) {
          expect(num).toBe(200);
          return this;
        }
      };
      userController.register(req, res);
    });

    it("ERROR alresdy exists", done => {
      const insertDumbyData = `INSERT INTO users(full_name, email, password)
        values
        ('Bobby Joe', 'joe@joe.com', 'joejoejoe');`;
      const req = {
        app: {
          get: () => db
        },
        body: {
          full_name: "Evan Boggs",
          email: "joe@joe.com",
          password: "eboggs123456789"
        }
      };
      const res = {
        send: function(data) {
          expect(data).toEqual("Email already exists!");
          done();
        },
        status(num) {
          expect(num).toBe(500);
          return this;
        }
      };
      db.query(insertDumbyData).then(() => userController.register(req, res));
    });
  });
});
