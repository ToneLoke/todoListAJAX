var Todo = require('../models/todo.js')

function index(req, res){
  Todo.find({},function(err,todos){
    if(err) res.send(err)
    res.json(todos)
  })
}
module.exports = {
  allTodos : index
}
