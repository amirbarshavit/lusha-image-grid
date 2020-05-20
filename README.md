This  was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Assumptions

## Desgin

1) It's not a pixel-perfect (it's far from it) I saw the UI screenshots to late.
2) In row view mode, in order to be responsive to screen width, only in 1400px (or bigger ) width the 5 images will display in one row if the screen width is less then 1400px the gallery grid will adjust itself.

### Browsers support:
Test on chrome

## App.js

It's a container component that responsible for fetching the images from the API (with FetchImages hook) and modify it.
the component is also handling all the refresh button behaviors in order to pass to the gallery component only the images that needed to display.

## App.css

The component layout

## Gallery.js

It's a component that responsible for the gallery display and view modes only, this component know how to work with an array of images and display it,
the gallery component doesn't do anything with the data, just display it (today we display 5 images but if we decide that we want to display other numbers of images we just need to pass the images array as a prop).

We can use this component to display images from any source that we want

## Button.js and Button.css

It's a simple button component the contains the button logic and UI.

### FetchImages.js
Its a custom hook that fetches the data from the API.
maybe I should do it more generic and pass the URL and the headers as params, but I am not sure if it's not too much generic

** add error response handling for API call  (after I sent you the link)

**I should add error response handling (I said to myself that I will do it after everything works well and I forgot about it)**

 
## Hooks
It's the first time that I'm using hooks I hope that I use it well.

## Test
I test the toggle view buttons behavior and that the buttons are rendered.
I should add a test to check that the images are rendered and that the refresh logic is working as we expected
