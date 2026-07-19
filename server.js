import http from "node:http"

const PORT = 8000

const server = http.createServer((request, response) => {
  const urlProperty = request.url
  const requestMethod = request.method

  if (urlProperty === "/api" && requestMethod === "GET") {
    response.end(
      "Hello from the server!", 
      "utf8", 
      () => console.log("response end")
    )
  }
})

server.listen(PORT, () => console.log(`server running at port ${PORT}`))