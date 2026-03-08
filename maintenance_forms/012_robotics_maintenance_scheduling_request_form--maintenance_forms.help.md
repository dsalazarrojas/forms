<thinking>...</thinking>

# Robotics Maintenance Scheduling Request Form - Help Guide
## Purpose
This form is used to schedule maintenance for robotics-related activities. Please fill out this form to request maintenance for your robot, specifying the reason, date, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your factory from the "Factory" dropdown list.
2. Choose the robot that requires maintenance from the "Robot" dropdown list.
3. Provide a brief description of the maintenance reason in the "Reason" text field.
4. Enter a detailed description of the maintenance task in the "Description" text field.
5. Select the date for the maintenance activity in the "Date" field.
6. Choose the time for the maintenance activity in the "Time" field.
7. Enter your first name in the "First Name" text field.
8. Enter your last name in the "Last Name" text field.
9. Enter your email address in the "Email" text field.
10. Enter your phone number in the "Phone" text field.
11. Choose the department that the robot belongs to from the "Department" dropdown list.
12. Select the status of the maintenance activity from the "Status" dropdown list.
13. Choose the priority level of the maintenance activity from the "Priority" dropdown list.
14. Select the person assigned to perform the maintenance activity from the "Assigned To" dropdown list.
15. Enter any additional notes or comments in the "Note" text field (optional).
16. Finally, click "Submit" to complete the form.

## Field-by-Field Explanation
- **Factory** (`factory_id`, number, required): Select the factory where the robot is located.
- **Robot** (`robot_id`, number, required): Select the robot that requires maintenance.
- **Reason** (`maintenance_reason`, text, required): Enter a brief description of the maintenance reason.
- **Description** (`maintenance_description`, text, required): Enter a detailed description of the maintenance task.
- **Date** (`maintenance_date`, date, required): Enter the date for the maintenance activity.
- **Time** (`maintenance_time`, time, required): Enter the time for the maintenance activity.
- **First Name** (`contact_first_name`, text, required): Enter your first name.
- **Last Name** (`contact_last_name`, text, required): Enter your last name.
- **Email** (`contact_email`, email, required): Enter your email address.
- **Phone** (`contact_phone`, text, required): Enter your phone number.
- **Department** (`department`, select_one, required): Choose the department where the robot is located.
- **Status** (`maintenance_status`, select_one, required): Select the status of the maintenance activity.
- **Priority** (`maintenance_priority`, select_one, required): Choose the priority level of the maintenance activity.
- **Assigned To** (`assigned_to`, select_one, required): Choose the person assigned to perform the maintenance activity.
- **Note** (`note`, note, optional): Enter any additional notes or comments.
- **Submit** (`submit`, select_one, required): Click "Submit" to complete the form.
