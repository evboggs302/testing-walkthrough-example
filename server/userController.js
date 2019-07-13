const bcrypt = require("bcrypt");
const saltRounds = 12;

module.exports = {
  register: (req, res, next) => {
    const { full_name, email, password } = req.body;
    const db = req.app.get("db");
    db.check_existing_users(email).then(found => {
      if (found.length) {
        res.status(500).send("Email already exists!");
      } else {
        bcrypt.genSalt(saltRounds).then(salt => {
          bcrypt.hash(password, salt).then(hashedPassword => {
            db.register([full_name, email, hashedPassword]).then(
              createdUser => {
                (req.session.user = createdUser[0]),
                  res.status(200).send(req.session.user);
              }
            );
          });
        });
      }
    });
  }
};
