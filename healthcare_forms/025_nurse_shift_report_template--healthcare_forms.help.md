# Nurse Shift Report Template - Help Guide
## Purpose
This form is a template for reporting the details of a shift worked by a nurse in a healthcare setting.

## How To Complete This Form
To complete this form, please follow these steps:

*   Start by filling in the "Start Time" field with the beginning of your shift, using the format `HH:MM AM/PM`.
*   Next, fill in the "End Time" field with the end of your shift, using the same format as the "Start Time" field.
*   In the "Notes" field, write down any notable events, observations, or concerns that occurred during your shift.
*   For "Staff", select the name of the nurse who worked the shift.
*   Finally, select all the locations where you worked during your shift from the "Location" field.

## Field-by-Field Explanation
*   **Start Time** (`start_time`, time, required: false): Enter the start time of your shift in the format `HH:MM AM/PM`.
*   **End Time** (`end_time`, time, required: false): Enter the end time of your shift in the format `HH:MM AM/PM`.
*   **Notes** (`notes`, note, required: false): Write down any notable events, observations, or concerns that occurred during your shift.
*   **Staff** (`prophets`, select_one, required: false): Select the name of the nurse who worked the shift.
*   **Location** (`location`, select_multiple, required: false): Select all the locations where you worked during your shift.
