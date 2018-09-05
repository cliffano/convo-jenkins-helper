/**
 * Retrieve Jenkins crumb (required when using Jenkins with CSRF protection) and add the crumb to API opts.
 *
 * @param {Object} remoteAccessApi: OpenAPI-generated Remote Access API, it has getCrumb method for retrieving Jenkins crumb
 * @param {Function} cb: standard cb(err, result) callback
 */
function csrf(remoteAccessApi, cb) {
  console.info('Retrieving CSRF token...');

  function crumbCb(err, data, response) {
    if (!err) {
      console.log('CSRF token: %s', data.crumb);
      var apiOpts = {};
      apiOpts[data.crumbRequestField] = data.crumb;
      apiOpts.jenkinsCrumb = data.crumb;
    }
    cb(err, apiOpts);
  }

  remoteAccessApi.getCrumb(crumbCb);
}

module.exports = {
  csrf: csrf
};
