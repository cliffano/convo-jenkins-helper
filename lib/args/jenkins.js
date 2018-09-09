/**
 * Construct arguments needed for calling remoteAccessApi.getComputer .
 * Returns an array with depth control 1.
 *
 * @param {Object} params: query parameters passed from Convo middleware
 * @param {Object} apiOpts: options parameter needed for the OpenAPI method call
 * @param {Object} convoOpts: options parameter containing references to objects available in Convo middleware
 * @return the arguments array
 */
function getComputer(params, apiOpts, convoOpts) {
  const depth = 1;
  return [depth];
}

/**
 * Construct arguments needed for calling remoteAccessApi.headJenkins .
 * Returns an empty array because headJenkins signature doesn't have any argument.
 *
 * @param {Object} params: query parameters passed from Convo middleware
 * @param {Object} apiOpts: options parameter needed for the OpenAPI method call
 * @param {Object} convoOpts: options parameter containing references to objects available in Convo middleware
 * @return the arguments array
 */
function headJenkins(params, apiOpts, convoOpts) {
  return [];
}

module.exports = {
  getComputer: getComputer,
  headJenkins: headJenkins
};
