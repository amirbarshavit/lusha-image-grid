This  was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Assumptions

## Desgin

1)its not a pixel prefect (its far from it) I saw the UI screenshots to late.
2) in row view mode, in order to be responsive to screen width, only in 1400px (or bigger ) width the 5 images will dislpay in one row if the screen width is less then 1400px the galerry grid will adjust itself

### Browsers support:

      test on chrome

## App.js

its a container component that responsable for fetching the images from the API (with FetchImages hook) and modify it.
the component is also hanlding all the refresh button behoviers in order to pass to the gallery component only the images that needed to display.

## App.css

the component layout

## Gallery.js

its a component that responsable for the gallery display and view modes only, this component know how to work with an array of images and display it.
the Gallery componenet dont do anything with the data, just display it (today we display 5 images but if we decied that we want to display other number of images we just need to pass the images array as a prop)

we can use this component to display images form any source that we want

## Button.js and Button.css

its a simple button component the conatin the button logic and ui.

### FetchImages.js

its a custom hook that fetch the data from the API.
(maybe I should do it more genric and pass the url and the headers as params, but I am not sure if its not to much genric)

## Hooks

its the first time that Im using hooks I hope that I use it well

## Test

I test the toggle view buttons bevior and that the buttons are rendered
I should add a test to check that the images are render and that the refresh logic is working as we expected
