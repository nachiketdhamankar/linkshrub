/**
 * Transform the title
 */
class TitleTransformer {
    /**
     * Change title name
     * @param element
     */
    element(element) {
        const name = "Nachiket SD"
        element.setInnerContent(name)
    }
}
module.exports = TitleTransformer