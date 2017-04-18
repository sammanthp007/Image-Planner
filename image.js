"use strict";

window.onload = function() {
  $('add_btn').onclick = addImage;
  $('delete_btn').onclick = deleteImage;
  $('planning_div').onclick = showURL;
}

function addImage() {
  var inputurl = document.getElementById("input_url").value;

  if (isValidUrl(inputurl)) {
    addImageToPlannigArea(inputurl);
  } else {
    displayError("URL cannot be empty and must be valid");
  }
}

function isValidUrl(url) {
  // TODO: change this
  var exp = "[A-Za-z]*.jpg";
  var regex = new RegExp(exp);
  return url.match(exp);
}

function addImageToPlanningArea(url) {
  // create element to place the image
  var image = document.createElement("img");
  image.className = "thumbnail_image";

  // add zooming capability
  image.observe("mouseover", zoomIn);
  image.observe("mouseout", zoomOut)

  // Image tag is created, then added inside blank area.
  // the tag is removed when the image fails to load.
  // Causes an undesired effect on the tag.
  $("planning_div").appendChild(image);
}

function displayError(err) {
  console.log(err);
  document.getElementById("error_statement").innerHTML = err;
}


function deleteImage() {
  console.log("Clicked delete image");
}

function showURL() {
  console.log("Show usl clicked");
}
