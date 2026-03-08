# service_inspection_form - Help Guide
## Purpose
The service inspection form is used to document and record the quality of services provided by facilities. It captures information such as facility ID, date and time of inspection, service provided, inspector's ID, name, and ratings. The form also includes fields for comments, facility ratings, and notes.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill out the required fields: facility ID, service provided, inspector ID, inspector name, email, and phone number.
2. Select the rating for the service provided and the facility.
3. Enter any comments or notes about the service or facility.
4. Review and submit the form.

## Field-by-Field Explanation
* **Service Inspection Form** (`1`, `text`, required: false): This is the title of the form.
* **Facility ID** (`2`, `number`, required: true): Enter the unique ID of the facility being inspected.
* **Date and Time** (`3`, `date`, required: false): Enter the date and time of the inspection.
* **Service Provided** (`4`, `text`, required: true): Describe the service provided by the facility.
* **Inspector ID** (`5`, `number`, required: true): Enter the ID of the inspector conducting the inspection.
* **Inspector Name** (`6`, `text`, required: true): Enter the name of the inspector conducting the inspection.
* **Rating** (`7`, `select_one`, required: false): Select one of the following ratings: Good or Fair.
* **Comments** (`8`, `text`, required: false): Enter any comments or notes about the service or facility.
* **Facility Rating** (`9`, `select_multiple`, required: false): Select multiple ratings for the facility: Good or Fair.
* **Facility Comments** (`10`, `text`, required: false): Enter any comments or notes about the facility.
* **Facility Notes** (`11`, `note`, required: false): Enter any additional notes about the facility.
* **Rating Justification** (`12`, `text`, required: false): Enter a justification for the rating.
* **Service Rating** (`13`, `select_one`, required: false): Select one of the following ratings: Good or Fair.
* **Service Notes** (`14`, `note`, required: false): Enter any additional notes about the service.
* **Email** (`15`, `email`, required: true): Enter the email of the inspector.
* **Phone** (`16`, `text`, required: true): Enter the phone number of the inspector.
* **Service Inspection Form Notes** (`17`, `note`, required: false): Enter any additional notes about the service inspection form.
