# Change Colour REST API

![demo gif](./images/example.gif)

This is a simple example to demonstrate the use of REST APIs. The program will fetch a colour from the API and display it if there is no errors or show as gray if the request is unsuccessful.

## How it works

A function will return a random number between 1 and 16. This is fed int the [REQ|RES API](https://reqres.in/) which returns a hexadecimal colour code.

The API ony returns 13 values so the program is built to catch any `404` errors. Any time there is an error the colour will display as gray.

Every time the button is pressed an new number is generated and a new API call takes place.

## Demo

See the live site [here](https://johnpalmgren.github.io/REQ-RES-REST-API/)

## Skills used

- REST APIs
- Math functions
- Error catching
- Event handlers
