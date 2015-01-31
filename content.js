/* global scope */

// Title to be shown in the top right menu
scope.title = "My Project v0.1.0";

// Link to download the entire image set
scope.download = "mockups/archive.zip";

// List of screens to be displayed
// * title: Text displayed in the menu
// * small: Additional information that will be displayed in the header
// * name:  Name of the file (src will be `mockups/<name>.png`; you can change it in the index.html file)
scope.items = [{
  title: "Boilerplate screen",
  small: "Hi!",
  name:  "boilerplate.png"
},{
  title: "Login example",
  name:  "example.png"
}];

// Start the website with the first image
scope.selectItem(null, null, null, scope.items[0]);
