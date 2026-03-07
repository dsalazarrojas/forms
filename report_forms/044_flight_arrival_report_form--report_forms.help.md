<thinking>
A form designed to gather information about flight arrivals, including flight details and arrival reports. This form is intended for reporting on flights arriving at airports. The fields collected will be used to create an arrival report. This form should not be used for other purposes. This form does not require any specific prior knowledge or skills to complete it. It's recommended that users review the form carefully and ensure they have all necessary information before submitting it.
</thinking>

# flight arrival report form - Help Guide
## Purpose
This form is used to report on flight arrivals, providing details about flights that have landed at the airport. It's essential to fill out this form accurately and completely to ensure the correct creation of an arrival report.

## How To Complete This Form

1. Ensure you have all the necessary information about the flight before starting to fill out the form.
2. Select the relevant options for each field, making sure to choose the correct flight number and arrival time.
3. Enter the correct gate number, if applicable.
4. Provide accurate information about the arrival aircraft and flight department.
5. Indicate whether the flight was handled on the ground and which airport operations were involved.
6. Enter any comments or observations about the arrival report, if necessary.
7. Attach any relevant documents or files to support the report, if required.
8. Confirm that the flight number is correct and select the status of the report.
9. Submit the form once all fields are filled out accurately.

## Field-by-Field Explanation

* **Arrival Information** (`arrival_information`, `text`, required): Enter a brief description of the flight's arrival, including any notable events or issues that occurred.
* **Flight Number** (`flight_number`, `text`, required): Enter the unique identifier for the flight that arrived.
* **Arrival Time** (`arrival_time`, `time`, not required): Enter the time the flight landed at the airport. If unsure, leave blank.
* **Gate Number** (`gate_number`, `number`, not required): Enter the gate number where the flight arrived, if applicable.
* **Arrival Aircraft** (`arrival_aircraft`, `text`, required): Describe the type and characteristics of the aircraft that arrived.
* **Flight Department** (`flight_department`, `select_one`, not required): Choose whether the flight was handled by the flight department.
	+ 'Yes'
	+ 'No'
* **Ground Handling** (`ground_handling`, `select_multiple`, not required): Select any ground handling services that were provided for the flight.
	+ 'Yes'
	+ 'No'
* **Airport Operations** (`airport_operations`, `select_multiple`, not required): Select any airport operations that were involved in the flight's arrival.
	+ 'Yes'
	+ 'No'
* **Arrival Report Comments** (`arrival_report_comments`, `text`, required): Enter any comments or observations about the flight's arrival.
* **Arrival Report Attachment** (`arrival_report_attachment`, `note`, not required): Attach any relevant documents or files to support the report, if necessary.
* **Flight Number Confirmation** (`flight_number_confirmation`, `select_one`, not required): Confirm whether the flight number is correct.
	+ 'Yes'
	+ 'No'
* **Arrival Report Status** (`arrival_report_status`, `select_one`, not required): Choose the status of the report.
	+ Active
	+ Inactive
