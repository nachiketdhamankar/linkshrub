/**
 * Returns a JSON of an array of links
 * @param request
 * @returns {Response} Array of links
 */
function linksHandler(request) {
    const init = {
        headers: {"content-type": "application/json;charset=UTF-8"}
    }
    const body = JSON.stringify(links, null, 2)
    return new Response(body, init)
}

module.exports = linksHandler