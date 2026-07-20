export const sendJsonResponse = (
  response, 
  statusCode, 
  responseHeader, 
  payload
) => {
  response.writeHead(statusCode, responseHeader);

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET ')

  response.end(payload, "utf8")
}