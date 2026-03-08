# Employee Clearance Form - Help Guide
## Purpose
The employee clearance form is used to collect information necessary for determining an employee's eligibility to work with sensitive information or hold certain positions within the organization.

## How To Complete This Form
1. Select "Background Checks" and choose the relevant background checks required for your position. 
2. Enter the "Health Clearance" date, if applicable.
3. Provide any necessary "Security Information" in the text field.
4. Enter any "Employee Clearance Notes" in the text field.
5. Select whether the employee has an "Employee Id" or not.
6. Enter the employee's "Department" and "Manager Name".
7. Select whether the manager has a "Manager Id" or not.
8. Choose the "Background Check Result".
9. Select the "Clearance Level" for the employee.
10. Enter the "Clearance Status" and "Clearance Date".
11. Enter the "Security Clearance Expiration" date.
12. Choose the "Employee Clearance" status.
13. Select the "Clearance Type".
14. Choose the "Background Check Status".
15. Select whether the employee has "Clearances" or not.
16. Select whether the manager has a "Manager Id".
17. Enter the "Manager".
18. Enter the "Background Check Date".
19. Choose the "Background Check Result".
20. Choose whether the employee has a "Clearance Note".
21. Select the "Background Check" status.
## Field-by-Field Explanation
* **Background Checks** (`background_checks`, `select_multiple`, required: false): Select all background checks that the employee needs to undergo.
* **Health Clearance** (`health_clearance`, `date`, required: false): Enter the date of the employee's health clearance, if applicable.
* **Security Information** (`security_info`, `text`, required: false): Provide any necessary security information for the employee.
* **Employee Clearance Notes** (`employee_clearance_notes`, `note`, required: false): Enter any relevant notes about the employee's clearance.
* **Employee Id** (`employee_id`, `select_one`, required: false): Select whether the employee has an "Employee Id".
* **Department** (`department`, `text`, required: false): Enter the department the employee belongs to.
* **Manager Name** (`manager_name`, `text`, required: false): Enter the name of the employee's manager.
* **Manager Id** (`manager_id`, `select_one`, required: false): Select whether the manager has a "Manager Id".
* **Background Check Result** (`background_check_result`, `select_one`, required: false): Choose the background check result.
* **Clearance Level** (`clearance_level`, `number`, required: false): Select the clearance level for the employee.
* **Clearance Status** (`clearance_status`, `text`, required: false): Enter the status of the employee's clearance.
* **Clearance Date** (`clearance_date`, `date`, required: false): Enter the date of the employee's clearance.
* **Security Clearance Expiration** (`security_clearance_expiration`, `date`, required: false): Enter the date of the security clearance expiration.
* **Employee Clearance** (`employee_clearance`, `select_one`, required: false): Choose whether the employee has clearance or not.
* **Clearance Type** (`clearance_type`, `text`, required: false): Select the type of clearance.
* **Background Check Status** (`background_check_status`, `text`, required: false): Choose the background check status.
* **Clearances** (`clearances`, `select_multiple`, required: false): Select all clearances the employee has.
* **Manager Id** (`manager_id`, `select_one`, required: false): Select whether the manager has a "Manager Id".
* **Manager** (`manager`, `text`, required: false): Enter the manager's name.
* **Background Check Date** (`background_check_date`, `date`, required: false): Enter the date of the background check.
* **Background Check Result** (`background_check_result`, `select_one`, required: false): Choose the background check result.
* **Employee Name** (`employee_name`, `text`, required: false): Enter the employee's name.
* **Clearance Note** (`clearance_note`, `select_one`, required: false): Choose whether the employee has a "Clearance Note".
* **Background Check** (`background_check`, `select_multiple`, required: false): Select all background checks the employee needs to undergo.
