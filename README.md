### How to use

* Using via npm
> ```
> npm install
> npm start

> ```
> You can browse `http://localhost:8088/`

* copy **solution** folder to static web server
> `http://<your_server_addresss:port>/public/solution`

or

*  You can browse standalone `file:///` version as well 
>   `file:///<base_folder>/solution/output.html`


### Assumptions 
* Only Element nodes and Text nodes are considered
* No Multi selection
* HEAD tag is locked and not expandable
> You can quickly modify code though to enable expand
> Goto `solution/scripts/components/ParentNode.js` & run ```npm run build```
> or fix in output.html 
* Tag labels are used as it is provided by DOM
* By default mmodal don't show all nodes expanded only first childs
> You can close modal and **Check** `Open with all nodes expanded` and press `Show DOM Tree`
* Left/Bottom Link will browse to README.md

* Added search function for `text` nodes as well
* In search mode tree can't be collapsed
* All enabled actionable elements are set to pointer cursor
* All diabled/not-allowed elemnents are set to not-allowed cursor as well
* When Dialog opened body cant scroll. 