const Router = require('./util/router')
const links = require('./dao/getLinks')
const linksHandler = require('./handlers/linksHandler')
const htmlHandler = require('./handlers/htmlHandler')
const log = require('./util/logger')
/**
 * Main program runner
 */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Router
 * @param request Incoming request
 * @returns {Promise<*>} Promise<Response> routed to appropriate handler
 */
async function handleRequest(request) {
    let router = new Router()
    log(request)
    router.get('/links', request => linksHandler(request))
    router.get('.*', request => htmlHandler(request))
    return await router.route(request)
}
