exports.getUser = (req, res, next) => {
  res.send([
    {
      username: "Heru",
      jk: "male",
      typeuser: "1",
    },
    {
      username: "firdan",
      jk: "male",
      typeuser: "1",
    },
    {
      username: "wira",
      jk: "female",
      typeuser: "2",
    },
  ]);
};

exports.getAdmin = (req, res, next) => {
  res.send([
    {
      username: "admin1",
      jk: "female",
    },
    {
      username: "admin2",
      jk: "male",
    },
    {
      username: "admin3",
      jk: "female",
    },
  ]);
};
