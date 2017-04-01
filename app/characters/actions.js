const Character = require('./model');

const create = (req, res) => {
  const account_id = req.user.id;
  const { name } = req.body;
  if (!name) {
    return res.redirect('/character_list');
  }
  Character.create(account_id, name, (error, character) => {
    if (error) {
      console.log(error);
    }
    res.redirect('/character_list');
  });
};

module.exports = { create }
