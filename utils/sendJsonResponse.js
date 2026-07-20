export const sendJsonResponse = (
  response, 
  statusCode, 
  responseHeader, 
  payload
) => {
  response.writeHead(statusCode, responseHeader);
  res.setHeader('Access-Control-Allow-Origin', '*')

  response.end(payload, "utf8")
}