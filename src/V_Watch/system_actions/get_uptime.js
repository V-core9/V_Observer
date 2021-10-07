const Vos = require('../../helpers/v_os');
const generateIntervalMS = require('../../helpers/interval_generator');

module.exports = {
  name: "get_uptime",
  description: "Print Device Uptime...",
  interval: generateIntervalMS.hour(),
  lastCheck: 0,
  exec ()  {
    console.log('🕜 Get Uptime [ 60s ]: ');
    console.log(Vos.uptime());
  }
}
