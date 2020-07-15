var dunno = require('fs'),
    img = require ('https'),
    imgPlace = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e76f0b3b-cfb0-466b-b85d-490e99a7ea03/d8y6pnk-aa9efa5f-62b0-480d-8bf7-e22d58719e9b.png/v1/fill/w_600,h_359,q_80,strp/yaay_by_sandy_kun_d8y6pnk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTkiLCJwYXRoIjoiXC9mXC9lNzZmMGIzYi1jZmIwLTQ2NmItYjg1ZC00OTBlOTlhN2VhMDNcL2Q4eTZwbmstYWE5ZWZhNWYtNjJiMC00ODBkLThiZjctZTIyZDU4NzE5ZTliLnBuZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.inOcDetY4ssMShyLBJjM4I2kqi2HPMQSAyJr11AF4RE";
dunno.writeFile(__dirname + "/htmlByJavaII.html", "<h1>don't really know what that means</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("it worked");
  }
});
img.get(imgPlace, function(response) {
  response.pipe(dunno.createWriteStream(__dirname + "/yaay.jpg"));
});
