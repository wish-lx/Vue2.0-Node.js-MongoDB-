let user = require('./User')
console.log(`userName:${user.userName}`)
console.log(`${user.sayHello()}`)
let http = require('http')
let url = require('url')
let util = require('util')
let server = http.createServer((req, res) => {
   res.statusCode = 200
   res.setHeader('content-Type','text/plain')
   res.end(util.inspect(url.parse('http://127.0.0.1:3000/demo.html?a=123#234')))
})
server.listen(3000,'127.0.0.1', () => {
  console.log('服务器已经运行，请打开http://127.0.0.1:3000来访问')
})
// url.parse() 字符串转成对象