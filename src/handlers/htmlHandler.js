const links = require('../dao/getLinks')
const getPage = require('../dao/getHTMLPage')
const linksTransformer = require('../transformers/LinkTransformer')
const profilesTransformer = require('../transformers/ProfilesTransformer')
const avatarTransformer = require('../transformers/AvatarTransformer')
const nameTransformer = require('../transformers/NameTransformer')

/**
 * Transform the HTML page
 */
const transformer = new HTMLRewriter()
    .on("div#links", new linksTransformer(links))
    .on("div#profile", new profilesTransformer())
    .on("img#avatar", new avatarTransformer())
    .on("h1#name", new nameTransformer())

/**
 * HTML Handler route
 * @param request Request object
 * @returns {Promise<*>} Response of the handler
 */
async function htmlHandler(request) {
    const htmlPageResponse = await getPage()
    return transformer.transform(htmlPageResponse)
}

module.exports = htmlHandler