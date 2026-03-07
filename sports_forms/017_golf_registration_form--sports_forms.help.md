<thinking>
The Golf Registration Form is a form for golfers to register for a tournament. It appears to be a form for collecting general information from golfers, including their personal details, experience, and ratings. The form is likely to be used by golf clubs or organizations to track and manage golfer registrations.

Checking the form structure, it's designed with multiple fields for collecting various types of information such as first name, last name, email, phone number, team members, player experience, golf club, player rating, team rating, player handicap, team handicap, tournament date, tournament time, tournament location, and player registration.

Before proceeding, please ensure you have checked the form's purpose and that you are not duplicating an existing form.

</thinking>

# Golf Registration Form - Help Guide
## Purpose
The Golf Registration Form is a tool for golfers to register for a tournament, providing essential information for the organizers to manage and plan the event.

## How To Complete This Form
To complete the Golf Registration Form, follow these steps:

1. Fill in your First Name and Last Name in the corresponding fields.
2. Enter your Email and Phone numbers to ensure we can contact you for any updates.
3. Indicate if you have Team Members by selecting "Yes" or "No" from the Team Members dropdown menu.
4. Choose your Player Experience from the options (Team Player, Club Player, or Novice).
5. Select your Golf Club from the options (None, Country Club, Golf Club, or Local Club).
6. Enter your Player Rating and Team Rating (if applicable).
7. Select your Player Handicap from the options (0-15).
8. Choose the Team Handicap from the options (0-15).
9. Enter the Tournament Date in the date format (MM/DD/YYYY).
10. Enter the Tournament Time in the time format (HH:MM AM/PM).
11. Provide the Tournament Location in the text field.
12. Enter any other relevant comments or notes about your registration.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Please enter your first name.
* **Last Name** (`last_name`, `text`, required): Please enter your last name.
* **Email** (`email`, `email`, required): Enter your email address to receive updates about the tournament.
* **Phone** (`phone`, `text`, required): Enter your phone number for contact purposes.
* **Team Members** (`team_members`, `select_multiple`, optional): Indicate if you have team members, and select "Yes" to continue.
* **Player Experience** (`player_experience`, `select_one`, optional): Choose your level of experience (Team Player, Club Player, or Novice).
* **Golf Club** (`golf_club`, `select_multiple`, optional): Select your golf club from the options provided.
* **Player Rating** (`player_rating`, `number`, optional): Enter your player rating.
* **Team Rating** (`team_rating`, `number`, optional): Enter your team rating.
* **Player Handicap** (`player_handicap`, `select_one`, optional): Choose your player handicap from the options provided.
* **Team Handicap** (`team_handicap`, `select_one`, optional): Choose your team handicap from the options provided.
* **Tournament Date** (`tournament_date`, `date`, optional): Enter the date of the tournament in the MM/DD/YYYY format.
* **Tournament Time** (`tournament_time`, `time`, optional): Enter the time of the tournament in the HH:MM AM/PM format.
* **Tournament Location** (`tournament_location`, `text`, optional): Provide the location of the tournament.
* **Player Reg** (`player_reg`, `text`, optional): Enter any additional comments or registration information.

Note: Fields with a required status of `false` are optional and can be left blank if not applicable.
