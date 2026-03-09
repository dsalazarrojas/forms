# Employee Daily Report Form - Help Guide
## Purpose
The Employee Daily Report Form is used to track employee progress, productivity, and communication on a daily basis.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Employee Name: Enter your name as it appears on your company records.
2. Enter your Employee ID: Enter your unique employee identification number.
3. Select Date: Choose the date for which you are submitting your report.
4. Time Reported: Enter the time you finished reporting your daily activities.
5. Activities: Indicate if you have completed any activities today (Yes/No).
6. Comments: Add any relevant comments or observations about your day.
7. Select Tasks: Choose the tasks you have completed from the available options.
8. Productivity: Enter your productivity level on a scale from 0 to 10.
9. Communication: Indicate your level of communication with colleagues on a scale from 0 to 3.

## Field-by-Field Explanation
- **Employee Name** (`employee_daily_report_form`, text, required): Enter your full name as it appears on your company records.
  • This field is used to identify the employee completing the form.
- **Employee ID** (`employee_id`, number, required): Enter your unique employee identification number.
  • This field is used to verify your identity as an employee.
- **Date** (`date`, date, optional): Choose the date for which you are submitting your report.
  • This field allows you to select the date of your report.
- **Time Reported** (`time_reported`, time, optional): Enter the time you finished reporting your activities.
  • This field is used to record the time spent reporting your daily activities.
- **Activities** (`activities`, select_multiple, optional): Indicate if you have completed any activities today (Yes/No).
  • This field helps track your work activities on a daily basis.
- **Comments** (`comments`, text, optional): Add any relevant comments or observations about your day.
  • This field is for any additional information that may be helpful for the team.
- **Tasks** (`tasks`, select_one, optional): Choose the tasks you have completed from the available options.
  • This field helps the team track your task completion.
- **Productivity** (`productivity`, number, optional): Enter your productivity level on a scale from 0 to 10.
  • This field helps track your productivity level on a daily basis.
- **Communication** (`communication`, select_one, optional): Indicate your level of communication with colleagues on a scale from 0 to 3.
  • This field helps track your communication level with colleagues.
