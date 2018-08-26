const helpers = require('./helpers');
const jenkins = require('./jenkins');

function info() {
  console.log('Convo Jenkins helper v%s', require('root-require')('./package').version);
}

module.exports = {
  info: info,
  callTarget: jenkins.callTarget,
  helpers: helpers
};
