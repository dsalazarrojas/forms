# Air Filtration System Maintenance Checklist - Help Guide
## Purpose
The Air Filtration System Maintenance Checklist is a comprehensive form designed to document the maintenance activities performed on air filtration systems. This form serves as a record of the maintenance activities, ensuring that all necessary tasks are completed and reported accurately.

## How To Complete This Form
1. Start by entering the name of the maintenance technician performing the activity in the `Technician name` field.
2. Record the date of the maintenance activity in the `Maintenance date` field.
3. Indicate if any filter replacements were performed in the `Filter replacement performed` field.
4. For the `Fan inspection results` field, provide any notes or comments on the fan's condition. This field is optional but helps maintain a record of the fan's performance.
5. If available, enter the measured airflow reading in the `Airflow measurement reading` field. This field is optional and should be completed only when relevant.
6. Confirm the outcome of the leak test performed in the `Leak test performed` field.
7. In the `Safety checks completed` field, document any safety checks conducted during the maintenance activity.
8. In the `Recommendations and next steps` field, suggest any future maintenance schedules or repairs needed.
9. Finally, the `Supervisor acknowledgement` field should be signed by the supervisor approving the maintenance activity.

## Field-by-Field Explanation

* **Technician name** (`technician_name`, text, required): Enter the name of the maintenance technician performing the activity.
* **Maintenance date** (`maintenance_date`, date, required): Record the date of the maintenance activity.
* **Filter replacement performed** (`filter_replacement`, select_one, required): Indicate if any filter replacements were performed during the maintenance.
  - Select 'True' if filters were replaced, 'False' otherwise, or 'Not required' if no replacements were made.
* **Fan inspection results** (`fan_inspection`, text, optional): Note any comments or observations about the fan's condition.
* **Airflow measurement reading** (`airflow_measurement`, number, optional): Enter measured airflow reading if available.
* **Leak test performed** (`leak_test`, select_one, required): Confirm the outcome of the leak test.
  - Select 'Pass' to indicate a successful test, 'Fail' to indicate a failed test.
* **Safety checks completed** (`safety_checks`, text, required): Document any safety checks conducted during the maintenance activity.
* **Recommendations and next steps** (`recommendations`, text, optional): Suggest any future maintenance schedules or repairs needed.
* **Supervisor acknowledgement** (`supervisor_signature`, note, required): The supervisor should sign this field to approve the maintenance activity.

## Tips
- Complete all required fields accurately to ensure the maintenance activity is properly documented.
- Use the `Fan inspection results` field to note any issues or observations about the fan's condition.
- Enter relevant measurements or observations in the `Airflow measurement reading` field when available.
- Confirm the outcome of the leak test and document any safety checks in the `Leak test performed` and `Safety checks completed` fields, respectively.
- The supervisor's signature in the `Supervisor acknowledgement` field ensures that the maintenance activity is approved and accurately recorded.
