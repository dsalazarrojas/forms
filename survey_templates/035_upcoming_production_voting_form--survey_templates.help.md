<thinking>
This form is designed to collect information for an upcoming production vote. The form allows users to cast a vote for one of three production teams and provide additional information about their selection. This form will help us understand which team has the most support and gather feedback for future productions. Please note that this form is not a formal vote, but rather a way to gauge interest and opinions. If you are not associated with any of the production teams, please do not vote. If you are associated with multiple teams, you can select all relevant teams. If you are unsure about any of the fields, please feel free to ask for clarification.
</thinking>

# upcoming_production_voting_form - Help Guide
## Purpose
This form is designed to collect information for an upcoming production vote, allowing users to cast a vote for one of three production teams and provide additional feedback.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Select the production team(s) you are associated with from the "Production Team" dropdown list.
2. Choose a single team for the "Vote" field, or select multiple teams if you are associated with multiple teams.
3. Provide your email address in the "Email" field. This is optional but helps us contact you with your vote results and any follow-up questions.
4. Enter your vote reason in the "Vote Reason" field, if you'd like to provide additional context for your vote.
5. Enter any additional notes or comments in the "Note" field.
6. Fill out the "Show Description" field with any relevant information about the show.
7. If you want to provide more details about your vote, you can enter a date and time in the "Date" and "Time" fields, respectively.
8. Finally, enter your phone number in the "Phone" field, if you'd like to be contacted for further questions.

## Field-by-Field Explanation
- **Show Name** (`show_name`, `text`, required: false): Enter the name of the production show you are voting for.
  * This is the title of the production show you are voting for.
  * Make sure to enter the correct name to ensure your vote is counted correctly.
- **Production Team** (`production_team`, `select_multiple`, required: false): Select the production team you are associated with.
  * Choose one or multiple teams if you are associated with them.
  * If you are unsure, you can select "None" to indicate you are not associated with any team.
- **Vote** (`vote`, `select_one`, required: false): Choose a single team to vote for.
  * Make sure to select only one team to ensure your vote is counted correctly.
  * If you are associated with multiple teams, you can select one or multiple teams.
- **Ranking** (`ranking`, `number`, required: false): If you are voting for multiple teams, enter a ranking of your vote (e.g., 1, 2, 3).
  * This field is only required if you are voting for multiple teams.
  * Enter your ranking in order of preference (1 being your first choice, 2 being your second choice, etc.).
- **Date** (`date`, `date`, required: false): Enter the date you would be available to attend the production.
  * This is optional, but helps us plan for your availability.
  * Use the correct date format (e.g., YYYY-MM-DD).
- **Time** (`time`, `time`, required: false): Enter the time you would be available to attend the production.
  * This is optional, but helps us plan for your availability.
  * Use the correct time format (e.g., 12:00 PM).
- **Email** (`email`, `email`, required: false): Enter your email address.
  * This is optional, but helps us contact you with your vote results and any follow-up questions.
- **Phone** (`phone`, `text`, required: false): Enter your phone number.
  * This is optional, but helps us contact you with further questions.
  * Make sure to enter your phone number in the correct format (e.g., +1-123-456-7890).
- **Note** (`note`, `note`, required: false): Enter any additional notes or comments you'd like to provide.
  * This is optional, but helps us understand your perspective.
  * Keep your note concise and clear.
- **Vote Reason** (`vote_reason`, `text`, required: false): Enter your reason for voting for a particular team.
  * This is optional, but helps us understand your motivation.
  * Keep your vote reason concise and clear.
- **Show Description** (`show_description`, `text`, required: false): Enter any additional information about the production show.
  * This is optional, but helps us understand your perspective.
  * Keep your description concise and clear.
