"use strict";

var images_in_planning = [];

window.onload = function() {
  // add event handlers to buttons
  $("add_btn").onclick = addImage;
  $("delete_btn").onclick = deleteImage;
};

// on clicking the add button
function addImage() {
  removeError();
  var inputurl = document.getElementById("input_url").value;

  // if valid then add image
  if (isValidUrl(inputurl)) {
    addUrlToPlanningArea(inputurl);
  } else {
    displayError("URL cannot be empty and must be valid");
  }
}


// removes the error statement from the error div
function removeError() {
  $("error_statement").innerHTML = "";
}


// checks if url is valid
function isValidUrl(url) {
  // got help from
  // stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
  var expression = /[a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

  var regex = new RegExp(expression);
  return url.match(regex);
}


// adds image to the planning area given the url
function addUrlToPlanningArea(url) {
  images_in_planning.push(url);
  displayPlanningArea();
}


// function that removes all children from planning div
function removeAllChildrenFromPlanningArea() {
  while ($("planning_div").hasChildNodes()) {
    $("planning_div").removeChild($("planning_div").lastChild);
  }
}


// iterates through the images url and diplays images in planning area
function displayPlanningArea() {

  // remove all from the planning Area
  removeAllChildrenFromPlanningArea();
  var count;
  for (count = 0; count < images_in_planning.length; count += 1) {
    addImageToPlanningArea(images_in_planning[count]);
  }
}



// function that adds a url as image to planning area
function addImageToPlanningArea(url) {
  // create element to place the image
  var image = document.createElement("img");
  image.src = url;
  image.className = "thumbnail_image";

  // find the right size to display as
  var natural_height = image.naturalHeight;
  var natural_width = image.naturalWidth;

  if (natural_height > 100 && natural_width > 100) {
    image.width = 100;
    image.height = 100;
  }

  // add click and hover functionalities
  image.observe("click", showUrl);
  image.observe("mouseover", makeZoomed);
  image.observe("mouseout", makeOriginalSized);

  // add to the planning area as a child node
  $("planning_div").appendChild(image);
}


// function that zooms an image on hover
function makeZoomed() {
  var hh = this.naturalHeight;
  var ww = this.naturalWidth;

  if (hh < 500 && ww < 500) {
    this.height = hh;
    this.width = ww;
  } else {
    this.height = 500;
    this.width = 500;
  }
}


// function to take image to original size on leaving hover
function makeOriginalSized() {
  var hh = this.naturalHeight;
  var ww = this.naturalWidth;

  if (hh < 100 && ww < 100) {
    this.height = hh;
    this.width = ww;
  } else {
    this.height = 100;
    this.width = 100;
  }
}


function showUrl() {
  // remove all erros on button clicks
  removeError();

  // display the url in the input box
  $("input_url").value = this.src;
}


// function that displays erros in red font below the controls
function displayError(err) {
  document.getElementById("error_statement").innerHTML = err;
}


function deleteImage() {
  // remove all erros on button clicks
  removeError();
  var inputurl = document.getElementById("input_url").value;
  if (isValidUrl(inputurl)) {

    // remove the image, only one
    var index = 0;
    for (index = 0; index < images_in_planning.length; index++) {
      if (images_in_planning[index] == inputurl) {
        images_in_planning.splice(index, 1);
        displayPlanningArea();
        return;
      }
    }
    // if not found, then display error
    displayError("Image not in your planning Area");
  } else {
    displayError("URL cannot be empty and must be valid");
  }
}


