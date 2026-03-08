# Travel Delay Absence Form - Help Guide
## Purpose
The Travel Delay Absence Form is used for reporting travel delays or absences for an employee. This form is intended to provide necessary information for the employee's travel delay or absence to be properly recorded and managed.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the start date of the travel delay or absence in the "start date" field.
2. Enter the end date of the travel delay or absence in the "end date" field.
3. Select the reason for the travel delay or absence from the list of options provided.
4. Enter the travel date of the delay or absence in the "travel date" field.
5. Enter the return date of the employee in the "return date" field, if applicable.
6. Select the location of the travel delay or absence from the list of options provided.
7. Enter any additional travel details in the "travel details" field, if necessary.
8. Enter any relevant travel documents, such as a travel confirmation number, in the "travel document" field.
9. Select the employee ID of the employee for whom the travel delay or absence is being reported.
10. Enter any additional comments or information about the travel delay or absence in the "comment" field, if necessary.

## Field-by-Field Explanation
* **travel delay** (`travel_delay_absence_form_travel_delay`, text, optional): Enter the reason for the travel delay or absence.
* **start date** (`travel_delay_absence_form_start_date`, date, optional): Enter the start date of the travel delay or absence.
* **end date** (`travel_delay_absence_form_end_date`, date, optional): Enter the end date of the travel delay or absence.
* **reason** (`travel_delay_absence_form_reason`, select one, required): Select the reason for the travel delay or absence from the list of options provided.
* **travel date** (`travel_delay_absence_form_travel_date`, date, optional): Enter the travel date of the delay or absence.
* **return date** (`travel_delay_absence_form_return_date`, date, optional): Enter the return date of the employee, if applicable.
* **location** (`travel_delay_absence_form_location`, select multiple, required): Select the location of the travel delay or absence from the list of options provided.
* **comment** (`travel_delay_absence_form_comment`, note, optional): Enter any additional comments or information about the travel delay or absence.
* **employee id** (`travel_delay_absence_form_employee_id`, select one, required): Select the employee ID of the employee for whom the travel delay or absence is being reported.
* **travel details** (`travel_delay_absence_form_travel_details`, text, optional): Enter any additional travel details, if necessary.
* **travel document** (`travel_delay_absence_form_travel_document`, text, optional): Enter any relevant travel documents, such as a travel confirmation number.
* **Select One/Select Two** (`travel_delay_absence_form_employee_id`, select one, required): This field is used to select the employee ID. Please ensure to select "select one" or "select two" for proper validation. 

Note that the fields marked as "optional" can be filled if necessary, but are not required for the form to be submitted.
