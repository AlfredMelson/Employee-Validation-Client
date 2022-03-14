## Secure Employee Registration Management : client-side

### Setup

1. Locate [expressjs server repo](https://github.com/AlfredMelson/registrant_validation_server)
2. install via yarn
3. run application via yarn start
4. open locally http://localhost:3000
5. Enter mocked user credentials {_username:_ admin, _password:_ admin}

### Features

1. Administrator registration/login/logout
2. Authentication secured without localStorage or sessionStorage
3. CRUD employees
4. Validation of registration data

### Security Strategy

The application utilizes JSON Web Tokens (JWT), regarded as a secure form of user identification, that is issued after the initial authentication takes place. Consideration was given as to cross-site scripting and cross-site request forgery when adopting this strategy. Access tokens are only stored in client-side memory (application state), allowing them to be deleted when the app is closed automatically. If stored in local storage or in a cookie - essentially somewhere with JavaScript, someone could utilise JavaScript to retrieve it. Refresh tokens are issued in an http only cookie that is not accessible with JavaScript. References below.

- Upon completion of the login process and authorization, the client receives from the API an access token and a refresh token in JSON. Expiration times for the access token are set to 10 minutes and 12 hours for the refresh token. Refresh tokens requires admins to re-authenticate after expiration, thus removing indefinite access.

- Note: Allowing refresh tokens the ability to issue new refresh tokens would essentially grant indefinite access. Therefore, the access token issued during admin authorization allows access to the API's protected routes until expiration.

- The rest API verifies the access token with middleware each time the access token is used to make a request. When the access token does expire the application sends the admins refresh token to the API's refresh endpoint to get a new access token.

- The API's refresh endpoint verifies the access token before cross-referencing the refresh token in the database. Storing a reference to the refresh token allows refresh tokens to be deleted before expiration if the admin logs out.

### JWT References:

- [Intro to JSON Web Tokens](https://jwt.io/introduction)
- [Storing JWT Tokens Securely in The Front-End](https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id)
- [Cross-Site Scripting (XSS)](https://owasp.org/www-community/attacks/xss/)
- [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)

### client-side Libraries

- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [ReactJs](https://reactjs.org/)
- [RecoilJs](https://reactjs.org/) - State management
- [React-router-dom](https://github.com/remix-run/react-router#readme) - Declarative routing
- [Mui](https://mui.com/) - Component library
- [Axios](https://axios-http.com/) - Promise based HTTP client
- [Framer-motion](https://github.com/framer/motion#readme) - Animation library
