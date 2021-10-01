# MY APP
This project contains 4 main folders:
1. server folser-this folder contains 4 sub folders:
  
    1.1. controller folder- this folder contains the exported functions such as-
      -findAll- to find all orders from yesterday in the database.
      -create- to create a new order.

    1.2. database folder- contains the connection to the database file.

    1.3. routes folder- contains the index.js file and the router.js file, which has all the get and post to the APIs and services.

    1.4. services folder- contains a render.js file which redirect to specific routes such as homeRoutes, addOrderRoutes and getOrdersRoutes to the APIs using axios.

2. Orders folder- contains the database manipulations which are accessed from the controller. 

3. views folder- contains 3 ejs files- index.ejs that represents the main page, addOrder.ejs that represents the add order action, and getOrders.ejs that repressents the get yesterday's orders action.

4. assets folder- has a sub folder "css" wich contains the css files for the ejs pages.

In addition, the project contains an app.js file which connect to the server.

The package.json file contains all the depandencies of the project.

# Instructions:
1. Clone the project from git.
2. Run the comand "npm init" to install all the depandencies for the project.
3. Run the command "node app.js" to start the server.


