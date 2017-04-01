const Account = require('./model');

const sign_in = (req, res) => {
  res.redirect('/account');
};

const sign_up = (req, res) => {
  const { account_name, email, password, password_confirmation } = req.body;
  if (!account_name || !email || !password || password !== password_confirmation) {
    return res.redirect('/sign_up');
  }
  Account.create(account_name, email, password, (error, account) => {
    if (error) {
      console.log(error);
      return res.redirect('/sign_up');
    }
    res.redirect('/account');
  });
};

module.exports = { sign_in, sign_up }
