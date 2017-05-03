const request = require('request');

let data = {
  "datapoints": [
    {"dataChnId": "temperature", "values": {"value": 22.3}},
    {"dataChnId": "humidity", "values": {"value": 32.1}},
    {"dataChnId": "power01", "values": {"value": 1}}
  ]
};

let options = {
  method: "POST",
  url: "https://api.mediatek.com/mcs/v2/devices/DgnnBIRM/datapoints",
  headers: {
    "Content-Type": "application/json",
    "deviceKey": "pL00OZpxxGZkH0Tw"
  },
  body: JSON.stringify(data)
};

let callback = (error, response, body) => {
  if (error) {
    console.log(error);
  } else if (response.statusCode == 200) {
    console.log(body);
    // var info = JSON.parse(body);
    // console.log(info.stargazers_count + " Stars");
    // console.log(info.forks_count + " Forks");
  }
}

console.log("post...");
request(options, callback);
console.log("done.");