const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	// fs.readFile(__dirname + '/data.txt', (err, data) => {
	// 	console.log(data.toString())
	// 	res.end(data)
	// })
	const stream = fs.createReadStream(__dirname + '/data.txt')
	stream.pipe(res)
})
server.listen(3000)

const Stream = require('stream')

const readableStream = new Stream.Readable()
readableStream._read = () => {
	
}

readableStream.on('readable', () => {
	console.log('testing: ', readableStream.read().toString())
})

const readableStream2 = new Stream.Readable({
	read() {}
})

const writeableStream = new Stream.Writable()
writeableStream._write = (chunk, encoding, next) => {
	console.log(chunk.toString())
	next()
}

readableStream.pipe(writeableStream)

readableStream.push('Hi!')
readableStream.push('Ho!')

writeableStream.write('hey hey!!!\n')

// readableStream.on('close', () => writeableStream.end())
// writeableStream.on('close', () => console.log('ended'))

// readableStream.destroy()
// readableStream2.destroy()

if (process.env.NODE_ENV === "development") {
	console.log("in development mode")
}
if (process.env.NODE_ENV === "production") {
	console.log("in production mode")
}
if (['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
	console.log('in production or staging')
}


const { Transform } = require('stream')
const TransformStream = new Transform()

TransformStream._transform = (chunk, encodi8ng, callback) => {
	console.log(chunk.toString())
	TransformStream.push(chunk.toString().toUpperCase())
	callback()
}

TransformStream.write("test test")

process.stdin.pipe(TransformStream).pipe(process.stdout)