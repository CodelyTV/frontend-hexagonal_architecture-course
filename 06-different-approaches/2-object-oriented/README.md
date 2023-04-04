<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px" alt="Codely logo"/>
  </a>
</p>

<h1 align="center">
  🪩 Hexagonal Architecture example: Object Oriented
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  App created with the <a href="https://github.com/CodelyTV/cra-template-codely">🌱⚛️ Create React App Codely template</a> 
</p>

## 🚀 Run the app

- `npm install`: Install dependencies
- `cp .env.example .env`: Create the environment variables file based on the example template
- `vim .env`: Specify your GitHub Personal access token ([how to get it](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) -> [your tokens](https://github.com/settings/tokens) -> Enable `Repo.public_repo`)
- `vim src/devdash_config.ts`: Set the repository URLs you want to show on your *DevDash_*
- `npm start`: Run in dev mode on [localhost:3000](http://localhost:3000)
- `npm run build`: Generate production build

## ✅ Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

### End-to-end tests

- `npm start`: Run in dev mode on [localhost:3000](http://localhost:3000)
- Run end-to-end tests with Cypress choosing one of the following options:
  - `npm run cy:open`: Open Cypress in dev mode
  - `npm run cy:run`: Execute Cypress in CLI

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🔀 Related information

This application was generated using the [🌱⚛️ Create React App Codely template](https://github.com/CodelyTV/cra-template-codely). Feel free to check it out and star the repo! 🌟😊🙌
