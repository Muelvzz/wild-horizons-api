export const sendJsonResponse = (
  response, 
  statusCode, 
  responseHeader, 
  payload
) => {
  response.writeHead(statusCode, responseHeader);

  response.end(payload, "utf8")
}