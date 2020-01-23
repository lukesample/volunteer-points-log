![](https://github.com/WebDevJBR/volunteer-points-log/workflows/volunteer-points-log-ci/badge.svg)

# Volunteer Points Log
Application that allows SCA Gulf Wars volunteers to log their hours and accrue points.

## Connecting to database

### CLI

### IDE

-  **Visual Studio Code** - It is recommended to use vscode since that is the editor we have configured for debugging. If you decide to use another editor you may not be able to debug the server side of the application correctly.

## Install
Run ```npm install``` in the root directory of the project as well as in the ```/client/``` folder.

## Building
To build the application for deployment to the server, run the following command from the root directory of the project:

```npm run build```

The ```build``` script will build both the server and client, then moves the client build to the server build to merge both of them.

## Running Locally
The most ideal way of running the application locally is running the following command from the root directory of the project:

```npm run start:dev``` 

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The ```start:dev``` script will build both the server and client, moves the client build to the server build, then starts ```nodemon``` for debugging and live reloading.  You should never try to run the client and server seperately.

## Running on Server
```npm start:prod```

Open [http://localhost](http://localhost) to view it in the browser.

The ```start:prod``` script is similar to the ```start:dev``` script except that it is for production use only and will not run ```nodemon``` for debugging and live reloading.

## Running Tests

### Client
```cd client```

```npm run test```

### Server
```npm run test```