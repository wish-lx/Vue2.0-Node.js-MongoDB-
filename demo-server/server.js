let http = require('http')
let util = require('util')
let url = require('url')
let fs = require('fs')
let server = http.createServer((req, res) => {
  // res.statusCode = 200
  // res.setHeader('content-Type', 'text/plain')
  var pathname = url.parse(req.url).pathname
  console.log(pathname)
  fs.readFile(pathname.substring(1), function (err, data) {
    if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
        })
      res.write(data.toString())
    }
    res.end()
  })
})

server.listen(3000, '127.0.0.1', () => {
 console.log('服务器已经运行，请打开http://127.0.0.1:3000来访问')
})
