// Import the HTTP module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';

const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP status code and content type in the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Write a response to the client
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});