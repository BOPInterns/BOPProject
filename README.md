# Bop HUB intern project

Project created by Intern team for the BoP Hub website

## To run entire project locally

0. if first time with repo do "npm run inst"
1. type and enter "npm start"

## Cans kicked down the road...

- security with backend in general
- organizing backend code into different files (MVC architecture)
- phone number validation
- when user creates campaign, it adds their organization as the organization that owns the campaign
- forgot password functionality has nothing in place to ensure that new password does not equal old password
- When you click "load more" on the marketplace the button only disables after there are no more campaigns to load, ideally it should disable the second there are no more campaigns to load. Thinking it could be done with a useEffect hook but it keeps disabling the button on page render -B
- password reset code exists indefinitely instead of expiring after a certian amt of time
- Brian needs to go and update navbar for campaign creation
- For some reason when you create a campaign through the campaign creation form it won't render on the marketplace anymore? I'm guessing because the necessary campaign fields have changed since those pages were created? -B
- Load more recent projects on org page does not do anything

## Successful can kicks:

- store things like db link in ENV file
- make it so terminal commands can be run in BOPProject folder instead of front or backend
- email and text notif checkboxes enter in the database as 'false' even when they're checked off
- restructure the folders for consistency
- can't refresh on login page or google breaks it
- password reset email is sent to spam folder in gmail
- email validation to check for fake emails that have correct email format
- find a less jank way to display errors on login page -B
- I think creating a flexbox row to render the cards on the page would be simpler and have the browser do most of the math -B
- For some reason when you create a campaign through the campaign creation form it won't render on the marketplace anymore? I'm guessing because the necessary campaign fields have changed since those pages were created? -B
- file upload works but there is a limit to the size and type of file, also no security checking on this file
- enable users to upload several files when creating a campaign
- when uploading a file, if you click "cancel" when there's already a file there, it throws a runtime error