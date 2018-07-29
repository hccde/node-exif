const Exif = require('./lib/exif.js');
const metadata = Exif.nodeFileRead('./example/Bush-dog.jpg');
console.log(metadata);