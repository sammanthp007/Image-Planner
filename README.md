## Image Planner

- [x] Create an index.html with the given controls
- [x] image.html has the blank area before the controls

- When user enters a URL in the input box and clicks the 'add' button,
    - [x] If the URL is valid in terms of format, the image at the URL should
      be added to the planning area. If the image size if larger than 100x100,
      display it as no larger than 100x100. Fill a row with images first before
      putting images in another row.
    - [x] If the URL has an invalid format, an error message should be
      displayed under the controls.

- When user enters a URL in the input box and clicks the 'delete' button,
    - [x] If the URL is valid in terms of format,
        - [x] If the image at the URL is in the blank area, remove it.
        - [x] Otherwise, show an error message under the controls.
    - [x]  If the URL has an invalid format, an error message should be
      displayed under the controls.

- [x] When user clicks an image in the planning area, its URL should show up in
  the input box.
- [x] When user hovers the mouse on an image, the image should be zoomed in to
  be the lesser of 500x500 and original size. 
- [x] After the cursor moves away from the image, the zooming effect should
  disappear.
- [x] Any error message should disappear when user enters a new URL or click
  either button.


In total you will turn in the following files:
- [x] image.html, your web page
- [x] image.css, the style sheet for your web page
- [x] image.js, the JavaScript code for your web page
- [ ] A plain text file named readme.txt that contains the following items:
    - [ ] The URL of your project on a hosting service.
    - [ ] The URL of your project on Github.
    - [ ] The date and time, brief description in one or two sentences, and the
      URL of the most significant commits. At least five are needed.
    - [ ] Any comment that can help the instructor to understand your project.

Programming guideline (considered for grading):
- [x] Your CSS code must pass the W3C CSS validator. Your JavaScript code
  should pass JSLint with no errors. Your .js file must run in JavaScript
  strict mode by putting "use strict"; at the top.
- [x] Minimize global variables, avoid redundant code, and use parameters and
  return values properly. Make extra effort to minimize redundant code. 
- [x] Capture common operations as functions to keep code size and
  complexity from growing. You can reduce your code size by using the
  this keyword in your event
  handlers.
- [x] Some global variables are allowed, but it is not appropriate to declare
  too many; values should be local as much as possible. If a particular value
  is used frequently throughout your code, declare it as a global "constant"
  variable named IN_UPPER_CASE and use the constant throughout your code. Do
  not store DOM element objects, such as those returned by the $ or $$ or
  document.getElementById functions, as global variables.
- [x] Your JavaScript code should have adequate commenting. The top of your
  file should have a descriptive comment header describing the assignment, and
  each function and complex section of code should be documented.
- [x] Format your code by properly using whitespace and indentation. Use good
  variable and method names. Avoid lines of code more than 100 characters wide.
- [x] Separate content (HTML), presentation (CSS), and behavior (JS). Your JS
  code should use styles and classes from the CSS rather than manually setting
  each style property in the JS. For example, rather than setting the .style of
  a DOM object, instead, give it a className and put the styles for that class
  in your CSS file. Style properties related to x/y positions of tiles and
  their backgrounds are impractical to put in the CSS file, so those can be in
  your JS code.
- [x] Use unobtrusive JavaScript so that no JavaScript code, onclick handlers,
  etc. are embedded into the HTML code.
