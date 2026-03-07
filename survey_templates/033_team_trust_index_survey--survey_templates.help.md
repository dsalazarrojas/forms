<thinking>
We should only allow team members to fill out this survey, and we should check for duplication before allowing them to submit the form. This form is designed to gather feedback on the trust index of team members, which is a measure of how well team members trust each other. The survey should only be filled out by team members, and we should check that each team member's data is not duplicated in the database.
</thinking>

# team_trust_index_survey - Help Guide
## Purpose
The Team Trust Index Survey is designed to measure how well team members trust each other within a team. This form is intended to gather feedback from team members on their perception of trust within their team. 

## How To Complete This Form
To complete this form, follow these steps:

*   Fill out your employee name in the first field.
*   Select the department you belong to from the dropdown list.
*   Enter the name of your immediate supervisor in the next field.
*   Provide your personal trust index score in the third field. This score is a number between 1 and 10, where 1 means "Low" and 10 means "High".
*   Describe how open or closed you feel your team is in the "openness" field.
*   Answer the question about how reliable you think your team members are in the "reliability" field.
*   Enter the date and time you completed this form in the "date" and "time" fields.
*   Select how you trust your team in the "team trust index result" dropdown.
*   Enter your work email address.
*   Enter your work phone number.
*   If you have any additional comments or feedback, write them in the "note" field.

## Field-by-Field Explanation

*   **employee_name** (`employee_name`, text, required): This is your employee name. Please enter your full name as it appears on your ID badge.
*   **department** (`department`, select_one, required): Choose the department you belong to from the dropdown list. This helps us understand which teams are represented in the survey.
*   **manager_name** (`manager_name`, text, required): Enter the name of your immediate supervisor.
*   **trust_index** (`trust_index`, number, required): This is where you rate your personal trust index. Enter a number between 1 and 10 to indicate how much you trust your team.
*   **openness** (`openness`, text, required): Describe your team's openness using a few words.
*   **reliability** (`reliability`, text, required): Describe how reliable you think your team members are.
*   **date** (`date`, date, required): Enter the date you completed this form in the format MM/DD/YYYY.
*   **time** (`time`, time, required): Enter the time you completed this form in the format HH:MM AM/PM.
*   **team_trust_index_result** (`team_trust_index_result`, select_multiple, required): Choose your team trust index score from the dropdown list.
*   **email** (`email`, email, required): Enter your work email address.
*   **phone** (`phone`, text, required): Enter your work phone number.
*   **note** (`note`, note, optional): If you have any additional comments or feedback, write them here.
