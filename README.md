# Wordsmith
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> Forge your words - click on synonyms to swap and experiment

A single-page React/Redux web app with a Rails backend API that allows you to enter a word and interact with its other possible meanings. Utilizes Thunk [middleware](https://redux.js.org/advanced/middleware) and [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) to make asynchronous requests to the [Merriam-Webster Thesaurus API](https://dictionaryapi.com/).

*The Rails API lives in /app. To explore the React app, visit the /client directory*

# Demo

[![Walkthrough](http://img.youtube.com/vi/YoFqGEAHjAs/0.jpg)](http://www.youtube.com/watch?v=YoFqGEAHjAs/0)

![screenshot_2](public/images/screenshot_2.png)

# Installation

### For developers

Clone the project locally:
```sh
$ git clone https://github.com/emanuelbierman/wordsmith/
$ cd wordsmith
```
Install project dependencies:

```sh
$ bundle install
$ npm install
```
To run the app in one command, use this custom rake task:   

```sh
$ rake start
```
Note: the command is defined in the Rakefile in this repo and uses Foreman to simultaneously boot /app and /client

# Built With

[React](https://reactjs.org/)
[Redux](https://redux.js.org/)
[Thunk](https://github.com/reduxjs/redux-thunk)
[Ruby on Rails](https://rubyonrails.org/)

# Contributing

# License

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/3.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.

# More Demo

![screenshot_3](public/images/screenshot_3.png)
