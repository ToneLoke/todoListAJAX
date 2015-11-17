var express    = require('express')
  , app        = express()
  , logger     = require('morgan')
  , bodyParser = require('body-parser)
  , mongoose   = require('mongoose')
  , apiRoutes  = require('./routes/apiRoutes.js')
  , methodOver = require('method-override')

app.use(express.static(__dirname + '/public'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended':'true'}))
mongoose.connect('mongodb://localhost/todo', function(){
  console.log('mongodb connected')
})
app.use('/api',apiRoutes)
app.listen(port,function(port){
  console.log('api server running on) ', port)
})
