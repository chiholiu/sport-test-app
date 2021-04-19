**Docker compose to run the products services all in one**

It runs a mongo db, product service and price engine after running the following command.

`docker-compose up`

This will create also some dummy data, in order to see how this get's created just check postman folder.

You'll find there the collection that is run.

## How to get this on my local machine

### Clone

- Clone this repo to your local machine using `https://github.com/chiholiu/sport-test-app`

### Built with

- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [Eslint](https://eslint.org/)
- [Styled-components](https://styled-components.com/)
- [Enzyme](https://enzymejs.github.io/enzyme/)

## Available Scripts

In the project directory, you can run:

### How to run the app

Run Docker(Make sure you installed Docker on your local machine and if you download latest version of Docker, just update macOS is updated to version 11)

- brew cask install docker
- docker-compose up

Run React App

- cd product-reviews-docker-composter
- npm install
- npm run start

### How the app works

- When you type in the article number it will immediately update the search result
- Then the HomePage will be redirected to the ReviewPage
- Responsive design included

### Check on linting error

- npm run lint

### Fixing linting error

- npm run lint:fix

### Deploy website

- npm run build

## Which packages (version) do I need to run this

#### Dependencies

- testing-library/jest-dom ^5.11.4,
- @testing-library/react ^11.1.0",
- @testing-library/user-event ^12.1.10",
- axios ^0.21.1",
- babel-eslint ^10.1.0",
- enzyme ^3.11.0",
- enzyme-adapter-react-16 ^1.15.6,
- eslint-config-airbnb ^18.2.0",
- eslint-plugin-import ^2.22.0",
- eslint-plugin-prettier ^3.4.0",
- eslint-plugin-react ^7.23.2",
- prop-types ^15.7.2",
- react ^17.0.2",
- react-dom ^17.0.2",
- react-rating-stars-component ^2.2.0",
- react-redux ^7.2.3",
- react-router-dom ^5.2.0",
- react-scripts 4.0.3",
- redux ^4.0.5",
- redux-thunk ^2.3.0",
- styled-components ^5.2.3",
- web-vitals ^1.0.1"
