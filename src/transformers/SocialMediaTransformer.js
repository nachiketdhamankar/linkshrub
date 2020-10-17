/**
 * Transform the html to add social media links
 */
class SocialMediaTransformer {
    constructor(socialLinks) {
        this.socialLinks = socialLinks
    }

    /**
     * Add social media links to the element
     * @param element
     * @returns {Promise<void>}
     */
    async element(element) {
        element.removeAttribute("style")
        const socialMediaLinksHtml = this.socialLinks.map(link => `<a href=${link.url}><img src=${link.icon}></a>`).join("")
        element.setInnerContent(socialMediaLinksHtml, {html:true})
    }
}
module.exports = SocialMediaTransformer