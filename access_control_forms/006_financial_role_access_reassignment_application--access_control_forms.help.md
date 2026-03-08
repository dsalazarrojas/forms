# Financial Role Access Reassignment Application - Help Guide
## Purpose
The Financial Role Access Reassignment Application is used to manage changes to financial roles within the organization. This form helps ensure that access and permissions are accurately updated and reflected in the system.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the User ID of the user whose role is to be reassigned.
2. Enter the Financial Role ID of the role to be reassigned.
3. Select the Current Date to reflect the date of the reassignment.
4. Enter the Reason for Change, explaining the reason for the reassignment.
5. Enter the Approver ID of the person authorizing the reassignment.
6. Select the Financial Department affected by the reassignment.
7. Select the Approver Goals for the reassignment.
8. Enter any additional Approver Comments, if necessary.
9. Enter the Role Name of the reassignment.
10. Select the Role Level of the reassignment.
11. Enter the updated Role Updated At date and time.
12. (Optional) Enter the User ID 2 and Financial Department 2 of the secondary user.
13. (Optional) Enter the Approver ID 2 and Approver Notes 2 of the secondary user.
14. (Optional) Enter the Role Name 2 and Role Level 2 of the secondary user.

## Field-by-Field Explanation

* **User ID** (`user_id`, number, required): Enter the ID of the user whose role is to be reassigned.
* **Financial Role ID** (`financial_role_id`, number, required): Enter the ID of the role to be reassigned.
* **Current Date** (`current_date`, date, required): Select the date of the reassignment.
* **Reason for Change** (`reason_for_change`, text, required): Enter the reason for the reassignment.
* **Approver ID** (`approver_id`, number, required): Enter the ID of the person authorizing the reassignment.
* **Approver** (`approver_name`, text, not required): Enter the name of the person authorizing the reassignment.
* **Approver Email** (`approver_email`, email, not required): Enter the email of the person authorizing the reassignment.
* **Approver Phone** (`approver_phone`, text, not required): Enter the phone number of the person authorizing the reassignment.
* **Approver Comments** (`approver_comments`, note, not required): Enter any comments from the person authorizing the reassignment.
* **Financial Department** (`financial_department`, select_multiple, required): Select which financial department is affected by the reassignment.
* **Approver Goals** (`approver_goals`, select_one, required): Select the goal of the reassignment (Financial, IT, HR).
* **Approver Notes** (`approver_notes`, note, not required): Enter any additional notes from the person authorizing the reassignment.
* **Role Name** (`role_name`, text, required): Enter the name of the reassignment.
* **Role Level** (`role_level`, select_multiple, required): Select the level of the reassignment (High, Low).
* **Role Updated At** (`role_updated_at`, time, required): Enter the date and time of the reassignment.
* **User ID 2** (`user_id2`, number, required): Enter the ID of the secondary user.
* **Financial Department 2** (`financial_department2`, select_multiple, required): Select which financial department is affected by the reassignment.
* **Approver ID 2** (`approver_id2`, number, required): Enter the ID of the secondary approver.
* **Approver Notes 2** (`approver_notes2`, note, not required): Enter any additional notes from the secondary approver.
* **Role Name 2** (`role_name2`, text, not required): Enter the name of the reassignment for the secondary user.
* **Role Level 2** (`role_level2`, select_multiple, not required): Select the level of the reassignment for the secondary user.
* **Updated At** (`updated_at`, time, not required): Enter the date and time of the reassignment.

## Tips
When completing this form, please ensure that you have the necessary authority and approval to make the reassignment. Also, please be thorough in your entries, especially when providing reasons for change and approver comments, as this information helps maintain transparency and accountability within the organization.
