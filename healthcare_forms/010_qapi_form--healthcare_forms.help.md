<thinking>
The purpose of this form is to gather information about a patient's visit to a healthcare facility. The form is used to capture relevant details about the patient, including their name, ID number, visit date, and visit times. This form is typically used by healthcare professionals to record and review patient data.

To ensure that this form is relevant and not duplicated, we should check that there are no other forms with similar purposes and fields. If a duplicate form is found, we may need to revisit the form's design and purpose.
</thinking>

# qapi_form - Help Guide
## Purpose
This form is used to record information about a patient's visit to a healthcare facility.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review each page to understand what information is required and what options are available.
2. Fill out the form with accurate and complete information about the patient's visit.
3. Ensure that all required fields are completed, and use your best judgment for optional fields.

## Field-by-Field Explanation
* **introduction** (`introduction`, `note`, optional): This page provides a space to include any introduction or notes about the patient's visit.
* **patient_name** (`patient_name`, `text`, optional): Enter the patient's name as it appears on their identification or medical records.
* **patient_id_number** (`patient_id_number`, `number`, optional): Enter the patient's ID number as it appears on their identification or medical records.
* **patient_date_of_visit** (`patient_date_of_visit`, `date`, optional): Enter the date of the patient's visit to the healthcare facility.
* **medical_chart_number** (`medical_chart_number`, `text`, optional): Enter the patient's medical chart number, if applicable.
* **visit_start_time** (`visit_start_time`, `time`, optional): Enter the start time of the patient's visit.
* **visit_end_time** (`visit_end_time`, `time`, optional): Enter the end time of the patient's visit.
* **facility** (`facility`, `text`, optional): Enter the name of the healthcare facility where the patient visited.
* **date_of_visit** (`date_of_visit`, `date`, optional): Enter the date of the patient's visit. **Note:** This field is similar to the "patient_date_of_visit" field, and you may not need to fill this out if you've already entered that information.
