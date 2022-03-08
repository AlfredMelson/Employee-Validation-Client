# User management frontend

## Setup & Scripts

- server (expressjs) located in seperate repo: https://github.com/AlfredMelson/registrant_validation_server
- run `yarn`
- run `yarn start`. make sure required ports are available
- open `http://localhost:3000/`
- Enter mocked user credentials

  _username:_ `admin`
  _password:_ `admin`

## Current tasks (4March2022)

[ ] Add tests
[ ] Refactor as needed

## Feature set

1. Administrator registration/login/logout
2. Persistent authentication with JWT Tokens
3. Authentication secured without localStorage or sessionStorage
4. CRUD employees

## Libraries

- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [ReactJs](https://reactjs.org/)
- [RecoilJs](https://reactjs.org/) - State management
- [React-router-dom](https://github.com/remix-run/react-router#readme) - Declarative routing
- [Mui](https://mui.com/) - Component library
- [Axios](https://axios-http.com/) - Promise based HTTP client
- [Framer-motion](https://github.com/framer/motion#readme) - Animation library
