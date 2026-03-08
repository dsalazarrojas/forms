# Employment Reference Request - Help Guide
## Purpose
The purpose of this form is to collect employment references from applicants or employees to verify their work history and experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out all required fields, marked as "required" in the form.
2. Enter the employee's information in the "Employee Request" field.
3. Enter the employee's name in the "Employee Name" field.
4. Enter the employee's ID number in the "Employee ID" field.
5. Enter the reference's name in the "Reference Name" field.
6. Enter the reference's title or position in the "Reference Title" field (if applicable).
7. Enter the reference's email in the "Reference Email" field.
8. Enter the reference's phone number in the "Reference Phone" field (if applicable).
9. Enter the employer's name in the "Employer Name" field.
10. Enter the employer's title or position in the "Employer Title" field.
11. Enter the start date of employment in the "Start Date" field.
12. Enter the end date of employment in the "End Date" field.
13. Select "True" or "False" in the "Available" field to indicate if the reference is willing to be contacted.
14. Enter a brief explanation for why the applicant or employee was employed in the "Reason for Employment" field.
15. Select the relationship between the employee and the reference (e.g., manager, team member, colleague) from the "Relationship" field.
16. Enter the date you first knew the employee or reference in the "Known Since" field.
17. Enter the date of your last contact with the employee or reference in the "Last Contact" field (if applicable).
18. Enter the date of your next planned contact with the employee or reference in the "Next Contact" field (if applicable).

## Field-by-Field Explanation

* **Employee Request** (`employee_request`, text, required): A brief description of the employee's job request.
* **Employee Name** (`employee_name`, text, required): The name of the employee.
* **Employee ID** (`employee_id`, text, required): The employee's ID number.
* **Reference Name** (`reference_name`, text, required): The name of the reference.
* **Reference Title** (`reference_title`, text, optional): The title or position of the reference.
* **Reference Email** (`reference_email`, email, required): The email address of the reference.
* **Reference Phone** (`reference_phone`, text, optional): The phone number of the reference.
* **Alternate Phone** (`reference_phone_2`, text, optional): The alternate phone number of the reference.
* **Reference Note** (`reference_note`, note, optional): A note about the reference.
* **Employer Name** (`employer_name`, text, required): The name of the employer.
* **Employer Title** (`employer_title`, text, required): The title or position of the employer.
* **Start Date** (`employer_start_date`, date, required): The start date of employment.
* **End Date** (`employer_end_date`, date, required): The end date of employment.
* **Available** (`reference_available`, select_one, required): Check if the reference is available to be contacted.
* **Reason for Employment** (`reason_for_employment`, text, required): A brief explanation for why the applicant or employee was employed.
* **Relationship** (`reference_relationship`, select_multiple, required): The relationship between the employee and the reference (e.g., manager, team member, colleague).
* **Known Since** (`reference_since`, date, required): The date you first knew the employee or reference.
* **Last Contact** (`reference_last_contact`, date, optional): The date of your last contact with the employee or reference.
* **Next Contact** (`reference_next_contact`, date, optional): The date of your next planned contact with the employee or reference.
