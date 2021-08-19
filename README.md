## Online hardware store
This project is a web application for a fictional online hardware store. It was built using ReactJS, NodeJS and sqlite3.

## Requirements
You need to have Node (npm) installed in your machine if you wish to run this.

## How to run
**Step 1.** First, update all your packages according to the package.json file. Both for front-end and back-end.

For the front-end, from the main directory, navigate to "frontend" through your terminal, then call "npm install".
```
.../$ cd frontend/ 
.../$ npm install
```

**Step 2.** Then go back to the main directory and do the same for the backend (server).
```
.../$ cd ../
.../$ cd server/ 
.../$ npm install
```

**Step 3.** Finally, first start the server, from the "server/" directory, type:
```
.../$ npm start
```

If all went well, you will see this message in your terminal:
```
Listening to port 3333.
Connected to the database.
```

**Step 4.** Next, start the frontend, don't forget to go back to the main directory and back to "frontend/"
```
.../$ cd ../
.../$ cd frontend/ 
.../$ npm start
```

If all went well, you should get a "Compiled successfully!" message in your terminal, and your browser will pop-up and load the application 
(this can take some time depending on your machine).

If you wish to run the Jest test module, navigate to "server/tests" and run "npm run test".
```
.../$ cd server/tests
.../$ npm run test
```
