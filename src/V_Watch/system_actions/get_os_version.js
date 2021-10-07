const Vos = require('../../helpers/v_os');
const generateIntervalMS = require('../../helpers/interval_generator');

module.exports = {
  name: "get_os_version",
  description: "print value of get_os_version.js ...",
  interval: generateIntervalMS.day(10),
  lastCheck: 0,
  exec() {
    var response = Vos.version();
    console.log('🙋‍♂️OS Version [ 10day ]: ' + JSON.stringify(response));
    return response;
  }
}
