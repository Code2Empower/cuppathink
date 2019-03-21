# Think Blog

[![ThinkBlog](https://octodex.github.com/images/scubatocat.png)](https://example.com)
https://example.com

## **About The Project**
This project's mission is to destroy ignorance and to instill critical thinking.

## **Running the project locally**
This project uses [Create React App](https://github.com/facebook/create-react-app).
After cloning the src repo, the following commands are available:

### npm start
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## **Architecture**
### index.html 
is the highest level file, and contains the application html template.
### index.js 
passes the `store` to the `app` via the `provider`, and handles polyfills.
### app.jsx 
loads the bulk of the app data and css, and manages routes via `<switch>`.
### Folders 
are managed via functionality and they are named as such.  For example `views` can be thought of as pages and `components` get used in those views. 

## **package.json**
See the package.json for the latest list of dependencies.  A few choices are explained below.

### SCSS
This app has node-sass installed to support scss.  Stylesheets should be saved as scss.

### Axios
Axios is used for all api calls.

### Dompurify and showdown
Showdown is used to convert markdown from API calls to rich text.  Dompurify is an extra layer to reduce the opportunity for injection threats.

### Redux, connected-react-router, history
Redux is used to manage state.  History is created in `store/index.js`.  Routes are managed via `<Switch>` in the `app.jsx`.

### The critical role of `redux-thunk` 
I added redux-thunk to `store/index.js` when I was determining the best way to handle state management.  It lives there, and only there, and if I remove it, the application breaks.  I have no clue how it works; it's basically magic. So, it will probably stay forever now.

## Deployment
TBD with netlify.