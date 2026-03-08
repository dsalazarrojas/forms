<thinking>
The purpose of this form is to collect information about new team members. This form is likely used to onboard new team members and ensure they have the necessary information to get started quickly and effectively. It's crucial to fill out this form carefully and accurately, as the information collected will be used to manage team dynamics and allocate resources. To ensure data quality, please verify that you're not duplicating existing records or entering fictional information. Only provide real and up-to-date information about yourself. If you're unsure about any field or have any questions, please don't hesitate to contact the relevant team member.
</thinking>

# new_team_member_goals_form - Help Guide
## Purpose
The new_team_member_goals_form is used to collect information about new team members. This data helps the team manage new member onboarding and allocation of resources.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields (denoted by `required: true` in the form description).
2. Enter your first name in the field marked "First name".
3. Enter your last name in the field marked "Last name".
4. Enter your Email address in the field marked "Email".
5. Select your position from the list in the field marked "Position".
6. Answer the question about your reporting manager in the field marked "Reporting manager".
7. Choose whether you have team leads for the following fields:
   - Select your team leads in the field "Team leads".
8. Enter your start date and end date in the fields "Start date" and "End date" respectively, in the format MM/DD/YYYY.

## Field-by-Field Explanation

- **First name** (`first_name`, text, required: false): Enter your first name to identify yourself in the team.
  - **Last name** (`last_name`, text, required: false): Enter your last name to further identify yourself in the team.
  - **Email** (`email`, email, required: false): Enter your email address to allow others to reach you.
  - **Position** (`position`, text, required: false): Select your position within the team to help with resource allocation.
  - **Reporting manager** (`reporting_manager`, select_one, required: false): Specify if you have a reporting manager within the team.
  - **Team leads** (`team_leads`, select_multiple, required: false): Choose whether you have team leads.
  - **Start date** (`start_date`, date, required: false): Enter the date you started working with the team (in MM/DD/YYYY format).
  - **End date** (`end_date`, date, required: false): Enter the date you expect to end your work with the team (in MM/DD/YYYY format).

## Tips

* Please be accurate when entering your information to ensure team dynamics and resource allocation are managed correctly.
* If you're unsure about any field, please don't hesitate to contact the relevant team member for guidance.
* Remember to enter real information about yourself to maintain data quality.
