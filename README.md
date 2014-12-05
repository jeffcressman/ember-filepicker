# Ember-filepicker

Sample application showing usage of filepicker.io and Firebase with Ember.

Based on https://github.com/mminkoff/ember-ink-filepicker

## How This Application Was Built

```bash
npm install -g ember-cli
npm install -g bower
npm install -g firebase-tools
ember new ember-filepicker
cd ember-filepicker
npm install --save-dev emberfire
ember generate emberfire
bower install filepicker --save
npm install --save-dev ember-cli-bootstrap
```

Create an app at https://www.firebase.com, build your app once (so that the `dist` directory exists), and then initialize the app with Firebase.

```bash
ember build
firebase init
```

Add `app.import('bower_components/filepicker/filepicker.min.js');` to `Brocfile.js`

Remember to restart the ember-cli server, `ember serve`, after modifying `Brocfile.js` or installing packages via npm.

Add `"filepicker"` to end of the `.jshintrc` `"predef"` section.

Create an app at http://filepicker.io and then set the Filepicker API key in `app.js`

```javascript
filepicker.setKey(config.filepickerAPIKey);
```

Add the key to `config/environment.js`

```javascript
filepickerAPIKey: 'ApRfoUR9WQTeOakqb4Y6Lz',
```

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

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

```bash
ember build
firebase deploy
```

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* firebase: https://www.firebase.com/
* filepicker: https://www.filepicker.io/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
