![jonymockup](https://jonymockup.david.tools/logo.svg)

A simple tool for sharing mockups built with [Polymer](https://www.polymer-project.org/). The code is straightforward and is the result of some basic experiments with custom elements, shadow DOM and HTML imports. There's no build step or dynamic content. The `gh-pages` branch contains the same source that you can [preview here](https://dmfrancisco.github.io/jonymockup).

#### Getting Started

* Clone or [download and uncompress the source](https://jonymockup.david.tools)
* Put your mockups in the `mockups` folder and update the `content.js` file accordingly
* Copy the files to your http server or start a new [local one](https://gist.github.com/willurd/5720255): `ruby -run -ehttpd . -p8080`

That's it, visit [http://localhost:8080](http://localhost:8080)! To customize it, check out the `index.html` and `theme.html` files.

---

#### Advanced Sourcery

Interested in customizing or extending this library? Here's how:

* Install the development dependencies: [Node](http://nodejs.org/) and [Bower](http://bower.io/#install-bower)
* Install Polymer for Web Components: `bower install --config.directory=components`
* Change `index.html` in order to import the development `webcomponents.js` and `vendor.html` files
* Start the server

#### Vulcanization

For faster load times, you can bundle the dependencies with [Vulcanize](https://github.com/polymer/vulcanize) (alternatively, you can bundle the entire `index.html` file):

```
npm install -g vulcanize
vulcanize vendor.html --strip --inline --output vendor.min.html
```

---

Licensed under the MIT license.
