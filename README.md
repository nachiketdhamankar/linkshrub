### Cloudflare General Coding Assignment 2020

Hello!

Welcome to my version of [Linktr.ee](https://linktr.ee/).
It's built by using cloudflare's [wrangler](https://github.com/cloudflare/wrangler) to create a worker from [router template](https://github.com/cloudflare/worker-template-router).

You can check out the demo [here - https://worker.nachiketsd.workers.dev/](https://worker.nachiketsd.workers.dev/)

##### Requirements
Following tasks were expected -
1. Generate JSON API
2. Serve HTML Page

#### Completion
- [x] JSON API

- [x] HTML Page
    - [x] Retrieve Page
    - [x] Get the links from your previously deployed JSON response
    - [x] Use HTMLRewriter to add these links to the static HTML page
    - [x] Return the transformed HTML page from the Worker
        - [x] Profile 
            - [x] Avatar
            - [x] Name

- [x] Extra Credit
    - [x] Social Links
    - [x] Update Title
    - [x] Change background color
      
##### JSON API
- Used [wrangler](https://github.com/cloudflare/wrangler) to create a worker from [router template](https://github.com/cloudflare/worker-template-router)
  