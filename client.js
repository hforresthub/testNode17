const http = require('http')

const port = 3000

const options = {
	hostname: 'localhost',
	port: port,
	path: '/',
	method: 'GET'
}

const req = http.request(options, res => {
	console.log(`status code: ${res.statusCode}, message: ${res.statusMessage}`)

	res.on('data', d => {
		process.stdout.write(d)
	})
})

req.on('error', error => {
	console.error(error)
})

req.end()

const options2 = {
	hostname: 'localhost',
	port: port,
	path: '/'
}

const getReq = http.get(options, res => {
	console.log(`get status code: ${res.statusCode}`)

	res.on('data', d => {
		process.stdout.write(d)
	})
})

getReq.on('error', error => {
	console.error(error)
})