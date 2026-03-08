# Effort Estimation Form - Help Guide
## Purpose

This form is used for project managers to estimate the effort required for a project, including the scope, complexity, and resources needed to complete it.

## How To Complete This Form

To complete this form, follow these steps:

* Fill out the project title to describe the project's name and purpose.
* Describe the project's scope and requirements in the project description field.
* Estimate the effort required for the project in the effort estimation field. This can be a numerical value representing the amount of work hours needed to complete the project.
* Enter the time required to complete the project in the time required field.
* Select the number of people needed for the project from the manpower needed field. This can be a number from 1-2 people, 3-5 people, 6-10 people, or more than 10 people.
* Describe the resources needed for the project in the resources needed field.
* Enter the budget for the project in the budget field.
* Enter the estimated completion date for the project in the estimated completion date field.
* Describe the level of effort required for the project in the effort level field.
* Enter the contact name and email for the project in the contact name and email fields.
* Add any additional comments about the project in the comments field.

## Field-by-Field Explanation

* **Project Title** (`project_title`, text, required: false)
	+ This field is used to describe the project's name and purpose.
* **Project Description** (`project_description`, text, required: false)
	+ This field is used to describe the project's scope and requirements.
* **Effort Estimation** (`effort_estimation`, number, required: false)
	+ This field is used to estimate the amount of work hours needed to complete the project.
* **Time Required** (`time_required`, number, required: false)
	+ This field is used to enter the time required to complete the project.
* **Manpower Needed** (`manpower_needed`, select_one, required: false)
	+ This field is used to select the number of people needed for the project. Options include 1-2 people, 3-5 people, 6-10 people, or more than 10 people.
* **Resources Needed** (`resources_needed`, text, required: false)
	+ This field is used to describe the resources needed for the project.
* **Budget** (`budget`, number, required: false)
	+ This field is used to enter the budget for the project.
* **Estimated Completion Date** (`estimated_completion_date`, date, required: false)
	+ This field is used to enter the estimated completion date for the project.
* **Effort Level** (`effort_level`, text, required: false)
	+ This field is used to describe the level of effort required for the project.
* **Contact Name** (`contact_name`, text, required: false)
	+ This field is used to enter the contact name for the project.
* **Contact Email** (`contact_email`, email, required: false)
	+ This field is used to enter the contact email for the project.
* **Contact Phone** (`contact_phone`, text, required: false)
	+ This field is used to enter the contact phone number for the project.
* **Comments** (`comments`, text, required: false)
	+ This field is used to add any additional comments about the project.

## Tips

* Be sure to fill out all the required fields accurately to ensure that all stakeholders have a clear understanding of the project's requirements.
* Use the select_one field for manpower needed to ensure that you select the correct number of people needed for the project.
* Use the date field for estimated completion date to enter the date in the correct format (MM/DD/YYYY).
