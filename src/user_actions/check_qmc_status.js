const vReq = require('v_req');
const generateIntervalMS = require('../interval_generator');

const qmcRoot = {
  options: {
    hostname: 'quickmedcards.com',
    port: 443,
    path: '/',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
};

module.exports = {
  name: "check_qmc_status",
  description: "check_qmc_status...",
  interval: generateIntervalMS.minute(1),
  lastCheck: 0,
  exec() {
    var response = vReq(qmcRoot);
    console.log('💻 QMC_Status [ 1m ]: ' + JSON.stringify(response));
    return response;
  }
};
