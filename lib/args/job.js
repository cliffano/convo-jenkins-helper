const _ = require('underscore');

/**
 * Construct arguments required to handle postJobBuild operation ID which doesn't require any build parameter.
 */
function postJobBuild(params, apiOpts, convoOpts) {
  var operationOpts = {
    token: 'convo-jenkins-helper'
  };
  return [params.jobName, JSON.stringify({}), _.extend(operationOpts, apiOpts)];
}

module.exports = {
  postJobBuild: postJobBuild
};
