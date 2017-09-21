# Numbers App

## Overview

This is a simple application to demonstrate the use of Node.js and Angular 4 to build a responsive single page application. It consists of a simple REST API with endpoints to add to, retrieve, and manipulate an in-memory list of numbers on the backend and a simple Angular single page web app to allow users to interact with it.

## Technology

This app is built using the following technologies.

- Node v8.4.0
- npm 5.4.2
- Angular 4.2.4
- Bootstrap 4

## How to run

#### Pre-requisites

The following are required to run the site locally.

- Node
- npm
- Angular cli for devlopment ( ```npm install -g @angular/cli``` )

#### Steps

1. Install dependencies for the server.
    - ```npm install```
2. Build the front end assets.
    - ```ng build```
3. Run the app
    - ```npm start```

## Testing

This project includes server side and Angular tests. The following commands can be used to run the tests.

1. ```npm test```
    - For server side tests.
2. ```ng test```
    - Angular component tests.
3. ```ng e2e```
    - End to end tests.

