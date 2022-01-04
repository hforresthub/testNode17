const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	fs.readFile(__dirname + '/data.txt', (err, data) => {
		console.log(data.toString())
		res.end(data)
	})
})
server.listen(3000)