async function htmlHandler(request) {

    const htmlHeaderContentType = {
        headers: {"content-type": "text/html;charset=UTF-8"}
    }
    const url = "https://static-links-page.signalnerve.workers.dev"

    const htmlPageResponse = await fetch(url)
    const htmlPage = await htmlPageResponse.text()

    return new Response(htmlPage, htmlHeaderContentType)
}

module.exports = htmlHandler