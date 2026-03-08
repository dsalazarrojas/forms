# Work Order Close Out Form - Help Guide
## Purpose
The "Work Order Close Out Form" is used to finalize and document the completion of a work order. This form captures essential details about the project, including the contractor's name, contract number, hours worked, materials used, total cost, job status, notes, and the individuals responsible for submitting and approving the form.

## How To Complete This Form
1. Fill out the form completely, paying attention to required fields.
2. Enter the contractor's name and contract number for reference.
3. Record the total hours worked on the project.
4. List any materials used during the project.
5. Enter the total cost of the project.
6. Select the current job status: Complete, Incomplete, or Pending.
7. Include any relevant job notes.
8. Enter your name and title for the submitted_by field.
9. Enter the name and title of the person who approved the form for the approved_by field.

## Field-by-Field Explanation
* **contractor_name** (`contractor_name`, text, required/optional): Enter the name of the contractor who worked on the project.
* **contract_number** (`contract_number`, text, required/optional): Enter the contract number associated with the project.
* **hours_worked** (`hours_worked`, number, required/optional): Record the total hours worked on the project.
* **materials_used** (`materials_used`, text, required/optional): List any materials used during the project.
* **total_cost** (`total_cost`, number, required/optional): Enter the total cost of the project.
* **job_status** (`job_status`, select_one, required/optional): Select the current job status: Complete, Incomplete, or Pending.
* **job_notes** (`job_notes`, note, required/optional): Include any relevant job notes or comments.
* **submitted_by** (`submitted_by`, text, required/optional): Enter your name and title for the submitted_by field.
* **approved_by** (`approved_by`, text, required/optional): Enter the name and title of the person who approved the form for the approved_by field.
