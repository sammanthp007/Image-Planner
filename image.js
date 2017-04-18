"use strict";

window.onload = function() {
  $('add_btn').onclick = addImage;
  $('delete_btn').onclick = deleteImage;
  $('planning_div').onclick = showURL;
}

function addImage() {
  removeError();
  var inputurl = document.getElementById("input_url").value;

  if (isValidUrl(inputurl)) {
    addImageToPlanningArea(inputurl);
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
  image.src = url;
  image.className = "thumbnail_image";

  var natural_height = image.naturalHeight;
  var natural_width = image.naturalWidth;

  if (natural_height > 100 && natural_width > 100) {
    image.width = 100;
    image.height = 100;
  }

  $("planning_div").appendChild(image);
}


function displayError(err) {
  document.getElementById("error_statement").innerHTML = err;
}


function deleteImage() {
  removeError();
  console.log("Clicked delete image");
}

function showURL() {
  removeError();
  console.log("Show usl clicked");
}

function removeError() {
  $("error_statement").innerHTML = ""
}
