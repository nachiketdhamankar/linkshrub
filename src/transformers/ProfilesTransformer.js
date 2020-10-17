/**
 * Transforms the profile id. That is, remove display: none from the div#profile container.
 */
class ProfilesTransformer {
    /**
     * Removes display:none attribute from the div#profile container
     * @param element
     */
    element(element) {
        element.setAttribute('style', '')
    }
}

module.exports = ProfilesTransformer