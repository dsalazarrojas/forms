To confirm that this form is intended for the onboarding of IT specialists, the following form fields will be required or optional based on the provided YAML schema. The fields include:

* First Name
* Last Name
* Email
* Phone
* Date Of Birth
* Work History
* Skills
* Experience
* Department ID

This form is not meant for external users but rather for internal employees, hence the Department ID field might be confusing. It's likely that this field is intended for internal use and is meant to be used as a unique identifier within the company's internal systems.

Given the presence of the "Skills" field with select multiple options, it might be assumed that this form is for IT personnel selection or assignment, where the user needs to choose which skills they possess.

</thinking>

# IT Specialist Onboarding Form - Help Guide
## Purpose
This form is intended for the onboarding of internal IT specialists. It collects personal and professional information that will be used for internal purposes, including skills selection or assignment.

## How To Complete This Form
To complete this form, please follow these steps:

* Fill in your First Name and Last Name in the provided text fields.
* Enter your Email address in the corresponding field.
* If applicable, provide your Phone number for contact purposes.
* If you have a Date Of Birth, please enter it in the date format (yyyy-mm-dd).
* Describe your Work History in the provided text field, including any relevant professional experience.
* Select the relevant Skills you possess from the drop-down menu.
* If you have relevant work experience, please enter it in the number field.
* If you have a Department ID, you can enter it in the text field, although it's not mandatory.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Email** (`email`, email, not required): Enter your official email address used for communication within the company.
* **Phone** (`phone`, text, not required): Enter your phone number for contact purposes, if applicable.
* **Date Of Birth** (`date_of_birth`, date, not required): Enter your Date Of Birth in the yyyy-mm-dd format, if applicable.
* **Work History** (`work_history`, text, required): Describe your relevant work experience, highlighting any notable skills or achievements.
* **Skills** (`skills`, select multiple, not required): Select the skills you possess from the provided options.
* **Experience** (`experience`, number, not required): Enter your relevant work experience, if applicable.
* **Department ID** (`department_id`, text, not required): Enter your Department ID, if you have one. This field is not mandatory and is likely for internal use only.
 
# Tips
* Please ensure that all fields are completed accurately, especially if you have any allergies or medical conditions that might affect your work.
* If you have any questions or need help with any of the fields, please don't hesitate to reach out to your supervisor or HR department.
* Double-check your selections in the Skills field, as this will be used for skills selection or assignment.
