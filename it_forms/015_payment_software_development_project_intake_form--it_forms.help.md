# Payment Software Development Project Intake Form - Help Guide
## Purpose
This form is designed to collect information from clients or customers about their software development project needs. It will help the development team understand project requirements, timeline, and budget.

## How To Complete This Form
1. Please fill out the form completely and accurately.
2. Choose the project category that best describes the project.
3. Provide a brief description of the project.
4. Fill out the contact information for the person submitting the form (this will help us get in touch with you to discuss the project details).
5. Enter the name of your company.
6. Enter your contact email address.
7. Enter your phone number (this will help us get in touch with you to discuss project details).
8. Describe the project requirements.
9. Select the project status that best describes the current status of your project.
10. Enter the project budget (if applicable).
11. Enter the project deadline (in date format, e.g., MM/DD/YYYY).
12. If necessary, select the tool that will be used for the project.
13. Finally, submit the form.

## Field-by-Field Explanation
### Contact Name (id: 4, name: contact_name)
* **Contact Name** (`contact_name`, `text`, required/optional): This field is used to enter the name of the person filling out this form.
* **Company Name (id: 5, name: company_name)**
	+ **Company Name** (`company_name`, `text`, required/optional): This field is used to enter the name of the company.
* **Email (id: 6, name: email)**
	+ **Email** (`email`, `email`, required/optional): This field is used to enter the contact email address of the person filling out this form.
* **Phone (id: 7, name: phone)**
	+ **Phone** (`phone`, `text`, required/optional): This field is used to enter the contact phone number of the person filling out this form.
* **Project Category (id: 2, name: project_category)**
	+ **Project Category** (`project_category`, `select_one`, required/optional): This field is used to select the category that best describes the project.
* **Project Description (id: 3, name: project_description)**
	+ **Project Description** (`project_description`, `text`, required/optional): This field is used to enter a brief description of the project.
* **Project Requirements (id: 8, name: project_requirements)**
	+ **Project Requirements** (`project_requirements`, `text`, required/optional): This field is used to describe the project requirements.
* **Project Status (id: 9, name: project_status)**
	+ **Project Status** (`project_status`, `select_multiple`, required/optional): This field is used to select the status of the project.
* **Project Budget (id: 10, name: project_budget)**
	+ **Project Budget** (`project_budget`, `number`, required/optional): This field is used to enter the project budget (if applicable).
* **Project Deadline (id: 11, name: project_deadline)**
	+ **Project Deadline** (`project_deadline`, `date`, required/optional): This field is used to enter the project deadline (in date format, e.g., MM/DD/YYYY).
* **Project Timeline (id: 12, name: project_timeline)**
	+ **Project Timeline** (`project_timeline`, `time`, required/optional): This field is used to enter the project timeline.
* **Assigned Tool (id: 13, name: assigned_tool)**
	+ **Assigned Tool** (`assigned_tool`, `select_one`, required/optional): This field is used to select the tool that will be used for the project.
* **Submission Date (id: 14, name: submission_date)**
	+ **Submission Date** (`submission_date`, `date`, required/optional): This field is used to record the date the form was submitted.
* **(none of the following fields were included in the YAML inputSchema)**
	+ **Project Timeline (id: 6, name: project_timeline)**
	+ **Project Deadline (id: 11, name: project_deadline)**
	+ **Submission Date (id: 14, name: submission_date)**

**Tips**
* Please double-check the information you enter before submitting the form.
* If you are unsure about any of the fields, please ask for clarification.
* This form is meant to be filled out only once per project.
* Any changes to the project details should be communicated separately.
