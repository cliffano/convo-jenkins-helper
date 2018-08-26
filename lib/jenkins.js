/**
 *
 */
function callTarget(obj, method, params, callback, opts) {
  function csrfCallback(error) {
    if (error) {
      console.error(error);
    } else {
      var args = [callback];
      obj[method](...args);
    }
  }
  csrf(opts.apis.remoteAccessApi, params, csrfCallback);
}

/**
 * Add Jenkins crumb to arguments, this is needed when sending POST requests to
 * a Jenkins instance with CSRF protection.
 */
function csrf(remoteAccessApi, params, callback) {
  params.headers = params.headers || {};

  function crumbCallback(error, data, response) {
    if (!error) {
      params.headers[data.crumbRequestField] = data.crumb;
      params.headers.jenkinsCrumb = data.crumb;
    }
    callback(error);
  }

  remoteAccessApi.getCrumb(crumbCallback);
}

module.exports = {
  callTarget: callTarget
};
