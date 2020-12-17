var createUser = (req, res) => {
  var { username, password } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      var dbInstance = req.app.get("db");
      dbInstance.create_user([username, hash]).then((result) => {
        let user = result[0];
        console.log(user);
        res.json(user);
      });
    });
  });
};

var login = (req, res) => {
  var { username, password } = req.body;
  var dbInstance = req.app.get("db");
  dbInstance.get_user([username]).then((result) => {
    var user = result[0];
    if (bcrypt.compareSync(password, user.hash)) {
      res.status(200).json(user);
    } else {
      res.status(403).json({
        not: "authorized",
      });
    }
  });
};
let getDonations = (req, res) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .read_posts()
    .then((posts) => res.status(200).send(posts))
    .catch((err) => {
      res.status(500).send({
        errorMessage:
          "Oops! Something went wrong. Our engineers have been informed!",
      });
      console.log(err);
    });
};

module.exports = {
  createUser,
  login
};
