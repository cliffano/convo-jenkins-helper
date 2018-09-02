const jenkinsApi = require('./api/jenkins');
const jobArgs = require('./args/job');

const methods = {
  postJobBuild: jobArgs.postJobBuild
};

function getInfo() {
  return '%s-%s';
}

/**
 *
 */
function callApi(api, method, params, apiCb, errCb, convoOpts) {
  console.info('Calling API using Convo Jenkins Helper');
  console.log(params);
  function csrfCb(err, apiOpts) {
    if (err) {
      errCb(error.message);
    } else {
      var args = methods[method](params, apiOpts, convoOpts);
      args.push(apiCb);
      console.log(args);
      api[method](...args);
    }
  }
  jenkinsApi.csrf(convoOpts.apis.remoteAccessApi, csrfCb);
}

module.exports = {
  getInfo: getInfo,
  callApi: callApi
};
