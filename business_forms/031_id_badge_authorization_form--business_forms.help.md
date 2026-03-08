# id_badge_authorization_form - Help Guide
## Purpose
This form is used to issue ID badges to employees, collecting information about the employee, badge type, and other relevant attributes.

## How To Complete This Form
1. Start by filling in the Employee Name field with the employee's full name as it appears on their identification card.
2. Select the correct Department from the provided options.
3. Enter the Job Title of the employee.
4. Choose the Badge Type for the ID badge from the provided options.
5. Enter the Badge Number for the ID badge.
6. Select the Badge Color for the ID badge from the provided options.
7. Choose the Expiration Date for the ID badge.
8. Select whether the Employee Photo is included on the badge.
9. Enter the Authorized By field with the name of the person authorizing the ID badge.
10. Enter the Signature of the person authorizing the ID badge.
11. Enter the Expiration Time for the ID badge (if required).
12. Select the ID Badge Type from the provided options.
13. Enter the Employee ID in the format of 9 digits.
14. Click Submit to finalize the ID badge creation process.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter the employee's full name as it appears on their identification card.
* **Department** (`department`, select_one, required): Select the department the employee belongs to.
* **Job Title** (`job_title`, text, required): Enter the employee's job title.
* **Badge Type** (`badge_type`, select_multiple, required): Choose the type of ID badge to be issued.
* **Badge Number** (`badge_number`, number, required): Enter a unique badge number for the ID badge.
* **Badge Color** (`badge_color`, select_multiple, required): Select the color of the ID badge from the provided options.
* **Expiration Date** (`expiration_date`, date, required): Choose the expiration date for the ID badge.
* **Employee Photo** (`employee_photo`, select_one, required): Select whether the employee photo is included on the badge.
* **Authorized By** (`authorized_by`, text, required): Enter the name of the person authorizing the ID badge.
* **Signature** (`signature`, note, required): Enter the signature of the person authorizing the ID badge.
* **Expiration Time** (`expiration_time`, time, optional): Enter the expiration time for the ID badge (if required).
* **ID Badge Type** (`id_badge_type`, select_one, required): Select the type of ID badge to be issued.
* **Employee ID** (`employee_id`, text, required): Enter a 9-digit Employee ID for the ID badge.
* **Authorized By Name** (`authorized_by_name`, text, required): Enter the name of the person authorizing the ID badge.
* **Issue Date** (`issue_date`, date, required): Choose the date the ID badge is issued.
* **Authorized By Name** (`authorized_by_name`, text, required): This field is not used in the actual form but was likely meant for consistency and will be ignored.
* **Expiration Time** (`expiration_time`, time, optional): This field is not used in the actual form but was likely meant for time-based badge expiration and will be ignored.
