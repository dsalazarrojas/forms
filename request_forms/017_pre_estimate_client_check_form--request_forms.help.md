# Pre Estimate Client Check Form - Help Guide
## Purpose
This form is used to collect essential information about a project before making an estimate, ensuring that all necessary details are gathered and documented.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the project details, including the project description, estimated cost, and estimated duration.
2. Provide the client's name and contact number.
3. Enter the project address.
4. Select the project type and status.
5. Choose whether a service team is required for the project.
6. Enter the estimated cost and duration of the project.
7. Select the project date.

## Field-by-Field Explanation

* **Project Details** (`project_details`, text, required: false): This field is used to enter a brief description of the project.
* **Client Name** (`client_name`, text, required: false): Enter the name of the client for whom the project is being undertaken.
* **Contact Number** (`contact_number`, text, required: false): Enter the contact number of the client or project representative.
* **Project Address** (`project_address`, text, required: false): Enter the address of the project location.
* **Project Description** (`project_description`, text, required: false): This field is used to enter a more detailed description of the project.
* **Project Type** (`project_type`, select_one, required: false):
	+ 'Yes': Select this option if the project is of a specific type.
	+ 'No': Select this option if the project is not of a specific type.
* **Project Status** (`project_status`, select_multiple, required: false):
	+ Active: Select this option if the project is currently active.
	+ Inactive: Select this option if the project is currently inactive.
* **Service Team** (`service_team`, select_one, required: false):
	+ 'Yes': Select this option if a service team is required for the project.
	+ 'No': Select this option if a service team is not required.
* **Estimated Cost** (`estimated_cost`, number, required: false): Enter the estimated cost of the project.
* **Estimated Duration** (`estimated_duration`, number, required: false): Enter the estimated duration of the project.
* **Project Date** (`project_date`, date, required: false): Enter the date of the project.

Note: All fields are optional, unless otherwise specified.
