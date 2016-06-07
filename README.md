# Scaffold project
Basic scaffolding project for React+d3.

## How do I use this

### First time use
 - `npm install`

### Local development
 - `npm run build`
 - `npm run start`

### Run tests
  - `npm run test`
  OR
  - `npm run test:watch`

### Where things go

Code goes into `src` and tests in `test`. Output goes into `dist`. Feel free to play with the webpack configuration
to move these around however it suits you. It is currently setup to process CSS and LESS just by using an import statement in your javascript.
The styles can be anywhere you want, just import them in your javascript.

### Server conf

`dev-server.js` has some examples on how to quickly do some redirects or mock replies.

### Compatibility

Depending on what node/npm version you have you may need to adjust some package versions. As is it should work
out of the box with node v5.5.0 and npm v3.5.3.
