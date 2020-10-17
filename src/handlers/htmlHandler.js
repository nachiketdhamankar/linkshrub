const links = require('../dao/getLinks')
const socialMediaLinks = require('../dao/getSocialMediaLinks')
const getPage = require('../dao/getHTMLPage')
const linksTransformer = require('../transformers/LinkTransformer')
const profilesTransformer = require('../transformers/ProfilesTransformer')
const avatarTransformer = require('../transformers/AvatarTransformer')
const nameTransformer = require('../transformers/NameTransformer')
const socialMediaTransformer = require('../transformers/SocialMediaTransformer')
const titleTransformer = require('../transformers/TitleTransformer')
const backgroundTransformer = require('../transformers/BackgroundTransformer')
/**
 * Transform the HTML page
 */
const transformer = new HTMLRewriter()
    .on("div#links", new linksTransformer(links))
    .on("div#profile", new profilesTransformer())
    .on("img#avatar", new avatarTransformer())
    .on("h1#name", new nameTransformer())
    .on("div#social", new socialMediaTransformer(socialMediaLinks))
    .on("title", new titleTransformer())
    .on("body", new backgroundTransformer())
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