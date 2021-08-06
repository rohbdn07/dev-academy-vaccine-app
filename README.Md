# Getting Started with Create React App

This project was bootstrapped with Create React App. This project is my implementation of an assignment given by solita dev academy-2021. Project contains Web UI implementation in ReactJs. Backend api handled by NodeJs and Express. The database used for storing Json data is MongoDB. ChartJs is used for graphical presentation along with textual representation. Moreover, React-Redux, Redux-thunk is used for the state managements. In addition, for development mode,' npm Concurrently' is installed to serve/run both serives (front & backend) at once to display app on screen.

Desktop:
![latest-app-screnshot-for-desktop-screen](https://user-images.githubusercontent.com/57314666/128486112-d24926d1-3dcb-4aeb-a291-1622e6b1265c.png) 

Mobile:
![latest-app-screenshot-for-mobile-view](https://user-images.githubusercontent.com/57314666/128486547-13ee016c-c331-4dde-882a-cf50a405010d.png)


#### Environmental variable

You'll need following environment variables to connect api with database. 
Database contains some dummy data. Put this variables in /backend-node/app.js. \
DB_USER=rohit-dev \
DB_PASS=Iwanttoconnect

## Available Scripts

In the project's root directory, you can run the app using command:
### `npm run dev` 

Runs the app in the development mode.\
 'concurrently' is installed to serve/run both serives (front & backend) at once to display app on screen so that you can avoid running services seperately from your terminal.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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
