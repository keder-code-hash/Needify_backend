const express = require('express');
const usersRouter = express.Router();

usersRouter.
  route('/')
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(deleteUser)

function getUser(req, res) {
  res.send(users)
}
function postUser(req, res) {
  console.log(req.body);
  users = req.body
  res.json({
    message: "data recived",
    user: req.body
  });
}
function updateUser(req, res) {
  console.log(req.body);
  let dataToBeUpdated = req.body;
  for (key in dataToBeUpdated) {
    users[key] = dataToBeUpdated[key]
  }
  res.json({
    message: " data updated successfully",

  })
}
function deleteUser(req, res) {
  console.log(req.body)
  users = {}
  res.json({
    message: "data deleted"
  })
}

module.exports = usersRouter;
