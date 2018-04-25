let user = require('./User')
console.log(`userName:${user.userName}`)
console.log(`${user.sayHello()}`)
let http = require('http')
let server = http.createServer((req,res) => {
   res.statusCode = 200
   res.setHeader('content-Type','text/plain')
   res.end('Hello,node.js')
})
server.listen(3000,'127.0.0.1', () => {
  console.log('服务器已经运行，请打开http://127.0.0.1:3000来访问')
})