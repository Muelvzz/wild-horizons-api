import http from "node:http"
import { getDataFromDb } from "./database/db.js"

const PORT = 8000

const server = http.createServer(async (request, response) => {
  const urlProperty = request.url
  const requestMethod = request.method
  const destination = await getDataFromDb()

  if (urlProperty === "/api" && requestMethod === "GET") {
    const stringifiedDestination = JSON.stringify(destination)

    response.writeHead(200, { 'Content-Type': 'application/json' });

    response.write(stringifiedDestination)
    response.write("\n")

    response.end(
      "Hello from the server!", 
      "utf8", 
      () => console.log("response end")
    )
  }
})

server.listen(PORT, () => console.log(`server running at port ${ PORT }`))