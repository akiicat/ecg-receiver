var request = require('request');

exports.send = function(time, data, gsensor,mac, rssi) {
  var body = {
    mac,
    time,
    data,
    gsensor,
    rssi,
  };

  var options = {
    uri: 'https://node-server-dot-ecgproject-1069.appspot.com/upload/gateway',
    method: 'POST',
    json: body,
  };

  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) return console.log(error);
  });

  console.log('\x1b[32m', '[NODESERVER] Packet Sent. mac:', mac, '\x1b[0m');
};
