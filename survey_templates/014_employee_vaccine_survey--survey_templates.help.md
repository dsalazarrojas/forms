<thinking>...</thinking>

# Employee Vaccine Survey - Help Guide

## Purpose
The purpose of this form is to collect information about an employee's vaccination status. This form is used to track and verify that employees have completed their required vaccinations.

## How To Complete This Form
To complete this form, follow these steps:

1. **Select your healthcare group**: Choose from the options provided to indicate your healthcare group.
2. **Select your doctor**: Choose the doctor you received your vaccinations from.
3. **Select the type of vaccinations you have received**: Select all that apply from the options provided.
4. **Enter the date you received your vaccinations**: Enter the date you received your vaccinations using the date picker.
5. **Enter your employee ID**: Enter your employee ID number.
6. **Confirm that you have completed your vaccinations**: Select an option to confirm that you have completed your required vaccinations.

## Field-by-Field Explanation

* **Healthcare Group** (`healthcare_group`, select_one, required: false): Please select your healthcare group from the options provided.
* **Doctor** (`doctor`, select_one, required: false): Choose the doctor you received your vaccinations from.
* **Type of Vaccination** (`vaccination_type`, select_multiple, required: false): Select all that apply from the options provided.
* **Date Administered** (`date_administered`, date, required: false): Enter the date you received your vaccinations using the date picker.
* **Employee ID** (`employee_id`, number, required: false): Enter your employee ID number.
* **Have you completed your vaccinations?** (`survey_completed`, select_one, required: false): Select an option to confirm that you have completed your required vaccinations.

## Tips
* Make sure to select all applicable vaccinations for accurate tracking.
* If you are unsure about any of the questions, contact your supervisor or HR representative for guidance.

Note: The required fields are indicated as `required: true` in the form schema, but since none are marked as required in the form YAML, all fields are optional by default.
