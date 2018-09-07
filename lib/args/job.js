const _ = require('underscore');

 /**
  * Construct arguments needed for calling remoteAccessApi.postJobBuild .
  * It passes an empty build parameters JSON because this call only triggers parameter-less build job.
  * NOTE: if this function needs to also support build with parameters as part of a different query,
  * it can use convoOpts to identify the query name and distinguish the queries accordingly
  *
  * @param {Object} params: query parameters passed from Convo middleware
  * @param {Object} apiOpts: options parameter needed for the OpenAPI method call
  * @param {Object} convoOpts: options parameter containing references to objects available in Convo middleware
  * @return the arguments array
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
