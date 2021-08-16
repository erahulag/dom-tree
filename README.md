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
>   `file:///<base_folder>/solution/allInOne.html`


### Assumptions 
* Only Element nodes and Text nodes are considered
* No Multi selection
* HEAD tag is locked and not expandable
> You can quickly modify code though to enable expand
> if you are using `file:///` version look in ParentNode of allInOne.html
> for other two versions use `solution/scripts/components/ParentNode.js`
* Tag Names are not uses as it is provided by DOM
