<thinking>
The purpose of this form is to collect information about patients' tasks and observations from healthcare professionals. This form is likely used to monitor patients' progress, assess their treatment plans, and identify areas for improvement or potential complications. Before filling out this form, ensure that you have reviewed the patient's medical records and understand their current treatment status.
</thinking>

# Patient Task Observation Survey - Help Guide
## Purpose
This form is used to collect information from healthcare professionals about patients' tasks and observations, enabling monitoring and assessment of patient progress and treatment plans.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's ID, which is a unique identifier for the patient in the system.
2. Enter the patient's name as it appears in their medical records.
3. Select the date of the observation, which is the date the task was observed.
4. Choose the location where the observation took place, such as "Home", "Office", or "Hospital".
5. Select all the visit types that apply to the observation, such as "Therapy", "Visits", or "HomeCare".
6. Choose the status of the task, such as "Done", "Pending", or "Completed".
7. Enter any additional comments or notes about the observation.
8. Indicate if the task was performed, or select "No".
9. Enter any additional comments or notes about the task.

## Field-by-Field Explanation

### 1. Patient ID (`patient_id`)
	* A unique identifier for the patient in the system.
	* Required: False (but recommended as a lookup field)

### 2. Patient Name (`prophets_name`)
	* The patient's full name as it appears in their medical records.
	* Required: False

### 3. Observation Date (`observation_date`)
	* The date the task was observed.
	* Required: False

### 4. Visit Location (`visit_location`)
	* The location where the observation took place, such as "Home", "Office", or "Hospital".
	* Required: False

### 5. Visit Type (`visit_type`)
	* Select all the visit types that apply, such as "Therapy", "Visits", or "HomeCare".
	* Required: False

### 6. Task Status (`task_status`)
	* Choose the status of the task, such as "Done", "Pending", or "Completed".
	* Required: False

### 7. Notes (`notes`)
	* Additional comments or notes about the observation.
	* Required: False

### 8. Task Performed (`task_performed`)
	* Indicate if the task was performed, or select "No".
	* Required: False

### 9. Comments (`comments`)
	* Additional comments or notes about the task.
	* Required: False
