/**
 * Get HTML page from given url
 * @returns {Promise<Response>} resolved to be html page
 */
async function getPage() {
    const htmlHeaderContentType = {
        headers: {"content-type": "text/html;charset=UTF-8"}
    }
    const url = "https://static-links-page.signalnerve.workers.dev"
    return fetch(url, htmlHeaderContentType)
}

module.exports = getPage