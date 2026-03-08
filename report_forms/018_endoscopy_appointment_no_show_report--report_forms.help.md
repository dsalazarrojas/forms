# endoscopy_appointment_no_show_report - Help Guide

## Purpose
This form is designed to report no-show appointments for endoscopy procedures. It is used to document instances where patients who were scheduled for endoscopy appointments did not appear for their procedures. This information is valuable for reviewing and adjusting scheduling policies to minimize future no-shows.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine the purpose of the report and the dates you wish to review.
2. Select the relevant procedure dates using the "Procedure Date" field. You can choose a single date or a date range using the "Procedure Date Range" field.
3. Indicate whether the patient showed up for their appointment using the "Provider" field.
4. Choose whether the patient had a procedure scheduled using the "Procedure Type" field.
5. Determine the status of the procedure using the "Procedure Status" field.
6. Enter the patient's name and contact number using the "Patient Name" and "Patient Contact No" fields.
7. Update the follow-up status using the "Follow Up Status" field.
8. Finally, indicate the review status using the "Review Status" field.

## Field-by-Field Explanation
* **Procedure Date** (`procedure_date`, date, required: false): Enter the date of the scheduled endoscopy appointment.
* **Provider** (`provider_id`, select_multiple, required: false): Choose whether the patient showed up for their appointment.
* **Patient** (`patient_id`, select_multiple, required: false): Select the status of the patient's scheduled procedure.
* **Procedure Type** (`procedure_type`, select_one, required: false): Indicate whether the patient had a procedure scheduled.
* **Procedure Status** (`procedure_status`, select_one, required: false): Update the status of the patient's procedure.
* **Patient Name** (`patient_name`, text, required: false): Enter the name of the patient.
* **Patient Contact No** (`patient_contact_no`, text, required: false): Enter the patient's contact number.
* **Procedure Date Range** (`procedure_date_range`, date, required: false): Select a range of dates to review.
* **Follow Up Status** (`follow_up_status`, select_one, required: false): Update the follow-up status.
* **Review Status** (`review_status`, select_one, required: false): Indicate the review status of the report.
