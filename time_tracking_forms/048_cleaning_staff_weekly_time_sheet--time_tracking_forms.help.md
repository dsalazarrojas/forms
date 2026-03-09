# Cleaning Staff Weekly Time Sheet - Help Guide
## Purpose
This form is used to record weekly working hours, attendance, and any breaks taken by cleaning staff.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your employee name in the first field.
2.  Enter your employee ID number in the second field. This is optional but recommended for identification purposes.
3.  Enter your position or job title in the third field.
4.  Choose your department from the options in the fourth field.
5.  Enter your supervisor's name in the fifth field.
6.  Enter the start date of your work week in the sixth field.
7.  Enter the end date of your work week in the seventh field.
8.  Fill in your start and end times for each day of the week, including any breaks you took.
9.  Enter the total break time for each day in minutes.
10.  Enter the total hours worked for each day.
11.  Enter the location where you worked on each day.
12.  Enter any additional information in the notes section at the end of the form.
13.  Sign and date the form with your electronic signature.
14.  Select the approval status with your supervisor.
15.  Enter your supervisor's electronic signature and approval date if approved.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter the full name of the employee, as it appears on their ID card or personnel file.
* **Employee ID Number** (`employee_id`, text, not required): Enter the employee's identification number, if available.
* **Position or Job Title** (`position`, text, required): Enter the employee's current position or job title.
* **Department** (`department`, text, required): Enter the department or division the employee belongs to.
* **Supervisor Name** (`supervisor_name`, text, required): Enter the name of the employee's supervisor.
* **Week Start Date** (`week_start_date`, date, required): Enter the date of the start of the work week, Monday or first day of work week.
* **Week End Date** (`week_end_date`, date, required): Enter the date of the end of the work week, Sunday or last day of work week.
* **-- Monday --** (`section_header_monday`, note, not required): This is a section header for the Monday section of the form.
* **Monday Start Time** (`monday_start_time`, time, not required): Enter the time you clocked in on Monday.
* **Monday End Time** (`monday_end_time`, time, not required): Enter the time you clocked out on Monday.
* **Monday Break Minutes** (`monday_break_minutes`, text, not required): Enter the total break time taken on Monday in minutes.
* **Monday Total Hours** (`monday_total_hours`, text, not required): Enter the total hours worked on Monday.
* **Monday Work Location** (`monday_location`, text, not required): Enter the location where you worked on Monday.
* **-- Tuesday --** (`section_header_tuesday`, note, not required): This is a section header for the Tuesday section of the form.
* **Tuesday Start Time** (`tuesday_start_time`, time, not required): Enter the time you clocked in on Tuesday.
* **Tuesday End Time** (`tuesday_end_time`, time, not required): Enter the time you clocked out on Tuesday.
* **Tuesday Break Minutes** (`tuesday_break_minutes`, text, not required): Enter the total break time taken on Tuesday in minutes.
* **Tuesday Total Hours** (`tuesday_total_hours`, text, not required): Enter the total hours worked on Tuesday.
* **Tuesday Work Location** (`tuesday_location`, text, not required): Enter the location where you worked on Tuesday.
* **-- Wednesday --** (`section_header_wednesday`, note, not required): This is a section header for the Wednesday section of the form.
* **Wednesday Start Time** (`wednesday_start_time`, time, not required): Enter the time you clocked in on Wednesday.
* **Wednesday End Time** (`wednesday_end_time`, time, not required): Enter the time you clocked out on Wednesday.
* **Wednesday Break Minutes** (`wednesday_break_minutes`, text, not required): Enter the total break time taken on Wednesday in minutes.
* **Wednesday Total Hours** (`wednesday_total_hours`, text, not required): Enter the total hours worked on Wednesday.
* **Wednesday Work Location** (`wednesday_location`, text, not required): Enter the location where you worked on Wednesday.
* **-- Thursday --** (`section_header_thursday`, note, not required): This is a section header for the Thursday section of the form.
* **Thursday Start Time** (`thursday_start_time`, time, not required): Enter the time you clocked in on Thursday.
* **Thursday End Time** (`thursday_end_time`, time, not required): Enter the time you clocked out on Thursday.
* **Thursday Break Minutes** (`thursday_break_minutes`, text, not required): Enter the total break time taken on Thursday in minutes.
* **Thursday Total Hours** (`thursday_total_hours`, text, not required): Enter the total hours worked on Thursday.
* **Thursday Work Location** (`thursday_location`, text, not required): Enter the location where you worked on Thursday.
* **-- Friday --** (`section_header_friday`, note, not required): This is a section header for the Friday section of the form.
* **Friday Start Time** (`friday_start_time`, time, not required): Enter the time you clocked in on Friday.
* **Friday End Time** (`friday_end_time`, time, not required): Enter the time you clocked out on Friday.
* **Friday Break Minutes** (`friday_break_minutes`, text, not required): Enter the total break time taken on Friday in minutes.
* **Friday Total Hours** (`friday_total_hours`, text, not required): Enter the total hours worked on Friday.
* **Friday Work Location** (`friday_location`, text, not required): Enter the location where you worked on Friday.
* **-- Weekend (If Applicable) --** (`section_header_weekend`, note, not required): This is a section header for the weekend section of the form.
* **Saturday Start Time** (`saturday_start_time`, time, not required): Enter the time you clocked in on Saturday.
* **Saturday End Time** (`saturday_end_time`, time, not required): Enter the time you clocked out on Saturday.
* **Saturday Break Minutes** (`saturday_break_minutes`, text, not required): Enter the total break time taken on Saturday in minutes.
* **Saturday Total Hours** (`saturday_total_hours`, text, not required): Enter the total hours worked on Saturday.
* **Sunday Start Time** (`sunday_start_time`, time, not required): Enter the time you clocked in on Sunday.
* **Sunday End Time** (`sunday_end_time`, time, not required): Enter the time you clocked out on Sunday.
* **Sunday Break Minutes** (`sunday_break_minutes`, text, not required): Enter the total break time taken on Sunday in minutes.
* **Sunday Total Hours** (`sunday_total_hours`, text, not required): Enter the total hours worked on Sunday.
* **-- Weekly Totals --** (`section_header_totals`, note, not required): This is a section header for the weekly totals section of the form.
* **Total Regular Hours** (`total_regular_hours`, text, not required): Enter the total regular hours worked this week.
* **Total Overtime Hours** (`total_overtime_hours`, text, not required): Enter the total overtime hours worked this week.
* **Total Holiday Hours** (`total_holiday_hours`, text, not required): Enter the total holiday hours worked this week.
* **Total Hours Worked** (`total_hours_worked`, text, not required): Enter the sum of all hours worked this week.
* **-- Additional Information --** (`section_header_notes`, note, not required): This is a section header for the additional information section of the form.
* **Time Off Taken This Week** (`time_off_taken`, text, not required): Enter any time off taken this week.
* **Missed or Shortened Breaks** (`missed_breaks`, text, not required): Enter any missed or shortened breaks this week.
* **Additional Notes or Comments** (`additional_notes`, text, not required): Enter any additional information this week.
* **Employee Signature (Type Full Name)** (`employee_signature`, text, required): Enter your electronic signature with your full name.
* **Signature Date** (`signature_date`, date, required): Enter the date of signature.
* **Supervisor Approval** (`supervisor_approval`, select_one, required): Select the approval status with your supervisor.
* **Supervisor Signature (Type Full Name)** (`supervisor_signature`, text, not required): Enter your supervisor's electronic signature with their full name.
* **Supervisor Approval Date** (`supervisor_approval_date`, date, not required): Enter the date of supervisor approval.

## Tips
* Always clock in and out on time.
* Make sure to report any time off taken.
* Be accurate when reporting your hours worked and breaks taken.
* Review and verify your hours and breaks before submitting this form.
* Get your supervisor's approval before submitting this form.
* Ensure accurate and complete information is entered in all fields. 
* If you have any questions or concerns, don't hesitate to reach out to your supervisor or HR department.
