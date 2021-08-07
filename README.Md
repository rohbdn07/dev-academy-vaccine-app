# Getting Started with Dev-vaccine App

This project was bootstrapped with Create React App. This project is my implementation for an assignment given by solita dev academy-2021. Project contains Web UI implementation in ReactJs. Backend api handled by NodeJs and Express. The database used for storing Json data is MongoDB. ChartJs is used for graphical presentation along with textual representation. Moreover, React-Redux, Redux-thunk is used for the state managements. In addition, for development mode,' npm Concurrently' is installed to serve/run both serives (front & backend) at once to display app on the screen. Moreover, the app is containerzied with Docker and Docker-compose to build and run multi-services in a development mode inside a container.
Please follow the instructions to run this app, below:


Desktop:
![latest-app-screnshot-for-desktop-screen](https://user-images.githubusercontent.com/57314666/128486112-d24926d1-3dcb-4aeb-a291-1622e6b1265c.png) 

Mobile:
![latest-app-screenshot-for-mobile-view](https://user-images.githubusercontent.com/57314666/128486547-13ee016c-c331-4dde-882a-cf50a405010d.png)


#### Environmental variable

You'll need following environment variables to connect api with database. 
Database contains some dummy data. Put this variables in /backend-node/app.js. (If you are running this app through using 'npm'). \
DB_USER=rohit-dev \
DB_PASS=Iwanttoconnect

## Available Scripts

You can run this app in development mode, either using `npm` Or using `docker`. 
#### Docker way: 

Go to project's root directory (outside of client-react and backend-node folders), simply run this command: 

### `docker-compose up --build` 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. \
Note: In case, if this gives an error, showing 'network error' in localhost:3000 then kindly check environment variables used for mongodb connection in backend-node folder. Possible reason for error is bad authentication for mongodb connection to Atlas.

To stop the docker container, run this command in the project's root directory: 
### `docker-compose down` 
This command stops all container services and removed. For more info on docker, visit: https://docs.docker.com/

#### NPM way:

Before starts the app, please install 'node_modules' on both folders (client-react and backend-node) separately using: \
`npm install`

Then, In the project's root directory, you can run the app using command:
### `npm run dev` 

Runs the app in the development mode.\
 Note: 'concurrently' is installed to serve/run both folders (client-react & backend-node) at once to display app on the screen so that you can avoid running services seperately in seperate terminal or command-line.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
