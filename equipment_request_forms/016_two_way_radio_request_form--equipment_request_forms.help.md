# Two Way Radio Request Form - Help Guide
## Purpose
The Two-Way Radio Request Form is designed to collect information about equipment requests in a structured and organized manner. This form helps to ensure that all necessary details are captured accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name in the "First Name" field.
2. Enter your Email in the "Email" field.
3. Select the correct Role from the dropdown menu.
4. Select the Start Date from the calendar picker.
5. Select the End Date from the calendar picker.
6. Enter the Duration of the equipment request.
7. Write a detailed description of the equipment you are requesting.
8. Enter the number of equipment you are requesting.
9. Provide any additional Comments about the request, if needed.
10. If you are requesting an equipment to be assigned, select "Yes" from the dropdown menu.
11. If you are working with a Team Lead, select the relevant team members from the dropdown menu.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, **required**): Enter your first name in this field.
* **Email** (`email`, `email`, **required**): Enter your email address in this format: `example@example.com`.
* **Role** (`role`, `select_one`, **required**): Select your role from the dropdown menu.
* **Start Date** (`start_date`, `date`, **required**): Select the start date of the equipment request using the calendar picker.
* **End Date** (`end_date`, `date`, **required**): Select the end date of the equipment request using the calendar picker.
* **Duration** (`duration`, `number`, **required**): Enter the duration of the equipment request in hours, minutes, or days.
* **Equipment Description** (`equipment_description`, `text`, **required**): Write a detailed description of the equipment you are requesting.
* **Equipment Count** (`equipment_count`, `number`, **required**): Enter the number of equipment you are requesting.
* **Comments** (`comments`, `text`, **optional**): Provide additional comments about the request, if needed.
* **Assigned Tool** (`assigned_tool`, `select_one`, **optional**): Select "Yes" if you are requesting an equipment to be assigned.
* **Team Lead** (`team_lead`, `select_multiple`, **optional**): Select team members with whom you are working if you are requesting equipment.
