<thinking>
We can assume that the form is for registering a team for a summer league, likely for sports activities. This form likely requires information about the team such as name, email, coach's name, sports and divisions they participate in, dates for team sport and league dates, coach's contact information, and possibly additional optional information like team motto, logo, website, address, and notes. We will not output this information in the guide as it's already included in the form.

We will not assume any further business logic or validation rules and will focus on the provided information only.

This guide is intended to help users understand what information is required and what is optional for the summer league team registration.
</thinking>

# summer_league_team_registration_form - Help Guide
## Purpose
This guide will walk you through the process of completing the summer league team registration form.

## How To Complete This Form
To complete this form, follow the steps below:

1. Start by filling in the required fields, which are marked as "required" in the form.
2. Enter your team's name in the "Team Name" field.
3. Provide your team's email address in the "Team Email" field.
4. Enter your name, which will be associated with your team, in the "Coach Name" field.
5. Select your team's level of experience/competence in the "Team League Level" field.
6. Choose the sports your team participates in from the "Team Sport" field.
7. Choose your team's division in the "Division" field.
8. Provide the date of your team's sport event in the "Team Sport Date" field.
9. Enter the date of your team's league event in the "Team League Date" field.
10. Enter your contact phone number in the "Coach Phone" field.
11. (Optional) If your team has a motto, enter it in the "Team Slogan" field.
12. (Optional) If your team has a logo or website, enter the information in the "Team Logo" and "Team Website" fields respectively.
13. (Optional) If your team has an address, enter it in the "Team Address" field.
14. (Optional) If your team has a phone number, enter it in the "Team Phone" field.
15. (Optional) If your team has any additional notes, enter them in the "Team Notes" field.

## Field-by-Field Explanation
* **Team Name** (`team_name`, `text`, required): Enter your team's name.
* **Team Email** (`email`, `email`, required): Enter your team's email address.
* **Coach Name** (`coach_name`, `text`, required): Enter your name, which will be associated with your team.
* **Team League Level** (`team_league_level`, `select_one`, required): Choose your team's level of experience/competence.
* **Team Sport** (`team_sport`, `select_multiple`, required): Choose the sports your team participates in.
* **Division** (`division`, `select_one`, required): Choose your team's division.
* **Team Sport Date** (`team_sport_date`, `date`, required): Enter the date of your team's sport event.
* **Team League Date** (`team_league_date`, `date`, required): Enter the date of your team's league event.
* **Coach Phone** (`coach_phone`, `text`, required): Enter your contact phone number.
* **Team Slogan** (`team_slogan`, `text`, optional): Enter your team's motto (if applicable).
* **Team Logo** (`team_logo`, `text`, optional): Enter your team's logo (if applicable).
* **Team Website** (`team_website`, `text`, optional): Enter your team's website (if applicable).
* **Team Address** (`team_address`, `text`, optional): Enter your team's address.
* **Team Phone** (`team_phone`, `text`, optional): Enter your team's phone number.
* **Team Notes** (`team_notes`, `note`, optional): Enter any additional notes about your team.
