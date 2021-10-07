const vNodeOS = require('../../helpers/v_os');
const generateIntervalMS = require('../../helpers/interval_generator');

module.exports = {
  name: "get_platform",
  description: "getPlatform function print",
  interval: generateIntervalMS.month(2),
  lastCheck: 0,
  exec ()  {
    var response = vNodeOS.platform();
    console.log('📌 getPlatform [ 2months ]: ' + JSON.stringify(response));
    return response;
  }
}
