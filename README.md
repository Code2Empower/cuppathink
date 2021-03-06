# CuppaThink

[![CuppaThink](https://cuppathink.blog/logo-160x61.jpg)](https://cuppathink.blog/)

[https://www.cuppathink.blog/](https://www.cuppathink.blog/)

## **About The Project**
This project's mission is to destroy ignorance and to instill critical thinking.

## **Running the project locally**
This project uses [Create React App](https://github.com/facebook/create-react-app).
After cloning the repo, run `npm install` and then `npm start`.

The following commands are available:

### npm install - for a fresh install from repo
Installs the dependencies from the `package.json`.

### npm start - for running a local build
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build - for testing a local version of live build (NOTE: this is NOT how deploy is handled, see 'Branching & Deployment Via Netlify' below)
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## **Content & CMS**
StoryBlok is the current CMS. There is a posts section, which has a schema defined for all articles.  All other content is stored via page name, or global `app` data. There is also a `static-data.js` file in the `src/js/constants` folder, which contains data that should not need frequent updates.  There are several functions for parsing StoryBlok data, and making it easier to reference in the app.  These functions live in `src/js/helpers/helpers.js`.

Anchor tag parameters like `target` and `rel` are handled via app logic.  Whenever a string is passed to `purifyHTML`, which lives in `./js/helpers/helpers.js`, an optional second param can be passed. It can be `'both'` to add `rel='nofollow noreferrer` and `target='_blank'` or `'target'`, which only adds the target param.  All cases, even without this param, will recieve `rel='noopener'` on any exteral links, as a security step.

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

## **Branching & Deployment Via Netlify**
All major updates should be branched from `dev`, once ready they can be merged back to `dev`.  Finally, to deploy live, dev latest should be merged with `master`.  As soon as `master` is updated, a live deploy will be initiated.

Branches can be viewed in a preview environment via the netlify site.