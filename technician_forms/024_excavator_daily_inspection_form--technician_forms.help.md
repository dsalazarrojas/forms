# Excavator Daily Inspection Form - Help Guide
## Purpose
The Excavator Daily Inspection Form is used to record and track the daily inspection of an excavator, ensuring its safe and efficient operation.

## How To Complete This Form
1. Fill out the "Operator" field with your name.
2. Enter the "Excavator Serial Number" in the corresponding field.
3. Fill out the "Date" and "Time" fields with the current date and time of the inspection.
4. Enter the number of hours the excavator has been operated in the "Machine Hours" field.
5. Select the option for "Safety Check Performed" that applies to your inspection.
6. Select all applicable options for "Safety Check Result" that describe the outcome of the safety check.
7. (Optional) Fill out the "Comments" field with any additional comments or notes about the inspection.
8. Select the name of the person assigned to review and action the results of the inspection from the "Assigned To" field.

## Field-by-Field Explanation
* **Operator** (`Operator`, `text`, required): Enter your name as the technician conducting the inspection.
* **Excavator Serial Number** (`Excavator Serial Number`, `text`, required): Enter the serial number of the excavator being inspected.
* **Date** (`Date`, `date`, required): Fill out the current date of the inspection.
* **Time** (`Time`, `time`, required): Fill out the current time of the inspection.
* **Machine Hours** (`Machine Hours`, `number`, required): Enter the number of hours the excavator has been operated.
* **Safety Check Performed** (`Safety Check Performed`, `select_one`, required): Select whether the safety check was performed or not.
* **Safety Check Result** (`Safety Check Result`, `select_multiple`, required): Select all applicable options that describe the outcome of the safety check.
* **Comments** (`Comments`, `note`, optional): Fill out any additional comments or notes about the inspection (not required).
* **Assigned To** (`Assigned To`, `select_one`, required): Select the name of the person assigned to review and action the results of the inspection.
