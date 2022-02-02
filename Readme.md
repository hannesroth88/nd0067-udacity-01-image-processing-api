# Description

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

For this project, refactor and test as much as possible while you are building. Since you are using TypeScript and an unfamiliar library, it is sometimes easier to write and build in plain JS to see what your functions return; remember your submission needs to be in TypeScript. As your skills improve, typing in TypeScript will feel more intuitive. Make sure to remove any debugging code from your final submission.

for further details see: [Udacity Github](https://github.com/udacity/nd-0067-c1-building-a-server-project-starter/blob/master/README.md#image-processing-api)

# Endpoints

## Usage:

http://localhost:8080/api/images?imageName=xyz&width=yourWidth&height=yourHeight

## Query Parameters:

<strong>imageName:</strong> The name of Image on the server (without file-extension)<br>
<strong>width:</strong> Desired width of you image in pixels<br>
<strong>height:</strong> Desired height of you image in pixels

# Scripts

## LINT

`npm run lint`
uses eslint

## TEST

`npm run test`
will run Tests using jasmine.
in prior you need to start your server with npm run dev or start

## DEV

`npm run dev`

1. uses prettier
2. starts server, will constantly check if a file has been changed and thus reloads.

## Productive

1. uses prettier
2. starts server
   `npm run start`

# Literature used

<ol>
    <ul>Udacity lessons</ul>
    <ul>https://khalilstemmler.com/blogs/typescript/node-starter-project/</ul>
    <ul>https://gist.github.com/tracker1/59f2c13044315f88bee9 Project Structure</ul>
</ol>
