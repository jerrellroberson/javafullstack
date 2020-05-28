# CSS & CSS3

## CSS Selector
1. The lcoation of the CSS is located in the head tags
2. Using inspector on a page, deleteing the head tags from any page will show how a page will look without CSS
3. CSS is used to position the elements on a HTML page 
4. CSS may be attached to a document via inline, internal, and external
5. Inline and internal CSS are considered to be bad practice
6. A stylesheet is a list of rules consisting of one or more selectors and a declaration block
7. Selectors are used for declaring the HTML elements to which a style will apply
8. Commons selectors are elements specificed by HTML tag (e.g. p, h1), id (preceded by # in CSS), and class (preceded by . in CSS)
9. The 'id' selector must be unique can only be used once on a page 
10. A declaration block consist of a property and value closed with a semi-colon11. The * selector is used to style everything on the page and is great for a reset and creating some page defaults linke the font family and size you wish to have ([10 CSS Selectors You Shouldn't Code Without](https://www.webdesignerdepot.com/2013/08/10-css-selectors-you-shouldnt-code-without/)) 
```
* {
  margin: 0;
  padding: 0;
  font-family: helvetica, arial, sans-serif;
  font-size: 16px;
}
```

## Styling Elements
1. The width and height styling elements are used to the determine the size of the elements
2. The value for width and height can be expressed in pixel (px) and percentage
3. Percentage is used more so for responsive design pages 
4. The height element is used to determine the amount of content that the element will hold
5. If the height element is left unset, the element will expand to fit the content 
6. If th height element is set and the content is larger than the height property, you will need to manually adjust the height or use the overflow property
```
div {
  overflow: scroll;
}
```
7. Background color property can be set using hex, rgb or semantic code
8. The border property can be set using the border thickness, border type, and the border color
```
div {
  border: 1px solid #0000000;
}
9. The border-radius property is used give rounded corners 

## Styling Text
1. The text color is used to specific the color of the text using hex, RGB or semantic code
2. Text-align property is used to set the horizonal alignment of any text is center, left align, right align or justified
3. Text-align only works if the display's property is block
4. To remove underline, overline and line-throughs, used text-decoration
5. For font-size property values, em or % is recommendated by most developers 

## Display Property
1. Each HTML element is either inline or block
2. Inline items only take up as much space as needed
3. Inline elements: <a>, <img>, <span>, <input>, <label>, <select>, <testarea>
4. Block items take up 100% of the width of the parent element
5. Block elements: <body>, <div>, <form>, <h1>-<h6>, <p>, <table>, <ul>, <ol>, <li>
6. To get rid of the bullets for a navigation menu:
```
 #nav-menu{
  list-style-type: none; /*This gets rid of the bullets.*/
 }
```
## Browser Compatibility
1. Various browsers may display HTML elements differently
2. To solve the cross-browser issues, it's encouraged that you use 'RESET' and 'NORMALIZE' and define what default attributes should be 
3. Also, to fix cross-platform issues it is encouraged to validate the HTML/CSS site which gives recommendations on how to fix possible compatibility issues 
4. A good resource to read for CSS Reset is [Killer Collection of CSS Resets](https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/) and [CSS Normalization](https://github.com/necolas/normalize.css/) 

