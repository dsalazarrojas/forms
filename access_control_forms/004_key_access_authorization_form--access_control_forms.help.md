# Key Access Authorization Form - Help Guide
## Purpose
The "Key Access Authorization Form" is used to grant or deny access to certain resources, systems, or areas within an organization. It captures relevant information about the individual or group seeking access, allowing for informed decisions to be made.

## How To Complete This Form
1. Please provide your first name.
2. Please provide your last name.
3. Select your role (e.g., Admin, Manager, User).
4. Choose your access level (High, Medium, Low).
5. If applicable, enter your date of birth and start date.
6. Enter any additional authorized personnel ID information.
7. Provide any notes or comments about your request.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Please enter your first name. This is the name by which you are commonly known.
* **Last Name** (`last_name`, text, required): Please enter your last name. This is the surname of the individual seeking access.
* **Role** (`role`, select_one, required): Select one of the following roles: 
  * Admin
  * Manager
  * User
* **Access Level** (`access_level`, select_multiple, required): Choose one or more of the following access levels:
  * High
  * Medium
  * Low
* **Date of Birth** (`date_of_birth`, date, optional): If you wish to provide your date of birth, please enter it in the format YYYY-MM-DD.
* **Start Date** (`start_date`, date, optional): If you wish to provide your start date, please enter it in the format YYYY-MM-DD.
* **End Date** (`end_date`, date, optional): If you wish to provide your end date, please enter it in the format YYYY-MM-DD.
* **Authorized Personnel ID** (`authorized_personnel_id`, text, optional): If applicable, enter any additional authorized personnel ID information.
* **Notes** (`notes`, note, optional): Provide any additional comments or notes about your request.

## Tips
* Please be accurate and truthful when filling out this form.
* If you are unsure about any field, please contact your supervisor or the system administrator.
* The access level you select will determine the extent of access you will have.
* Notes are optional but may be helpful for additional context.
