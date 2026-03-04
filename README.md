# Weather Module

Simple hardcoded proof of concept to integrate with the React Shell

## Packages

* React - 19.2.4
* React-Dom - 19.2.4
* Vite - 7.3.1
* @originjs/vite-plugin-federation - 1.4.1

*Latest pinned as of 03/26*

## Todo

- [ ] npm -> pnpm
- [ ] Better server error logging
- [ ] server.js -> .ts

## Docker

Build image:
`docker build -t mfe-weather .`

Container (default):
`docker run --name mfe-weather -p 3001:3001 mfe-weather`
