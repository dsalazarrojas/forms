# industry_conference_time_off_form - Help Guide
## Purpose
This form is used to register employees for industry conference time off, allowing them to request time off for attending conferences related to their industry.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your User Input information, including any notes or comments you want to include.
2. Select the Conference Name where you will be attending.
3. Enter the dates of the conference.
4. Choose the location of the conference.
5. Select the type of conference (e.g. Conference, Trade Show, Seminar, Workshop, Webinar).
6. Enter a brief justification for your conference attendance.
7. Select your Manager Approval (Approve, Deny, or Review).
8. Enter your Employee ID.
9. Choose your Department ID.
10. Enter the Approval Date if required by your manager.
11. Add any comments or notes you want to include.

## Field-by-Field Explanation
* **User Input** (`user_input`, text, optional): A space for you to enter any additional information about your conference attendance.
* **Conference Name** (`conference_name`, text, required): Enter the name of the conference you will be attending.
* **Conference Dates** (`conference_dates`, date, optional): Enter the dates of the conference.
* **Conference Location** (`conference_location`, text, optional): Enter the location of the conference.
* **Conference Type** (`conference_type`, select_one, optional): Choose the type of conference (e.g. Conference, Trade Show, Seminar, Workshop, Webinar).
* **Conference Justification** (`conference_justification`, note, optional): Enter a brief justification for your conference attendance.
* **Manager Approval** (`manager_approval`, select_one, required): Select Approve, Deny, or Review for your manager's approval.
* **Employee ID** (`employee_id`, number, optional): Enter your employee ID number.
* **Department ID** (`department_id`, select_one, optional): Choose your department ID.
* **Approval Date** (`approval_date`, date, optional): Enter the date of manager approval, if required.
* **Comments** (`comments`, text, optional): Add any comments or notes you want to include.
