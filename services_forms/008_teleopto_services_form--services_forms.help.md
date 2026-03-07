<thinking>...</thinking>

# Teleopto Services Form - Help Guide
## Purpose
The Teleopto Services Form is designed to collect relevant information about patients and medical practices for the purpose of providing services. This form is required for patients and medical practices to access certain services.

## How To Complete This Form

To complete this form, follow the steps below:
1. Enter the patient's information in the relevant fields, including their First Name, Last Name, Date of Birth, Email, and Phone Number.
2. Enter the patient's address information, if applicable, in the Address 1 and Address 2 fields.
3. Enter the Monitoring Device ID, which is a required field for accessing services.
4. Enter the Medical Practice Name and Medical Practice Address.
5. Select the Assigned Tool from the dropdown list.

## Field-by-Field Explanation

* **First Name** (`patient_name`, text, required): Enter the patient's first name in this field.
* **Last Name** (`patient_last_name`, text, required): Enter the patient's last name in this field.
* **Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in the format dd/mm/yyyy.
* **Email** (`patient_email`, email, required): Enter the patient's email address in the correct format, i.e., [username]@domain.com.
* **Phone Number** (`patient_phone`, text, required): Enter the patient's phone number without any special characters or spaces.
* **Address 1** (`patient_address_1`, text, optional): Enter the patient's address line 1 if applicable.
* **Address 2** (`patient_address_2`, text, optional): Enter the patient's address line 2 if applicable.
* **Monitoring Device ID** (`monitoring_device_id`, text, required): Enter the Monitoring Device ID provided to you.
* **Medical Practice Name** (`medical_practice_name`, text, required): Enter the Medical Practice name.
* **Medical Practice Address** (`medical_practice_address`, text, required): Enter the Medical Practice address.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select the tool that has been assigned to you from the dropdown list.
