/**
 * Construct arguments needed for calling remoteAccessApi.headJenkins .
 * Returns an empty array because headJenkins signature doesn't have any argument.
 *
 * @param {Object} params: conversation parameters passed from Convo middleware
 * @param {Object} apiOpts: options parameter needed for the OpenAPI method call
 * @param {Object} convoOpts: options parameter containing references to objects available in Convo middleware
 * @return the arguments array
 */
function headJenkins(params, apiOpts, convoOpts) {
  return [];
}

module.exports = {
  headJenkins: headJenkins
};
