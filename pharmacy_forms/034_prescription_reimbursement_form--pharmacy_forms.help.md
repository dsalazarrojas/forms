<thinking> 
This form is intended to capture information for the reimbursement process of a patient's prescription. It is used by patients to provide data about their prescriptions and medical conditions. The form's purpose is to ensure that the patient's prescription claims are accurate and complete. This form should only be filled out by patients who have been given a prescription by a doctor. It is not intended for public use. 
</thinking>

# Prescription Reimbursement Form - Help Guide
## Purpose
The Prescription Reimbursement Form is a document used to gather information from patients about their prescriptions and medical conditions to facilitate the reimbursement process.

## How To Complete This Form
1. Ensure you have been given a prescription by a doctor before filling out this form.
2. Enter your name and last name in the "First Name" and "Last Name" fields.
3. Enter your address in the "Address" field.
4. Enter your phone number in the "Phone Number" field.
5. Enter your email address in the "Email" field.
6. Select "Yes" or "No" to indicate if you are a policy holder in the "Policy Holder Type" field.
7. Enter your policy holder ID in the "Policy Holder ID" field.
8. Enter your prescription ID in the "Prescription ID" field.
9. Enter the date of your prescription in the "Prescription Date" field.
10. Enter the start date of your prescription in the "Prescription Start Date" field.
11. Enter the end date of your prescription in the "Prescription End Date" field.
12. Enter the total dose of your prescription in the "Prescription Total Dose" field.
13. Enter the name of your medication in the "Medication Name" field.
14. Enter the name of your medical group in the "Medical Group" field.
15. Enter the name of your pharmacy in the "Pharmacy Name" field.
16. Sign your name in the "Patient Signature" field.
17. Enter the current date in the "Date" field.
18. Sign your doctor's name in the "Doctor Signature" field.
19. Select "Yes" or "No" to confirm submission in the "Submit" field.

## Field-by-Field Explanation
* **First Name** (`patient_first_name`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`patient_last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Address** (`address`, text, required): Enter your current address.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Email** (`email`, email, required): Enter your email address.
* **Policy Holder Type** (`policy_holder_type`, select_one, required): Select "Yes" if you are a policy holder, "No" otherwise.
* **Policy Holder ID** (`policy_holder_id`, number, required): Enter your policy holder ID.
* **Prescription ID** (`prescription_id`, number, required): Enter your prescription ID.
* **Prescription Date** (`prescription_date`, date, required): Enter the date of your prescription.
* **Prescription Start Date** (`prescription_start_date`, date, required): Enter the start date of your prescription.
* **Prescription End Date** (`prescription_end_date`, date, required): Enter the end date of your prescription.
* **Prescription Total Dose** (`prescription_total_dose`, text, required): Enter the total dose of your prescription.
* **Medication Name** (`medication_name`, text, required): Enter the name of your medication.
* **Medical Group** (`medical_group`, text, required): Enter the name of your medical group.
* **Pharmacy Name** (`pharmacy_name`, text, required): Enter the name of your pharmacy.
* **Patient Signature** (`patient_signature`, note, required): Sign your name to confirm your identity.
* **Date** (`date`, date, required): Enter the current date.
* **Doctor Signature** (`doctor_signature`, note, required): Sign your doctor's name to confirm their identity.
* **Submit** (`submit`, select_multiple, required): Confirm that you have completed the form correctly.
