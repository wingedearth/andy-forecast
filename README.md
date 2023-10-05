# andy-client

## Overview
A rendering application with an Express.js server and a React frontend

## Resources

1. [GitHub Respository](https://github.com/wingedearth/andy-client)
2. [Changelog](https://github.com/wingedearth/andy-client/blob/master/CHANGELOG.md)
3. [Trello Board](https://trello.com/b/ar4s11cT/andy-client)
4. [Deployed App](https://andy-client-09597ceb8f94.herokuapp.com/)

## Technologies

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [Node.js](https://nodejs.org) v.20+
3. [Git](https://git-scm.com)
4. [release-please](https://www.npmjs.com/package/release-please)
5. [commitlint](https://commitlint.js.org/#/)
6. [BabelJS](http://babeljs.io)
7. [ESLint] (https://eslint.org/)

## Set up your local repository

1. From your command line shell (Bash or Zsh), in a directory of your choice, enter the following command, to create a folder called "andy-client": ```git clone https://github.com/wingedearth/andy-client.git```
2. Enter ```cd andy-client``` to enter the folder.
3. Enter ```yarn``` to run yarn, which will install the local NPM package dependencies. If you do not have yarn installed globally on your machine, then first enter ```npm i -g yarn``` to install yarn.

## Starting the Application

### Development

1. Enter ```yarn build``` on the command line to build/transpile application with Webpack watch mode.
2. Enter ```yarn dev``` on the command line (in a different tab) to start application.

### Production

1. Enter ```yarn start``` to build and start the server

## Version

When the server is available, use the /version endpoint to see app information.

## Conventional Commits

From conventionalcommits.org:

The commit message should be structured as follows:

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
The commit contains the following structural elements, to communicate intent to the consumers of your library:

fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.
footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

## Release PRs

Merging code to the master branch will auto generate or update a Release PR. When ready to bump the application version, simply merge the Release PR in GitHub. This will also update the changelog.
