# Ember-filepicker

Sample application showing usage of filepicker.io and Firebase with Ember.

## Setup

```bash
npm install --save-dev emberfire
ember generate emberfire
bower install filepicker --save
npm install --save-dev ember-cli-bootstrap
```

Add `app.import('bower_components/filepicker/filepicker.min.js');` to `Brocfile.js`

Remember to restart the ember-cli server, `ember serve`, after modifying `Brocfile.js` or installing packages via npm.

Add `"filepicker"` to end of the `.jshintrc` `"predef"` section.

Set the Filepicker API key in `app.js`

```javascript
filepicker.setKey(config.filepickerAPIKey);
```

Add the key to `config/environment.js`

```javascript
filepickerAPIKey: 'ApRfoUR9WQTeOakqb4Y6Lz',
```

## Questions

* How do we create a controller?
* Can we have model properties as functions that take parameters?

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
