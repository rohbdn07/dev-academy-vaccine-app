# Getting Started with Create React App

This project was bootstrapped with Create React App. This project is my implementation to display the data with visualization using graphs. Project contains Web UI implementation in ReactJs. Backend api handled by NodeJs and Express. The database used for storing Json data is MongoDB. Database contains pre-loaded dummy data. ChartJs is used for graphical presentation along with textual representation. Moreover, React-Redux, Redux-thunk is used for the state managements. In addition, for development mode,' npm Concurrently' is installed to serve/run both serives (front & backend) at once to display app on the screen. Moreover, the app is containerzied with Docker and Docker-compose to build and run multi-services in a development mode inside a container.
Please follow the instructions to run this app, below:

Desktop:
![dev-vaccine-desktop-version](https://user-images.githubusercontent.com/57314666/127071751-3bd32b5a-39ce-42ca-8889-ddae777ac8a7.png)

Mobile:
![dev-vaccine-mobile-version](https://user-images.githubusercontent.com/57314666/127075510-7761751f-7c2c-4942-9a14-0ba7bd513acb.png)

#### Environmental variable

You'll need following environment variables to connect api with database.
Database (MongoDB) contains some dummy data which was stored using Postman. Put this variables in /backend-node/app.js. (If you are running this app through using 'npm'). \
process.env.DB_USER=your database user \
process.env.DB_PASS=your database password \
process.env.DB_NAME=your database name

## Available Scripts

In the project directory, you can run the app either using command docker command or using npm command mentioned as below:

By using Docker:

### `docker-compose up --build`

Runs the app in the development mode. This single command: docker-compose up --build, will install all the npm dependencies (such as: npm install) and build the app
so that you don't need to install yourself after cloning this repo.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In case, if you are having problem to run the application through docker then I highly recommended you to see docker document: https://docs.docker.com/compose/

By using NPM:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `docker-compose down`

It will stops and removes the container which was created initially. And you will see nothing on the browser: Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Again to run the container and to display the contains in the browser, you have to run:

##### `docker-compose up --build`

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
