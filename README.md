# Interview task: User management

## How to start

- create a GitHub project from the template by clicking `Use this template` and filling the information required
- create a new branch `develop`
- before returning the task create a merge request from `develop` to `master` in your repository, so it's easier to see all the changes

## Setup

- launch server located in seperate repo: https://github.com/AlfredMelson/mygomtech_server instrutions are in the README.md file

- run `yarn` to install this web module
- run `yarn start`. make sure required ports are available
- open `http://localhost:3000/`
- Enter your mocked user credentials

  _username:_ `admin`

  _password:_ `admin`

## Scripts

`yarn start` - starts dev server

## Information

Don't forget that mocked backed server doesn't store your tokens in database they are stored in memory, so your tokens will be invalid after server restart.

## Tasks

[ ] Complete administrator validatation
[ ] Setup employee validatation
[ ] Add tests
[ ] Refactor code

[*] logout button
[*] Create additional tab (old) that should show emails older than 30d
[*] Validate login username, password
[ ] Add loader to login page
[ ] After Email update page should not be reloaded
[*] Add worng emails filter
[ ] Add tests
[ ] Refactor to make the code neat and clean - this will keep your teammates happy
[ ] Fix as many errors as you notice
