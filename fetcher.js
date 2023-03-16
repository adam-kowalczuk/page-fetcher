const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2)[0];
const localFilePath = process.argv.slice(2)[1]

const content = '';

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  content += body;
});

fs.writeFile(localFilePath, content, err => {
  if (err) {
    console.error(err);
  }
  console.log(`Downloaded and saved some bytes to ${localFilePath}`)
});
