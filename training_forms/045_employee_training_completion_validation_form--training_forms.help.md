# employee_training_completion_validation_form - Help Guide
## Purpose
The employee training completion validation form is used to confirm that an employee has completed a training session. This form is filled out by the employee after the training has been completed.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your employee name in the "Employee Name" field.
2. Enter the date you completed the training in the "training_date" field.
3. Provide the name of the training provider in the "Training Provider" field.
4. Enter the date you completed the training in the "Completed Date" field.
5. Sign your name in the "Employee Signature" field to confirm you have completed the training.
6. Your supervisor should sign in the "Supervisor Signature" field to confirm you have completed the training.
7. Enter the name of your supervisor in the "Supervisor Name" field.
8. Provide the signature of the training provider in the "Training Provider Signature" field.
9. If applicable, enter the number of hours you spent on training in the "Training Hours" field.
10. Indicate the units of the training hours in the "Training Hours Units" field.
11. If applicable, enter the location of the training in the "Training Location" field.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required/optional): Enter your name as it is recorded in the company database.
* **Training Date** (`training_date`, date, required/optional): Enter the date you completed the training.
* **Training Provider** (`training_provider`, text, required/optional): Provide the name of the training provider.
* **Completed Date** (`completed_date`, date, required/optional): Enter the date you completed the training.
* **Employee Signature** (`employee_signature`, text, required/optional): Sign your name to confirm you have completed the training.
* **Supervisor Name** (`supervisor_name`, text, required/optional): Enter your supervisor's name.
* **Supervisor Signature** (`supervisor_signature`, text, required/optional): Sign of your supervisor to confirm you have completed the training.
* **Training Provider Signature** (`training_provider_signature`, text, required/optional): Provide the signature of the training provider.
* **Training Hours** (`training_hours`, number, required/optional): If applicable, enter the number of hours you spent on the training.
* **Training Hours Units** (`training_hours_units`, text, required/optional): If applicable, indicate the units of the training hours.
* **Training Location** (`training_location`, text, required/optional): If applicable, enter the location where the training was held.
