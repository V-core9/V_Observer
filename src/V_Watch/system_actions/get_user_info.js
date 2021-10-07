const Vos = require('../../helpers/v_os');
const generateIntervalMS = require('../../helpers/interval_generator');

module.exports = {
  name: "get_user_info",
  description: "will print to console just to get hearth bumping...",
  interval: generateIntervalMS.second(10),
  lastCheck: 0,
  exec ()  {
    console.log('🙋‍♂️ User Info [ 10s ]: ');
    console.log(Vos.userInfo());
  }
}
