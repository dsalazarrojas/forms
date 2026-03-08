# employee_report_of_tip_form - Help Guide
## Purpose
This form is used to report daily earnings by employees. It helps in maintaining accurate records and ensuring correct payment.

## How To Complete This Form
1. Fill in the employee_name field with your full name.
2. Enter the employee_id number assigned to you.
3. Record the date of your last service or shift.
4. Enter the time you started your shift.
5. Enter the time you ended your shift.
6. Enter the number of hours you worked during your shift.
7. Enter the total amount received for your work.
8. Enter the amount of tips you received, if any.
9. Select all methods of payment you used (credit, cash, or check).
10. If applicable, add any additional notes about your work or shift.
11. Sign with your manager's signature and provide your name as the manager.
12. Sign with your employee signature.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter your full name as it appears on your identification documents.
* **Employee ID** (`employee_id`, number, required): Enter the ID number assigned to you by the organization.
* **Date of Service** (`date_of_service`, date, required): Record the date of your last service or shift.
* **Shift Start Time** (`shift_start_time`, time, required): Enter the time you started your shift.
* **Shift End Time** (`shift_end_time`, time, required): Enter the time you ended your shift.
* **Hours Worked** (`hours_worked`, number, required): Enter the number of hours you worked during your shift.
* **Amount Received** (`amount_received`, number, required): Enter the total amount received for your work.
* **Tips Received** (`tip_received`, number): If you received any tips during the shift, enter the amount here.
* **Payment Method(s)** (`payment_method`, select, required): Select all methods of payment you used during the shift (credit, cash, or check).
* **Notes** (`notes`, text, optional): Add any additional notes or comments about your work or shift.
* **Manager Signature** (`manager_signature`, text, required): Sign with your manager's signature.
* **Manager Name** (`manager_name`, text, required): Enter your manager's name.
* **Employee Signature** (`employee_signature`, text, required): Sign with your employee signature.
