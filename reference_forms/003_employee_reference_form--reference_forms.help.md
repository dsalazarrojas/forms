# Employee Reference Form - Help Guide
## Purpose
The Employee Reference Form is used to gather information about an employee for performance evaluations, promotions, or other personnel decisions.

## How To Complete This Form
To complete this form, please follow these steps:

1. **Fill out the form in its entirety**. All fields marked as required (with an asterisk \*) are necessary for the reference to be complete.
2. **Enter the employee's name** in the **employee_name** field. This field is used to identify the employee you are providing a reference for.
3. **Enter the name of the person providing the reference** in the **referee_name** field. This field is used to identify you as the person providing the reference.
4. **Enter the name of the company the employee works for** in the **company_name** field. This field is used to provide context about the employee's work environment.
5. **Select the role of the employee** using the **role** field. This field should match the options provided in the dropdown menu.
6. **Select the period of reference** using the **reference_since** field. This field should be a date in the format `YYYY-MM-DD`.
7. **Enter any additional contact information** in the **contact_info** field. This can include phone numbers, addresses, or other relevant contact details.
8. **Add any additional notes** in the **note** field. This field is for providing any relevant context or details about the employee.
9. **Enter the employee's email contact information** in the **email** field. This field should be in the format `username@domain.com`.
10. **Select who the reference should be assigned to** using the **assigned_to** field. This field should match one of the options provided in the dropdown menu.

## Field-by-Field Explanation
* **employee_name** (`employee_name`, text, required): Enter the name of the employee being referenced.
* **referee_name** (`referee_name`, text, required): Enter the name of the person providing the reference.
* **company_name** (`company_name`, text, required): Enter the name of the company the employee works for.
* **role** (`role`, select_multiple, required): Select the role of the employee from the provided options.
* **reference_since** (`reference_since`, date, required): Select the period of reference in the format `YYYY-MM-DD`.
* **contact_info** (`contact_info`, text, optional): Enter any additional contact information, such as phone numbers or addresses.
* **note** (`note`, note, optional): Add any additional notes or context about the employee.
* **email** (`email`, email, optional): Enter the employee's email contact information in the format `username@domain.com`.
* **assigned_to** (`assigned_to`, select_one, optional): Select who the reference should be assigned to from the provided options.
