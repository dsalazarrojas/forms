# Daily Patient Census Report - Help Guide
## Purpose
The Daily Patient Census Report is a daily report that tracks the number of patients present in the unit at the end of each shift. This report is used for quality control and data analysis.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Unit** field with the name of the unit you are reporting for.
2. Fill out the **date** field with the date of the shift you are reporting for.
3. Enter the **Start Time** field with the time the shift started.
4. Enter the **End Time** field with the time the shift ended.
5. Fill out the **Total Patients** field with the total number of patients present in the unit at the end of the shift.
6. Enter the number of patients who were **Admitted** at the end of the shift.
7. Enter the number of patients who were **Discharged** at the end of the shift.
8. Fill out the **Visiting** field with the number of patients visiting the unit at the end of the shift.
9. Enter the number of patients who are **In Progress** at the end of the shift.
10. If there are any additional comments or information not captured in the other fields, please enter it in the **Notes** field.

## Field-by-Field Explanation
* **Unit** (`unit_name`, text, optional): Enter the name of the unit you are reporting for.
* **Date** (`date`, date, optional): Enter the date of the shift you are reporting for.
* **Start Time** (`time_start`, time, optional): Enter the time the shift started.
* **End Time** (`time_end`, time, optional): Enter the time the shift ended.
* **Total Patients** (`total_patients`, number, optional): Fill out the number of patients present in the unit at the end of the shift.
* **Admitted** (`admitted_patients`, number, optional): Enter the number of patients who were admitted at the end of the shift.
* **Discharged** (`discharged_patients`, number, optional): Enter the number of patients who were discharged at the end of the shift.
* **Visiting** (`total_visiting`, number, optional): Fill out the number of patients visiting the unit at the end of the shift.
* **In Progress** (`patients_in_progress`, number, optional): Enter the number of patients who are in progress at the end of the shift.
* **Other** (`other`, text, optional): If there are any additional comments or information not captured in the other fields, enter it here.
* **Notes** (`notes`, text, optional): Enter any additional comments or information not captured in the other fields.
