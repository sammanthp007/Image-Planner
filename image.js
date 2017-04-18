"use strict";

var images_in_planning = [];

window.onload = function() {
  $('add_btn').onclick = addImage;
  $('delete_btn').onclick = deleteImage;
}



function addImage() {
  removeError();
  var inputurl = document.getElementById("input_url").value;

  if (isValidUrl(inputurl)) {
    addUrlToPlanningArea(inputurl);
  } else {
    displayError("URL cannot be empty and must be valid");
  }
}


function removeError() {
  $("error_statement").innerHTML = ""
}


function isValidUrl(url) {
  // TODO: change this
  var exp = "[A-Za-z]*.jpg";
  var regex = new RegExp(exp);
  return url.match(exp);
}


function addUrlToPlanningArea(url) {
  images_in_planning.push(url);
  displayPlanningArea();
}


function displayPlanningArea() {
  // remove all from the planning Area
  removeAllChildrenFromPlanningArea();
  for (var count = 0; count < images_in_planning.length; count++) {
    addImageToPlanningArea(images_in_planning[count]);
  }
}


function removeAllChildrenFromPlanningArea() {
  while ($('planning_div').hasChildNodes()) {
    $('planning_div').removeChild($('planning_div').lastChild);
  }
}


function addImageToPlanningArea(url) {
  // create element to place the image
  var image = document.createElement("img");
  image.src = url;
  image.className = "thumbnail_image";

  var natural_height = image.naturalHeight;
  var natural_width = image.naturalWidth;


  if (natural_height > 100 && natural_width > 100) {
    image.width = 100;
    image.height = 100;
  }

  image.observe("click", showUrl);
  image.observe("mouseover", makeZoomed);
  image.observe("mouseout", makeOriginalSized);

  $("planning_div").appendChild(image);
}


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


function displayError(err) {
  document.getElementById("error_statement").innerHTML = err;
}



function deleteImage() {
  removeError();
  console.log("Clicked delete image");
}

function showUrl() {
  removeError();
  
  // display the url in the input box
  $('input_url').value = this.src;
}

