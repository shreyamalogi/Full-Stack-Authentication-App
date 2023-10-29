# Full-Stack Authentication App:

[![GitHub stars](https://img.shields.io/github/stars/shreyamalogi/Full-Stack-Authentication-App.svg?style=social)](https://github.com/shreyamalogi/Full-Stack-Authentication-App/stargazers)

### Project Details: 💻🌐📅

- **Functionality:** Implements user authentication using Passport.js with local and Google OAuth 2.0 strategies. 🛡️🌐
- **Tech Stack:** `Node.js`, `Express.js`, `MongoDB`, `Passport.js`, `EJS`, `CSS` 🚀💻
- **Author:** [@shreyamalogi](https://github.com/shreyamalogi/) 👩‍💻
- **Year of Project:** 2022 📅

# Table of Contents ✍️

1) [Introduction](#introduction-)

2) [Challenges Faced during Authentication Evolution](#challenges-faced-during-authentication-evolution-%EF%B8%8F)

3. [Dependencies](#dependencies-)

5. [Navigating Project Evolution](#navigating-project-evolution)

6. [How to Run](#how-to-run-)

7. [How to Start from Scratch](#how-you-can-make-from-scratch)

8. [License](#license-%EF%B8%8F)

9. [Contribution](#contribution---show-your-support-star-this-)


---

# Introduction 🌐

This is a Node.js web application built by **Shreya Malogi** with Express.js, MongoDB, and Passport.js for user authentication. The application includes local authentication (username and password) and Google OAuth 2.0 authentication. 🚀🔐

## Challenges Faced during Authentication Evolution: 🛡️

1. **Password Hashing Algorithm:**
   - **Challenge:** Selecting a secure password hashing algorithm.
   - **Solution:** Started with `md5` and transitioned to the more secure `bcrypt` for robust password hashing. 🔒🔐

2. **Passport.js Integration:**
   - **Challenge:** Integrating Passport.js for user authentication.
   - **Solution:** Initially used `md5` and `bcrypt`, later adopted Passport.js for a streamlined authentication process. 🤝🚀

3. **Environment Variables Security:**
   - **Challenge:** Managing sensitive info like Google OAuth credentials.
   - **Solution:** Used `dotenv` to securely load environment variables from a `.env` file. 🔒🔐



## Dependencies 📦🚀

- **[express](https://expressjs.com/)**: Web application framework for Node.js. 🌐
- **[body-parser](https://www.npmjs.com/package/body-parser)**: Node.js body parsing middleware. 🤖
- **[ejs](https://ejs.co/)**: Embedded JavaScript templates. 🎨
- **[mongoose](https://mongoosejs.com/)**: MongoDB object modeling tool. 🍃
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Loads environment variables from a `.env` file. 🔒
- **[express-session](https://www.npmjs.com/package/express-session)**: Session middleware for Express.js. 🕐
- **[passport](http://www.passportjs.org/)**: Simple, unobtrusive authentication middleware for Node.js. 🛡️
- **[passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose)**: Passport.js plugin for simplifying username and password auth. 🤝
- **[passport-google-oauth20](http://www.passportjs.org/packages/passport-google-oauth20/)**: Passport.js for authenticating with Google using OAuth 2.0.🌐
- **[mongoose-findorcreate](https://www.npmjs.com/package/mongoose-findorcreate)**: Mongoose plugin for simplifying the `findOneOrCreate` operation. 🔄



## Navigating Project Evolution:
 
 To view detailed information about each commit and understand what happened at each version, you can use the `git log` command without any additional filters. Here's how:

```bash
git log
```

🔄💡 This command will display a chronological list of all commits in your repository. Each commit entry includes information such as the commit hash, author, date, and commit message. The commit message typically provides a summary of the changes made in that commit.

Navigate through the log using the arrow keys. Press `q` to exit and return to the command line.

If you want to see a condensed version of the log, you can use:

```bash
git log --oneline
```

💻🔍 This will display each commit as a single line, showing only the commit hash and the first line of the commit message.

To see the changes introduced in a specific commit, you can use:

```bash
git show <commit-hash>
```

Replace `<commit-hash>` with the actual commit hash you want to inspect. This command will display detailed information about the specified commit, including the changes made to files.

This way, you can review the commit history, understand the changes made at each version, and inspect specific commits for detailed information about the modifications introduced.🚀📖👀



## How to Run? 🚀🔐

**Prerequisites:**
- [Node.js](https://nodejs.org/) 🌐
- [npm (Node Package Manager)](https://www.npmjs.com/) 📦
- [MongoDB](https://www.mongodb.com/) 🍃

1. **Start MongoDB Server:**
   - Ensure that your MongoDB server is running. If not, start it using:
     ```bash
     mongod
     ```
     Keep the `mongod` server running throughout the setup.

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/shreyamalogi/Full-Stack-Authentication-App.git
   ```



3. **Navigate to the Project Directory:**
   ```bash
   cd <project-directory>
   ```

4. **Install Dependencies:**
   ```bash
   npm install
   ```

5. **Create a `.env` File:**
   - In the root directory, create a `.env` file.
   - Add the following content:
     ```env
     CLIENT_ID=<your-google-client-id>
     CLIENT_SECRET=<your-google-client-secret>
     ```
     Replace `<your-google-client-id>` and `<your-google-client-secret>` with your Google OAuth 2.0 credentials.

6. **Run the Application:**
   ```bash
   node app.js
   ```
  

7. **Open Your Web Browser:**
   - Visit [http://localhost:3000](http://localhost:3000) to access the home page.
   - Login and registration pages are available at [http://localhost:3000/login](http://localhost:3000/login) and [http://localhost:3000/register](http://localhost:3000/register). 🚪👥
   - Google authentication is available at [http://localhost:3000/auth/google](http://localhost:3000/auth/google). 🚀🔑
   
8. **Register and Login:**
   - Click on "Register" and sign up with your `username` and `password`.
   - Log in to access the brand new `secrets page`. 🌟

🌐🔐



## How you can make from scratch?
[click here for secrets app guidelines/references](https://github.com/shreyamalogi/WEBD-BOOK/blob/main/2_backend/08_passportjs/passportjs.pdf)

[click her for secrets app overview](https://github.com/shreyamalogi/secrets-app/blob/main/secrets%20overview.pdf)



## License 🕊️

This project is enchanted under the spell of the MIT License. Share the magic responsibly!

MIT License

Copyright (c) 2022 Shreya Malogi

## Contribution - Show Your Support (Star This) ⭐🌟📜✨

Excited about web security spells? Contribute to this magical project and make it even more secure. Don't forget to star the project! ⭐🌟

