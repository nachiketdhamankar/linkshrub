/**
 * Changes the background
 */
class BackgroundTransformer {
    /**
     * Change the background color
     * @param element
     */
    element(element) {
        element.setAttribute('style', "background-color: #4DA8DA")
    }
}
module.exports = BackgroundTransformer