# Employee Training Information Form - Help Guide
## Purpose
The purpose of this form is to collect information about employee training, which is essential for tracking and managing employee development within the organization.

## How To Complete This Form
1. Begin by carefully reading the form instructions and ensuring you have all the necessary details about the employee's training.
2. Fill out the required fields (if any) and provide as much information as possible for the non-required fields.
3. Review your answers carefully to ensure accuracy and completeness.

## Field-by-Field Explanation
* **Employee Training Information Form** (`employee_training_information_form`, text, required: false):
	+ This field is the title of the form, which should be left blank as it is a pre-filled field.
* **Company Name** (`company_name`, text, required: false):
	+ This field asks for the name of the company that provided or is providing the training.
* **Training Type** (`training_type`, select_one, required: false):
	+ Select 'Yes' if the employee is receiving or has received training, 'No' otherwise.
* **Training Start Date** (`training_start_date`, date, required: false):
	+ Enter the start date of the training.
* **Training Duration** (`training_duration`, number, required: false):
	+ Enter the duration of the training in days or hours.
* **Training Employees** (`training_employees`, select_multiple, required: false):
	+ Select 'Yes' if the employee is part of a group receiving the training, 'No' otherwise.
* **Training Location** (`training_location`, text, required: false):
	+ Enter the location where the training took place or will take place.
* **Training Termination Date** (`training_termination_date`, date, required: false):
	+ Enter the date when the training was terminated or will be terminated.
* **Training Evaluation Date** (`training_evaluation_date`, date, required: false):
	+ Enter the date when the training was evaluated or will be evaluated.
* **Manager's Comments** (`manager_comments`, note, required: false):
	+ Enter any additional comments or feedback from the manager.
