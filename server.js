import http from "node:http"

const PORT = 8000

const server = http.createServer((request, response) => {
  response.end("Hello from the server!")
})

server.listen(PORT, () => console.log(`server running at port: ${PORT}`))