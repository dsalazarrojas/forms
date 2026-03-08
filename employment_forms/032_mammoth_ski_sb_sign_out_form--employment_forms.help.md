# mammoth_ski_sb_sign_out_form - Help Guide

## Purpose
This form is used for Mammoth Ski Resort employees to sign out at the end of their shift. It captures essential information about the employee's last day of work, including their name, hours worked, and reason for leaving. This form helps the management track employee attendance and maintain accurate records.

## How To Complete This Form

1. Click on the "Start" button to begin filling out the form.
2. Fill out the form with your employee name, sign out date, and hours worked.
3. Select your Lift Ticket Number from the dropdown menu.
4. Choose your reason for leaving from the text field.
5. Check your Employee ID status.
6. Leave a note for your manager (optional).
7. Sign and enter your manager's name, email, and phone number.
8. Enter the date you started work and the time you finished work.
9. Finally, click on the "Submit" button to submit your form.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your name as it appears on your ID badge or personnel file.
* **Sign Out Date** (`sign_out_date`, date, required): Enter the date you are signing out of your shift today.
* **Lift Ticket Number** (`ski_lift_ticket_number`, select_one, required): Select 'Yes' if you have a lift ticket, otherwise, select 'No'.
* **Lift Ticket Number 2** (`ski_lift_ticket_number2`, select_multiple, required): Select 'Yes' if you have more than one lift ticket, otherwise, select 'No'.
* **Reason For Leaving** (`reason_for_leaving`, text, required): Enter a brief description of your reason for leaving, such as "Lunch break", "Personal emergency", or "Finished shift".
* **Employee ID** (`employee_id`, select_multiple, required): Check 'Yes' if you have an Employee ID, otherwise, select 'No'.
* **Manager Signature** (`manager_signature`, note, required): Leave a note for your manager with any important information or comments.
* **Manager Name** (`manager_name`, text, required): Enter your manager's name.
* **Manager Email** (`manager_email`, email, required): Enter your manager's email address.
* **Manager Phone** (`manager_phone`, text, required): Enter your manager's phone number.
* **Date In Service** (`date_in_service`, date, required): Enter the date you started your shift today.
* **Hours Worked Today** (`hours_worked_today`, number, required): Enter the total number of hours you worked today.
* **Date Out Service** (`date_out_service`, date, required): Enter the date you finished your shift today.
* **Time Out** (`time_out`, time, required): Enter the time you finished your shift today.
* **Date Out** (`date_out`, date, required): Enter the date you finished your shift today.
