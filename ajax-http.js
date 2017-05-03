const https = require("https");

let data = {
  "datapoints": [
    {"dataChnId": "temperature", "values": {"value": 20.3}},
    {"dataChnId": "humidity", "values": {"value": 63.5}},
    {"dataChnId": "power01", "values": {"value": 0}}
  ]
};

let options = {
  host: "api.mediatek.com",
  port: 443,
  path: "/mcs/v2/devices/DgnnBIRM/datapoints",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "deviceKey": "pL00OZpxxGZkH0Tw"
  }
};

let req = https.request(options, (res) => {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', (e) => {
  console.log('problem with request: ' + e.message);
});

req.write(JSON.stringify(data));
req.end();
