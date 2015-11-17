var mongoose = require('mongoose')
  , Todo = mongoose.model('Todo', {
            text : String
           ,done : Boolean
           })
module.exports = Todo
