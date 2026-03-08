# Medication Record Form - Help Guide

## Purpose
This form is designed to record and store information about a patient's medication regimen, including the name of the medication, frequency, dosages, and other relevant details.

## How To Complete This Form

To complete this form, follow these steps:

*   Enter the **Medication Name** in the text field.
*   Select the **Frequency** of the medication (e.g., Morning, Afternoon, Evening, Never, Other) from the dropdown list.
*   If applicable, enter the **Dosages Taken** date for the medication in the date field.
*   Add any **Additional Notes** about the medication in the text field.
*   Select the **Medication List** from the dropdown list.
*   Select the **Frequency List** from the dropdown list.
*   Enter the **Start Date** of the medication regimen in the date field, if applicable.
*   Enter the **End Date** of the medication regimen in the date field, if applicable.
*   Enter the **Last Fill Date** of the medication in the date field.
*   Enter the **Last Refilled** date for the medication, if applicable.
*   Enter the **Refill Intervals** for the medication, if applicable.

## Field-by-Field Explanation

*   **Medication Name** (`medication_name`, text, required: false): Enter the name of the medication being recorded.
*   **Frequency** (`frequency`, select_multiple, required: false): Select the frequency of the medication taken (e.g., Morning, Afternoon, Evening, Never, Other).
*   **Dosages Taken** (`dosages`, date, required: false): Enter the date of the last dosage taken, if applicable.
*   **Additional Notes** (`notes`, note, required: false): Enter any additional comments or notes about the medication.
*   **Medication List** (`medication_list`, select_one, required: false): Select the type of medication being recorded (e.g., Acetaminophen, Aspirin, Ibuprofen, Other).
*   **Frequency List** (`frequency_list`, select_multiple, required: false): Select the frequency of the medication taken (e.g., None, Morning, Afternoon, Evening, Never, Other).
*   **Start Date** (`start_date`, date, required: false): Enter the start date of the medication regimen, if applicable.
*   **End Date** (`end_date`, date, required: false): Enter the end date of the medication regimen, if applicable.
*   **Last Fill Date** (`last_fill`, date, required: false): Enter the date of the last fill-up of the medication, if applicable.
*   **Last Refilled** (`last_refilled`, number, required: false): Enter the number of times the medication has been refilled, if applicable.
*   **Refill Intervals** (`refill_intervals`, number, required: false): Enter the number of refill intervals for the medication, if applicable.
