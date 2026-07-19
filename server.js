import http from "node:http"
import { getDataFromDb } from "./database/db.js"

const PORT = 8000

const server = http.createServer(async (request, response) => {
  const urlProperty = request.url
  const requestMethod = request.method
  const responseHeader = {'Content-Type': 'application/json'}

  const destination = await getDataFromDb()
  const errorMessage = {
    error: "not found", 
    message: "The requested route does not exist"
  }

  if (urlProperty === "/api" && requestMethod === "GET") {
    const stringifiedDestination = JSON.stringify(destination)

    response.writeHead(200, responseHeader);

    response.write(stringifiedDestination)
    response.write("\n")

    response.end(
      "Hello from the server!", 
      "utf8", 
      () => console.log("response end")
    )
  } else if(urlProperty.startsWith("/api/continent") && requestMethod === "GET") {
    const selectedContinent = urlProperty.split("/").pop()
    const filteredContienent = destination.filter(
      data => data.continent.toLowerCase() === selectedContinent.toLowerCase()
    )

    response.writeHead(200, responseHeader)

    response.end(JSON.stringify(filteredContienent))

  } else {
    response.writeHead(404, responseHeader)
    response.end(JSON.stringify(errorMessage))
  }
})

server.listen(PORT, () => console.log(`server running at port ${ PORT }`))