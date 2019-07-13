# _ABOUT_

This repo was designed and created to help provide clarity on how integration and unit testing works (including testing hooks!). At the time this repo was created, hooks aren't widely popular, nor used, yet so testing has been somewhat ambiguos to many. This repo will help in giving a basic understanding of integration and unit testing, as well a good platform to launch more research in testing React Hooks.

# Let's Begin

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
  - The `userController.js` is a basic way of adding user data to a database with encryption. (If you are unfamiliar with `bcrypt`, click [here](https://www.npmjs.com/package/bcrypt))
- `src`
- `test`
