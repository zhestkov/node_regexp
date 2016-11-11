var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) {
  var link = req.query.username;

  if (link == undefined) {
    res.status(200).send('Invalid username');
    return;
  }
  var entities = link.split(' ');
  if (entities.length != 1) {
    res.status(200).send('Invalid username');
    return;
  }
  var re = new RegExp('(https?)?:?(\/\/)?[a-z]*[\.a-z]*(\/)?([a-zA-Z0-9]+)');
  var re1 = new RegExp('\/|\.');
  if (!re1.test(link)) {
    console.log("RE1 " + link);
    res.status(200).send('@' + link);
    return;
  }
  var result = link.match(re);
  console.log(result);
  if (result[4].length <= 1)
    res.status(200).send('@' + result[0]);
  else res.status(200).send('@' + result[4]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});
