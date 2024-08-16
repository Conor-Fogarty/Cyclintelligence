**Clone the Repository:**
```sh
git clone <https://github.com/Conor-Fogarty/DashboardWebsite>
cd DashboardWebsite
```
Hello!
How to start this application:
First Clone the server above 
For demonstration purposes my current iteration if this program is hosted at this file locaiton: C:\Users\Conor Fogarty\Documents\GitHub\CS326\DashboardWebsite\src

To start Express PouchDb and Http Server, following the download of this program open your CMD and enter these commands in this order:
 
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
}
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














