/**
 * Transforms the links and adds them to the HTML page
 */
class LinksTransformer {
    constructor(links) {
        this.links = links
    }

    /**
     * Add each link that was declared before
     * @param element
     * @returns {Promise<void>}
     */
    async element(element) {
        const newContent = this.links.map(link => `<a href=${link.url}>${link.name}</a>`).join("")
        element.setInnerContent(newContent, {html: true})
    }
}

module.exports = LinksTransformer;