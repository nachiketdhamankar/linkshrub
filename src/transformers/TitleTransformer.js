/**
 * Transform the title
 */
class TitleTransformer {
    /**
     * Change title name
     * @param element
     */
    element(element) {
        const name = "@nachiketsd"
        element.setInnerContent(name + "|Linktree")
    }
}

module.exports = TitleTransformer