const v_os = require('os');

v_os.freememproc = () => {
  return Math.trunc((v_os.freemem() / v_os.totalmem()) * 100);
};

module.exports = v_os;
