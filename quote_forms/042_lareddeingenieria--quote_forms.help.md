<thinking>
This form is used by project managers to input information about a project, 
including its title, description, contact information, deadline, start time, 
required materials, budget, assigned tools, and category. This form helps 
ensure consistency and accuracy of project data, and is primarily used 
internally within the company. It's essential that only the correct 
assigned tool is selected for each project.

</thinking>

# Lareddeingenieria - Help Guide
## Purpose
This form is used to collect project information and assign the correct tool for each project.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a brief title for the project in the "Project Name" field.
2. Provide a short description of the project in the "Project Description" field.
3. Enter the contact name in the "Contact Name" field.
4. Enter the email address in the "Email Address" field.
5. Enter the phone number in the "Phone Number" field.
6. Select the project deadline using the date picker.
7. Select the project start time using the time picker.
8. Check "Yes" or "No" for "Required Materials" if the project requires any materials.
9. Enter the project budget.
10. Select the correct tool from the list that is assigned to the project.
11. Check "Yes" or "No" for "Category" if the project belongs to a specific category.

## Field-by-Field Explanation

* **Project Name** (`project_name`, text, optional): Enter a brief title for the project.
* **Project Description** (`project_description`, text, optional): Provide a short description of the project.
* **Contact Name** (`contact_name`, text, optional): Enter the name of the person responsible for the project.
* **Email Address** (`email_address`, email, optional): Enter the email address of the person responsible for the project.
* **Phone Number** (`phone_number`, text, optional): Enter the phone number of the person responsible for the project.
* **Project Deadline** (`project_deadline`, date, optional): Select the project deadline using the date picker.
* **Project Start Time** (`project_start_time`, time, optional): Select the project start time using the time picker.
* **Required Materials** (`required_materials`, select_multiple, optional): Check "Yes" or "No" if the project requires any materials.
* **Project Budget** (`project_budget`, number, optional): Enter the project budget.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select the correct tool from the list assigned to the project.
* **Category** (`category`, select_one, optional): Check "Yes" or "No" for the project category.

## Tips
* Make sure to select the correct tool for each project to ensure accurate project management.
* Double-check the project deadline and start time to avoid conflicts.
* Use the correct email address and phone number to ensure effective communication.
* Enter the correct project budget to allocate resources accurately.
