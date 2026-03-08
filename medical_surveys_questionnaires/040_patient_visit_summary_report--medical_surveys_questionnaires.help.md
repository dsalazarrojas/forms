# Patient Visit Summary Report - Help Guide

## Purpose
The Patient Visit Summary Report is used by healthcare providers to summarize key information about a patient's visit, including their visit details, medical history, and billing information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the Patient Name field.
2. Select the date of the visit using the Visit Date field.
3. Choose the type of visit using the Visit Type field.
4. Provide the reason for the visit in the Reason for Visit field.
5. Enter any necessary treatment plans in the Treatment Plan field.
6. Enter the patient's comments about their visit in the Patient Comments field.
7. Enter the provider's comments about the visit in the Provider Comments field.
8. Enter the patient's ID number in the Patient ID field.
9. Select the duration of the visit using the Visit Duration field.
10. Enter the total cost of the visit in the Total Cost field.
11. Select the payment method used for the visit in the Payment Method field.
12. Select the status of the payment in the Payment Status field.
13. Enter the location of the visit in the Visit Location field.
14. Select the patient's status in the Patient Status field.
15. Select the status of the visit in the Visit Status field.
16. Enter any relevant medical history in the Medical History field.
17. List any allergies the patient has in the Allergies field.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's full name, as recorded in their medical record.
* **Visit Date** (`visit_date`, date, required): Select the date of the patient's visit.
* **Provider Name** (`provider_name`, text, optional): Enter the name of the healthcare provider who conducted the visit.
* **Visit Type** (`visit_type`, select_one, required): Choose the type of visit from the options provided, such as "New Patient" or "Returning Patient".
* **Reason for Visit** (`reason_for_visit`, text, required): Enter a brief description of the reason for the visit.
* **Diagnosis** (`diagnosis`, text, optional): Enter any relevant diagnosis information from the visit.
* **Treatment Plan** (`treatment_plan`, text, required): Enter any necessary treatment plans or instructions for the patient.
* **Patient Comments** (`patient_comments`, text, optional): Enter any comments or feedback from the patient about their visit.
* **Provider Comments** (`provider_comments`, text, optional): Enter any comments or feedback from the provider about the visit.
* **Patient ID** (`patient_id`, number, required): Enter the patient's ID number, as recorded in their medical record.
* **Visit Duration** (`visit_duration`, number, optional): Enter the length of the visit, in minutes or hours.
* **Total Cost** (`total_cost`, number, optional): Enter the total cost of the visit.
* **Insurance** (`insurance`, text, optional): Enter any information about the patient's insurance coverage.
* **Payment Method** (`payment_method`, select_multiple, required): Select the method of payment used for the visit, such as "Cash" or "Insurance".
* **Payment Status** (`payment_status`, select_one, required): Select the status of the payment, such as "Paid" or "Pending".
* **Visit Location** (`visit_location`, text, optional): Enter the location of the visit, such as a clinic or hospital.
* **Patient Status** (`patient_status`, select_one, required): Select the status of the patient, such as "Active" or "Inactive".
* **Visit Status** (`visit_status`, select_one, required): Select the status of the visit, such as "Completed" or "Scheduled".
* **Notes** (`notes`, text, optional): Enter any additional notes or comments about the visit.
* **Billing Status** (`billing_status`, select_one, required): Select the status of the billing, such as "Active" or "Inactive".
* **Visit Date of Last Checkup** (`visit_date_of_last_checkup`, date, optional): Enter the date of the last checkup visit.
* **Visit Date of Last Visit** (`visit_date_of_last_visit`, date, optional): Enter the date of the last visit.
* **Next Visit Date** (`next_visit_date`, date, optional): Enter the date of the next visit.
* **Last Visit Date** (`last_visit_date`, date, optional): Enter the date of the last visit.
* **Visit Frequency** (`visit_frequency`, select_one, optional): Select the frequency of the visit, such as "Daily" or "Monthly".
* **Medical History** (`medical_history`, text, optional): Enter any relevant medical history information from the patient's record.
* **Allergies** (`allergies`, text, optional): List any allergies the patient has.
