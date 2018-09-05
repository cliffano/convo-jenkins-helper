const jenkinsApi = require('./api/jenkins');
const jenkinsArgs = require('./args/jenkins');
const jobArgs = require('./args/job');

const methods = {
  headJenkins: jenkinsArgs.headJenkins,
  postJobBuild: jobArgs.postJobBuild
};

/**
 * Retrieve info of this Convo helper library, in this case, package name and version.
 *
 * @return the info
 */
function getInfo() {
  return '%s-%s';
}

/**
 * Calls OpenAPI method with Jenkins crumb parameter.
 *
 * @param {Object} api: the OpenAPI-generated API object
 * @param {String} method: the name of the method to be executed on the provided API
 * @param {Object} params: conversation parameters passed from Convo middleware
 * @param {Function} apiCb: callback function to be passed to API method call as the last argument, this method signature is controlled by OpenAPI Generator
 * @param {Function} errCb: callback function with reply text argument, to be called when Jenkins crumb can't be fetched from Jenkins server
 * @param {Object} convoOpts:
 */
function callApi(api, method, params, apiCb, errCb, convoOpts) {
  console.info('Calling API using Convo Jenkins Helper...');
  function csrfCb(err, apiOpts) {
    if (err) {
      errCb(error.message);
    } else {
      var args = methods[method](params, apiOpts, convoOpts);
      args.push(apiCb);
      api[method](...args);
    }
  }
  jenkinsApi.csrf(convoOpts.apis.remoteAccessApi, csrfCb);
}

module.exports = {
  getInfo: getInfo,
  callApi: callApi
};
