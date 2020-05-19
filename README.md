This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## My Assumptions
 ### Browsers support: 
      test on chrome
 ## App.js
 its a container component that responsable for fetching the images from the APi (with getImagesHook) and modify it.
 the component is also hanlding all the refresh button behoviers.
 ## App.css
 the component layout
 ## Gallery.js
 its a component that responsable for the gallery display and view modes only, this component know how to work with an array    of images and display it.
 the Gallery componenet dont do anything with  the data just display it (today we display 5 images but if we diced that we want to display and other number of images we just need to pass the images array as a props)
 
 we can use this component to display images form any source that we want 
## Button.js and Button.css
its a simple button component the conatin the button logic and ui.

## Hooks
 its the first time that Im using hooks I hope that I use it well
 ### FetchImages.js
 its a custom hook that fetch the data from the API.
 (maybe I should do it more genric and pass the url and the headers as params, but I am not sure if its not to much genric)
 
## Test
I test the toggle view buttons bevior and that the buttons are rendered 
I should add a test to check that the images are render and that the refresh logic is working as we expected  
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
