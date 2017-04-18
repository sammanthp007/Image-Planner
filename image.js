"use strict";

window.onload = function() {
  $('add_btn').onclick = addImage;
  $('delete_btn').onclick = deleteImage;
  $('loaded_img').onclick = showURL;
}

function addImage() {
  console.log("Clicked add");
}

function deleteImage() {
  console.log("Clicked delete image");
}

function showURL() {
  console.log("Show usl clicked");
}
