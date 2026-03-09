# Patient Centered Care Model Training Registration - Help Guide
## Purpose
The Patient Centered Care Model Training Registration form is used to collect information for staff members who have attended the Patient Centered Care Model Training.

## How To Complete This Form
1. Fill out the form completely and honestly.
2. Select the correct training type and location.
3. Enter the training date and time accurately.
4. Select the correct staff member and department.
5. Enter the staff member's name and job title.
6. Enter the staff member's email and phone number.
7. Add any additional notes as necessary.

## Field-by-Field Explanation
- **Training Type** (`training_type`, select_one, required: false): Choose the type of training the staff member received.
  * Select 'Yes' if the staff member attended the training.
  * Select 'No' if the staff member did not attend the training.
- **Training Location** (`training_location`, select_multiple, required: false): Choose the location where the training took place.
  * Select 'Yes' if the training location is relevant.
  * Select 'No' if the location is not relevant.
- **Training Date** (`training_date`, date, required: false): Enter the date the staff member attended the training.
- **Training Time** (`training_time`, time, required: false): Enter the time the staff member attended the training.
- **Staff Member** (`staff_member`, select_one, required: false): Choose the staff member who attended the training.
  * Select 'Yes' if the staff member attended.
  * Select 'No' if the staff member did not attend.
- **Department** (`department`, select_one, required: false): Choose the department the staff member belongs to.
  * Select 'Yes' if the department is relevant.
  * Select 'No' if the department is not relevant.
- **Job Title** (`job_title`, text, required: false): Enter the staff member's job title.
- **Name** (`name`, text, required: false): Enter the staff member's name.
- **Email** (`email`, email, required: false): Enter the staff member's email address.
- **Phone** (`phone`, text, required: false): Enter the staff member's phone number.
- **Notes** (`notes`, note, required: false): Add any additional comments or notes about the training.
- **Submit** (`submit`, text, required: false): Click on this button to submit your completed form.
