const Character = require('./model');

const create = (req, res) => {
  const accountId = req.user.id;
  const { name, gender } = req.body;
  if (!name || !gender) {
    return res.redirect('/account');
  }
  Character.create(accountId, name, gender, (error, character) => {
    if (error) {
      console.log(error);
    }
    res.redirect('/account');
  });
};

module.exports = { create }
