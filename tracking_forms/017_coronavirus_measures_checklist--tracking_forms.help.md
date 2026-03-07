<thinking>
We need to create a help guide for a form used to track coronavirus measures. This form appears to be used for logging symptoms, temperatures, and other relevant information about employees. It's possible this form is used for employee health monitoring or reporting within an organization. The purpose of this form is not explicitly stated in the YAML, so let's assume it's a checklist of coronavirus measures for employees.
We should verify that the form is not intended to be used for other purposes, like patient tracking.
We should also check for any redundant fields that may not need to be displayed in the help guide. For example, fields 14-17 seem to be duplicates of fields 2-5.
</thinking>

# coronavirus_measures_checklist - Help Guide
## Purpose
This form is used to track employees' coronavirus measures, including symptom logs, temperatures, travel history, and other relevant information.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the Symptom Log on page 1.
2. Enter the employee's temperature in the Temperature field.
3. Check if the employee has travelled recently in the Travel Log field.
4. Check if the employee has been in contact with anyone who has been infected in the Contact Trace field.
5. Select the employee's status as Active or Inactive in the Employee Status field.
6. Check if the employee has symptoms in the Symptoms field.
7. Enter any relevant details about the employee's last contact in the Last Contact field.
8. Select the employee's travel history in the Travel History field.
9. Enter any details about the employee's last contact in the Last Contact Details field.
10. Select the employee's travel history in the Travel Last Contact field.
11. Select any symptoms the employee is experiencing in the Symptoms Description field.
12. Enter the employee's current temperature in the Temperature 2 field.
13. Select the employee's status as Active or Inactive in the Employee Status 2 field.
14. Check if the employee has symptoms in the Symptoms 2 field.
15. Check if the employee has been in contact with anyone who has been infected in the Contact Trace 2 field.

## Field-by-Field Explanation
* **Symptom Log** (`symptom_log`, note, not required): Enter any symptoms the employee is experiencing.
* **Temperature** (`temperature`, number, not required): Enter the employee's current temperature.
* **Travel Log** (`travel_log`, select_one, not required): Check if the employee has recently travelled.
* **Employee Id** (`employee_id`, number, not required): Enter the employee's ID number.
* **Employee Status** (`employee_status`, select_multiple, not required): Select the employee's status as Active or Inactive.
* **Symptoms** (`symptoms`, select_multiple, not required): Check if the employee has any symptoms.
* **Contact Trace** (`contact_trace`, select_multiple, not required): Check if the employee has been in contact with anyone who has been infected.
* **Travel History** (`travel_history`, select_multiple, not required): Check if the employee has recently travelled.
* **Last Contact** (`last_contact`, select_one, not required): Check if the employee has had any contact recently.
* **Last Contact Details** (`last_contact_details`, select_multiple, not required): Enter any details about the employee's last contact.
* **Travel Last Contact** (`travel_last_contact`, select_multiple, not required): Check if the employee has recently travelled.
* **Travel Last Contact Details** (`travel_last_contact_details`, select_multiple, not required): Enter any details about the employee's last contact.
* **Symptoms Description** (`symptoms_description`, text, not required): Enter any details about the employee's symptoms.
* **Temperature 2** (`temperature_2`, number, not required): Enter the employee's current temperature. (Duplicate of **Temperature** field)
* **Employee Status 2** (`employee_status_2`, select_one, not required): Select the employee's status as Active or Inactive. (Duplicate of **Employee Status** field)
* **Symptoms 2** (`symptoms_2`, select_multiple, not required): Check if the employee has any symptoms. (Duplicate of **Symptoms** field)
* **Contact Trace 2** (`contact_trace_2`, select_multiple, not required): Check if the employee has been in contact with anyone who has been infected. (Duplicate of **Contact Trace** field)

## Tips
* Be honest and accurate when filling out the form.
* Make sure to include all relevant details.
* Review and update the form as needed.
