import http from "node:http"
import { getDataFromDb } from "./database/db.js"
import { sendJsonResponse } from "./utils/sendJsonResponse.js"
import { getFilteredResponse } from "./utils/getFilteredResponse.js"

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

    sendJsonResponse(
      response,
      200,
      responseHeader,
      "Hello from the Node Server"
    )

  } else if(urlProperty.startsWith("/api/continent") && requestMethod === "GET") {
    const selectedContinent = urlProperty.split("/").pop()
    const filteredContinent = getFilteredResponse(destination, "continent", selectedContinent)

    sendJsonResponse(
      response,
      200,
      responseHeader,
      filteredContinent
    )

  } else if(urlProperty.startsWith("/api/country") && requestMethod === "GET" ) {
    const selectedCountry = urlProperty.split("/").pop()
    const filteredCountry = getFilteredResponse(destination, "country", selectedCountry)

    sendJsonResponse(
      response,
      200,
      responseHeader,
      filteredCountry
    )

  } else {
    sendJsonResponse(
      response,
      404,
      responseHeader,
      JSON.stringify(errorMessage)
    )
  }
})

server.listen(PORT, () => console.log(`server running at port ${ PORT }`))