const { sign } = require('jsonwebtoken');
const { authSecretKey, authTokenExpiration } = require('../config');

const signIn = (req, res) => {

  const
    { username, password } = req.body,
    query = `SELECT * FROM users WHERE username = ? AND password = ?`
  ;

  let errMsg;

  db.run(query, [username, password], function(err, user) {

    if (err)
      errMsg = err.message
    else if (!user)
      errMsg = '¡Usuario y/o contraseña inválidos!'
    ;

    if (errMsg)
      return res.status(400).json({ error: errMsg })
    ;

    const token = sign(
      { id: user.id },
      authSecretKey,
      { expiresIn: authTokenExpiration }
    );

    res.json({ token })

  })

}

const signUp = (req, res) => {

  const
    {
      names,
      surnames,
      phone,
      email,
      username,
      password
    } = req.body,
    query = `
      INSERT INTO users (
        names,
        surnames,
        phone,
        email,
        username,
        password
      ) VALUES (?, ?, ?, ?, ?, ?)
    `
  ;

  db.run(
    query,
    [names, surnames, phone, email, username, password],
    function(err) {

      if (err)
        return res.status(400).json({ error: err.message })
      ;

      const token = sign(
        { id: this.lastID },
        authSecretKey,
        { expiresIn: authTokenExpiration }
      );

      res.json({ token })

    }
  )

}

module.exports = { signIn, signUp }