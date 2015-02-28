![jonymockup](https://jonymockup.david.tools/logo.svg)

A simple tool for sharing mockups. The code is pretty straightforward and is the result of some basic experiments with custom elements, shadow DOM and HTML imports. There's no build step or dynamic content. The `gh-pages` branch contains the same source that you can [preview here](https://dmfrancisco.github.io/jonymockup).

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

#### Versioning and Deployment Process

These are just static HTML files, so you can copy them to your Dropbox or server via FTP. Here's the process that works best for me.

I usually apply versioning to mockups following the pattern **Major.Minor.Fix**, and for each project, folders are named **Project**_-v_**Major.Minor**-**Hash**. Everytime an error or tiny visual adjustment is done, the **Fix** version is incremented in the `content.js` file. When something new is introduced or changed substantially, a new folder is created with an incremented **Minor** version. This ensures that the URL changes on each iteration, which prevents clients from feeling confused (what they saw on a particular page is kept unchanged) and enhances transparency. The **Major** version only increases if decided to start with a new clean slate. The **Hash** portion of the folder name consists of around 5 random characters and prevents URLs from being guessed (which is what I usually want).

It may seem redundant, but I also use git. This lets me document changes in a simple sentence. The content is then deployed using [Dokku](https://github.com/progrium/dokku) with a [static buildpack](https://github.com/florianheinemann/buildpack-nginx). I host all my mockups on [Digital Ocean](https://digitalocean.com), a simple and affordable cloud hosting solution. If you are interested and feeling generous, I would appreciate if you signed up using this [referral link](https://www.digitalocean.com/?refcode=7eb2969f7001). This will give you a $10 credit (and $25 to me :heart_eyes:).

#### About high pixel density displays

In this context, convenience is more important than bandwidth and performance. This tool assumes you prefer to export mockups in a single high resolution. If you are working on your vector graphics editor, and thinking in terms of "1280px" screens, it makes sense to export them with width 2560px. They will be displayed in the browser in their original size, unless the browser's viewport is smaller (in that case it will fill the entire width). You can manually change this behavior by setting the `width` property for each item, like this:

```javascript
scope.items = [{
  title: "Example screen",
  name:  "example.png",
  width: 1280
} …
```

This will make them look good in both low and high pixel density displays. You can always use SVG too (just make sure to convert your text to outlines, because some browsers render them differently).

---

Licensed under the MIT license.
