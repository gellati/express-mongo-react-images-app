# Frontend client for image server

Fronted written in [React](https://reactjs.org). Fetches data from the backend, which is then displayed to the user. [Redux](https://redux.js.org/) is used for state management.

Express is used as a server, but it uses webpack configuration to be able to hot reload changes in code.

## Setup

Install dependencies listed in `package.json`  with

    npm install

Then start the development service with

    npm run dev

## Directory layout

Images are located in the `public/images` folder. The `src` folder contains the source code for the project. React components are in the `src/components` directory, while the Redux store is set up in `store.js` and state management is handled through files in `src/actions` and `src/reducers`. Styles are set in `src/styles` using [Stylus](https://stylus-lang.com/).

Code style rules are set in `.eslintrc.json`.
