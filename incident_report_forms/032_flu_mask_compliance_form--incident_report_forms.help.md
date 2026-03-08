<thinking>
This form is designed to collect information about employee and patient flu mask compliance status. It is used to track employees' and patients' flu mask compliance status, including their flu diagnosis date, contact tracing, and mask-wearing status. This form is intended to be completed by employees or their representatives, and it is used to inform management or other relevant parties about the status of mask compliance in the workplace. 

To ensure data quality and avoid duplication, please ensure that each form is only completed once per employee and patient, and that all relevant information is accurately recorded. If there are multiple employees or patients involved, please use the additional "More Patient Info", "More Employee Info" and "More Contact Traced Info" fields for detailed information.

Please note that the submitted_by, submitted_to, and assigned_to fields are intended to capture who submitted the form, to whom it was submitted, and to whom it was assigned, respectively. These fields are used to track the form's lifecycle and ensure that it reaches the intended recipient.
</thinking>

# Flu Mask Compliance Form - Help Guide

## Purpose
The purpose of this form is to track employees' and patients' flu mask compliance status, including their flu diagnosis date, contact tracing, and mask-wearing status.

## How To Complete This Form
1. Fill out the form with the required information.
2. Ensure that all fields marked as "required" are completed.
3. Select the correct status for each field as applicable.
4. Use the "More Patient Info", "More Employee Info", and "More Contact Traced Info" fields for detailed information if required.
5. Submit the form to the intended recipient.

## Field-by-Field Explanation

* **Employee Info** (`employee_info`, text, Optional): Enter any additional employee information.
* **More Employee Info** (`employee_info_2`, text, Optional): Enter any additional employee information.
* **Employee ID** (`employee_id`, number, Optional): Enter the employee ID number.
* **Patient ID** (`patient_id`, number, Optional): Enter the patient ID number.
* **Flu Date** (`flu_date`, date, Optional): Enter the date of the flu diagnosis.
* **Flu Status** (`flu_status`, select_one, Required): Select the current patient's flu status (Positive or Not Flu).
* **Flu Mask Procedure Status** (`flu_mask_procedure_status`, select_multiple, Required): Select the mask procedure status (Done or Not Done).
* **Employee Mask Status** (`mask_worn`, select_multiple, Required): Select the employee's mask wearing status (Worn, Not Worn, Not Applicable).
* **Employee Contact Traced** (`contact_traced`, select_multiple, Required): Select whether the employee has been contact traced (Contact, No Contact).
* **More Patient Info** (`patient_info_2`, text, Optional): Enter any additional patient information.
* **More Contact Traced Info** (`contact_traced_2`, text, Optional): Enter any additional contact traced information.
* **Mask Procedure Status** (`mask_procedure`, select_multiple, Required): Select the procedure status (Not Done, Done).
* **Follow Up Status** (`follow_up`, select_multiple, Required): Select the follow-up status (Not Done, Done).
* **Notes** (`notes`, note, Optional): Enter any additional comments or notes.
* **Submission Time** (`submitted_time`, time, Optional): Enter the time of submission.
* **Form Completed** (`form_completed`, select_one, Required): Select whether the form is completed or not.
* **Form Completed Time** (`form_completed_time`, time, Optional): Enter the time of form completion.
* **Submission By** (`submitted_by`, select_one, Required): Select the person who submitted the form.
* **Submitted To** (`submitted_to`, select_one, Required): Select the person to whom the form was submitted.
* **Assigned To** (`assigned_to`, select_one, Required): Select the person to whom the form is assigned.
* **Form Submitted By ID** (`submitted_by_id`, number, Optional): Enter the ID of the person who submitted the form.
* **Form Submitted To ID** (`submitted_to_id`, number, Optional): Enter the ID of the person to whom the form was submitted.
* **Form Assigned To ID** (`assigned_to_id`, number, Optional): Enter the ID of the person to whom the form is assigned.
