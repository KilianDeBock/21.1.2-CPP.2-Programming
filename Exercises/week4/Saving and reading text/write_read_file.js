const fs = require('fs');
fs.writeFile(process.argv[2], process.argv[3], (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});