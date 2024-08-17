const path = require('path');
const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", { usernames });
}

async function createUsernameGet(req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'new.html'));
}

async function createUsernamePost(req, res) {
  const username = req.body.username;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsernamesGet(req, res) {
    const foundUsers = await db.searchUsername(req.query.search);
    console.log(foundUsers);
    res.render('search', { users: foundUsers });
}

async function deleteUsernamesPost(req, res) {
    await db.deleteAllUsernames();
    res.redirect('/');
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernamesGet,
  deleteUsernamesPost
};
