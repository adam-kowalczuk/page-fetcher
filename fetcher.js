const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2)[0];
const localFilePath = process.argv.slice(2)[1];

request(url, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`)
  });
});

