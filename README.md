# node-boilerplate-server
A great boilerplate node server for email and password authentication 

## Client side authentication

The repo goes hand in hand with a client side app that can be found [here](https://github.com/thomasrobertgee/react-client-authentication).

or you can just clone it:

`git clone https://github.com/thomasrobertgee/react-client-authentication.git`

If you know what you're doing, go ahead and get started. But for just in case, below is a step by step guide to get up and running!


##Getting Started##

### Before you start this, make sure you have the latest version of Node, Mongo and Mongoose installed. Also go ahead and download RoboMongo if you like, or just use your own favourite MongoDB GUI

1. Open up terminal and go to your local apps directory or anywhere else you want this app to be located

2. Create your app folder with `mkdir app`

3. Git clone the server app with `git clone https://github.com/thomasrobertgee/node-boilerplate-server.git`

4. Go into your server folder with `cd node-server-boilerplate/` and run `npm install`

5. When that has finished then open the directory in your code editor

6. In the main directory, create a file called config.js

7. In this file add the following code: 
```javascript
module.exports = { secret: 'foo' }
```
but replace ‘foo’ with a long key mixed with number and letters, can be anything you like, then save the file

8. Go into index.js in the main directory and replace the script on line 12 with the following: 
```javascript
mongoose.connect('mongodb://localhost:foo1/foo2')` 
```
foo1 will be the main app folder name e.g. app and foo2 will be whatever you want the database to be named e.g. appDB, then save the file

9. To check this worked, open RoboMongo then create a new connection (call it whatever you like) and check to see if the db has been created. If yes, a collection called users should have been automatically created 

10. Go back to your terminal and run `nodemon` 

11. The server should now be running on localhost:3090

12. Open a new tab and cd back to your main app directory with `cd ..`

13. Git clone client side app with `git clone https://github.com/thomasrobertgee/react-client-authentication.git`

14. Go into your client folder with `cd react-client-authentication/` and run npm install

15. Once that has finished you can then run `npm start`

16. Open another tab and run `mongod`

17. You can now navigate in a browser window to localhost:8080 and check if that app runs

18. If yes, go ahead and sign up, if successful you should be navigated to the feature window which will display a secret message, the contents of which can be edited by going into the node-server-boilerplate in your text editor, going to router.js in the main directory and to line 15

19. To check the email and password have been saved to the database, check the users collection in RoboMongo

20. And thats it! Go forth and create  


#### These apps were created by following Stephen Grider's Advanced React & Redux Udemy course, which can be found [here](https://www.udemy.com/react-redux-tutorial). I highly recommend this course!
