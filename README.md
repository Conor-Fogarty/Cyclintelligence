**Clone the Repository:**
```sh
git clone https://github.com/Conor-Fogarty/Cyclintelligence
cd DashboardWebsite
```
Hello!

How to start this application:
First Clone the server above 
For demonstration purposes my current iteration if this program is hosted at this file locaiton: C:\Users\Conor Fogarty\Documents\GitHub\CS326\DashboardWebsite\src

To start Express PouchDb and Http Server, following the download of this program open your CMD and enter these commands in this order:
 WARNING: YOU MUST DELETE THE USER FOLDER IF IT APPEARS BEFORE ATTEMPTING TO SIGN-UP
cd C:\Users\Conor Fogarty\Documents\GitHub\CS326\DashboardWebsite\src\backend
(replace everything after cd with your exact file locaiton)
npm install
node server.js

To close this program simply close the CMD iteration that you just used!


API Documentation 

Create User Account
Endpoint: /signup
HTTP Method: POST
Description: Creates a new user account with a unique username and password.
Parameters: None
Request Body:
{
	“username” : “string”,
	“password” : “string”
}
Success (HTTP 201)
{
“message” : “Signup successfully!”
}
Error (HTTP 404)
{
“error” : “Username already exists”
}
Error (HTTP 500)
{
	“error” : “Internal server error”
}
Example 
Request 
bash: 
curl -X POST http://localhost:3000/signup -H "Content-Type: application/json" -d '{"username": "CS325", "password": "password123"}'
Response
{
	“message” : “Signup successful!”
}

User Login
Endpoint: /login
HTTP Method: POST
Description: Authenticates a user by verifying the username and password.
Parameters: None
Request Body:
{
  "username": "string",   // Required, the username of the account
  "password": "string"    // Required, the password of the account
}
Response Body:
Success:
HTTP Status Code: 200 OK
{
  "message": "Login successful!"
}
Error:
HTTP Status Code: 400 Bad Request
{
  "error": "Invalid username or password."
}
Example:
Request:
bash curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "CS325", "password": "password123"}'
Response:
{
  "message": "Login successful!"
}

Get User Goals
Endpoint: /goals/:username
HTTP Method: GET
Description: Retrieves the goals for the specified user.
Parameters:
username (string, required): The username of the account to retrieve goals for.
Request Body: None
Response Body:
Success:
HTTP Status Code: 200 OK
{
  "weeklyMileage": "string",
  "monthlyMileage": "string",
  "dailyCalories": "string",
  "weight": "string",
  "weeklyExercise": "string",
  "monthlyExercise": "string"
}
Error:
HTTP Status Code: 404 Not Found
{
  "error": "User not found."
}
Example:
Request:
bash curl -X GET http://localhost:3000/goals/CS325
Response:
{
  "weeklyMileage": "30",
  "monthlyMileage": "120",
  "dailyCalories": "2000",
  "weight": "150",
  "weeklyExercise": "3h",
  "monthlyExercise": "12h"
}


Update User Goals
Endpoint: /goals/:username
HTTP Method: PUT
Description: Updates the goals for the specified user.
Parameters:
username (string, required): The username of the account to update goals for.
Request Body:
{
  "weeklyMileage": "string",   // Optional, the new weekly mileage goal
  "monthlyMileage": "string",  // Optional, the new monthly mileage goal
  "dailyCalories": "string",   // Optional, the new daily calorie goal
  "weight": "string",          // Optional, the new weight goal
  "weeklyExercise": "string",  // Optional, the new weekly exercise time goal
  "monthlyExercise": "string"  // Optional, the new monthly exercise time goal
}
Response Body:
Success:
HTTP Status Code: 200 OK
{
  "message": "Goals updated successfully!"
}
Error:
HTTP Status Code: 500 Internal Server Error
{
  "error": "Failed to update goals."
}
Example:
Request:
bash
curl -X PUT http://localhost:3000/goals/CS325 -H "Content-Type: application/json" -d '{"weeklyMileage": "35", "weight": "145"}'
Response:
{
  "message": "Goals updated successfully!"
}


Delete User Account
Endpoint: /users/:username
HTTP Method: DELETE
Description: Deletes the specified user account.
Parameters:
username (string, required): The username of the account to delete.
Request Body: None
Response Body:
Success:
HTTP Status Code: 200 OK
{
  "message": "User account deleted successfully."
}
Error:
HTTP Status Code: 404 Not Found
{
  "error": "User not found."
}
Error:
HTTP Status Code: 500 Internal Server Error
{
  "error": "Failed to delete user account."
}
Example:
Request:
bash
curl -X DELETE http://localhost:3000/users/CS325
Response:
{
  "message": "User account deleted successfully."
}












