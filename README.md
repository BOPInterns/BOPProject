# Bop HUB intern project
Project created by intern team for the BoP Hub website

## To run entire project locally
0. if first time with repo do "npm  run inst"
1. type and enter "npm start"

## Cans kicked down the road...
* security with backend in general
* organizing backend code into different files (MVC architecture)
* phone number validation
* file upload works but there is a limit to the size and type of file, also no security checking on this file
* enable users to upload several files when creating a campaign
* when uploading a file, if you click "cancel" when there's already a file there, it throws a runtime error

## Successful can kicks:
* store things like db link in ENV file
* make it so terminal commands can be run in BOPProject folder instead of front or backend
* email and text notif checkboxes enter in the database as 'false' even when they're checked off
* restructure the folders for consistency
* can't refresh on login page or google breaks it
* password reset email is sent to spam folder in gmail
* email validation to check for fake emails that have correct email format
* find a less jank way to display errors on login page -B
