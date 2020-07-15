var dunno = require('fs'),
    dunnoII = require('https');
dunno.writeFile(__dirname + "/htmlByJava.html", "<h1>is that real?</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("it worked");
  }
});
var dunno = require('fs');
dunno.writeFile(__dirname + "/dunnoFile.html", "<h1>hello</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("wow");
  }
})
var img = "https://thebigfactor.com/wp-content/uploads/2014/07/img_0855.jpg"
dunnoII.get(img, function(replay) {
  replay.pipe(dunno.createWriteStream(__dirname + "/woooow.jpg"))
})
