exports.helloWorld = (req, res, next) => {
  res.send(
    '<h1>Welcome! Klik link api di bawah ini</h1> <br> <a href="/users">User</a> <a href="/admin">admin</a>'
  );
};
