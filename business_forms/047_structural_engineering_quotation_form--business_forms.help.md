# Structural Engineering Quotation Form - Help Guide
## Purpose
This form is designed to collect information about a structural engineering project, including project details, budget, deadline, and contact information. It will help users provide accurate and comprehensive data for quotation purposes.

## How To Complete This Form
1. Fill in the form by typing in the required fields (indicated by `*` symbol).
2. Provide detailed information about the project, including its name, location, description, and budget.
3. Enter the project's deadline and contact information (project manager's name and contact number).
4. Choose the project type and status from the provided options.
5. Enter the project's address, city, and postal code (if applicable).
6. Provide a valid email address for contact.

## Field-by-Field Explanation
* **project_details** (`1`, `text`, required): Enter a brief description of the project.
* **project_name** (`2`, `text`, required): Enter the name of the project.
* **project_location** (`3`, `text`, required): Enter the location of the project.
* **project_description** (`4`, `text`, required): Enter a detailed description of the project.
* **project_budget** (`5`, `number`, required): Enter the estimated budget for the project.
* **project_deadline** (`6`, `date`, required): Enter the deadline for the project.
* **project_manager_name** (`7`, `text`, required): Enter the name of the project manager.
* **contact_number** (`8`, `text`, required): Enter the contact number of the project manager.
* **project_type** (`9`, `select_one`, required): Choose 'Yes' if the project is urgent or 'No' if it's not.
* **project_type_options** (`10`, `select_multiple`, optional): Select multiple types that apply to the project.
* **project_status** (`11`, `select_one`, required): Choose 'Active' if the project is active or 'Inactive' if it's not.
* **project_status_options** (`12`, `select_multiple`, optional): Select multiple status types that apply to the project.
* **project_address** (`13`, `text`, optional): Enter the project's address (if different from the location).
* **project_city** (`14`, `text`, optional): Enter the city where the project is located.
* **project_postal_code** (`15`, `text`, optional): Enter the postal code of the project location.
* **contact_email** (`16`, `email`, required): Enter a valid email address for contact purposes.
