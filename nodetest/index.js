// router 폴더 안 모듈화 시킨 파일 라우팅 
var express = require('express')
var application = express()
var http = require('http');
var port = process.env.PORT || 8080;
var server = http.createServer(application);
server.listen(port, function(){
 console.log('listening on ' + port);
});

var main = require('./router/main/main');
var login = require('./router/login/login');
router.use('/', main);
router.use('/seats', main);
router.use('/login', login);
module.exports = router;
const router = require('./router/main/main');
application.use(router)
