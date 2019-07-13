# **_ABOUT_**

This repo was designed and created to help provide clarity on how integration and unit testing works (including testing hooks!). At the time this repo was created, hooks aren't widely popular, nor used, yet so testing has been somewhat ambiguos to many. This repo will help in giving a basic understanding of integration and unit testing, as well a good platform to launch more research in testing React Hooks.

# **Let's Begin**

- Fork and clone
- Create a `.env` file to mock the given `.env.example` file
- Run `npm install`

## **Step 1:** Dependencies

- To have the initial test environment run correctly, I placed the testing file in the `src` folder. I'll revisit why a little later.
- Check your `package.json` file to be sure the below dependencies are there.
- If one or more are missing, simply copy the missing package from the below list of needed dependencies;

```
bcrypt
http-proxy-middleware
dotenv
express
express-session
jooks
massive
sinon
@testing-library/react
react-test-renderer
```

## **Step 2:** Evironment SetUp

- Once the needed packages are installed, look through the files to see the structure I've laid out.
- `db`
  - You will need to create a database and run the the `init.sql` file. This will create an empty `'users'` table that we will be using for later testing.
  - Familiarize yourself with what the other two `sql` documents are doing. They should be fairly familiar.
- `server`
  - Locate the `index.js` file. This is a simple server. This too should be fairly simple and familair to you.
  - I'm not using a `controller` directory in this example, but this will have no impact on your tests.
  - The `userController.js` will show a basic way of adding user data to a database with password encryption. _(If you are unfamiliar with `bcrypt`, see the below `Additional Resources` section.)_
  - I'm using sessions, because the live version of any potential app will be using sessions. **It is vital to run all tests on your actual, live code.**
- `src`
  - This direcotry will containg the `TEST` directory which will hold all of out test.
  - Also in `src`, you will see this is where all of the front-end functions and hooks are declared. Their corresponding tests will be located in the `TEST` directory.
    - Future commits will have comments explaining the code in these files
- `test`
  - This directory holds a single file, `init.js`. This will be needed for any/all integration testing.

## **Step 3:** Create & Run Tests

- All tests are in the `TEST` folder.
- Having the `TEST` direcotry in the `src` directory will allow us to run a single command in the terminal to have ALL tests run.
- When creating the tests, it is pivotal that you have a deep understanding of the logic behind the functions you are testing. You will need this understanding to properly pass data into your test, and to know what the EXACT output should be.
- The single command you will use to run the tests, will be as follows:

```
npm test
```

**OR**

```
npm run test
```

- If a secondary menu appears, simply select the option to `"run all tests"` by tapping the `a` button.

# **_Additional Resources_**

Click on the following package you'd like to learn more about.

bcrypt
http-proxy-middleware
dotenv
express
express-session
jooks
massive
sinon
@testing-library/react
react-test-renderer

##### _FUTURE ADDITIONS WILL BE MADE TO THIS REPO REGARDING ASYNCHRONOUS HOOKS, AND IN-LINE COMMENTARY EXPLAINING THESE TESTS._

##### This repo created by [Evan Boggs](https://github.com/evboggs302) with assistance from an article by [Antoine Jaussoin.](https://medium.com/@jantoine/another-take-on-testing-custom-react-hooks-4461458935d4)
