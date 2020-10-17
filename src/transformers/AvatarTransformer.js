//
const avatarUrl = "https://www.nachiket.me/static/assets/img/landing/me.jpg"

/**
 *
 */
class AvatarTransformer {
    /**
     *
     * @param element
     */
    element(element) {
        element.setAttribute("src", avatarUrl)
    }
}

module.exports = AvatarTransformer