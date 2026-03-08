<thinking>
The purpose of this form is to allow patients to inform their current doctor that they wish to switch to a different doctor or medical practice. This form is used for administrative reasons, and it is used to ensure that the process of switching doctors is done in a secure and compliant manner. The form is also used to collect information about the patient's current and new doctor, as well as their medical history. It's also used to request the transfer of medical records.

Before starting this form, it's essential to check that you're not already using a doctor. If you've already started the process of switching doctors, do not fill out this form. You can use the "Change of Doctor" form multiple times if you need to switch to another doctor.

Please note that this form is required for all patients who want to switch doctors, even if they are switching between doctors in the same medical group or organization.
</thinking>

# Change Of Doctor Form - Help Guide
## Purpose
This form is designed for patients to inform their current doctor that they wish to switch to a different doctor or medical practice. It ensures that the process of switching doctors is secure and compliant.

## How To Complete This Form
1. Fill in the form with your details and reasons for switching.
2. Submit the form to initiate the process of switching doctors.

## Field-by-Field Explanation

* **Form Date** (`form_date`): This is the date and time you are submitting the form.
	+ Type: Date
	+ Required: True
* **Patient Name** (`patient_name`): Your full legal name.
	+ Type: Text
	+ Required: True
* **Date of Birth** (`date_of_birth`): Your birth date.
	+ Type: Date
	+ Required: True
* **Patient ID Number** (`patient_id`): Your medical record number.
	+ Type: Text
	+ Required: False
* **Insurance Provider Name** (`insurance_provider`): The name of your insurance company.
	+ Type: Text
	+ Required: True
* **Policy Number** (`policy_number`): Your insurance policy number.
	+ Type: Text
	+ Required: True
* **Email Address** (`email_address`): Your contact email.
	+ Type: Email
	+ Required: True
* **Phone Number** (`phone_number`): Your contact phone number.
	+ Type: Text
	+ Required: True
* **Mailing Address** (`mailing_address`): Your current address.
	+ Type: Text
	+ Required: False
* **Previous Doctor Name** (`previous_doctor_name`): The name of your previous doctor.
	+ Type: Text
	+ Required: True
* **Previous Doctor Specialty** (`previous_doctor_specialty`): The medical specialty of your previous doctor.
	+ Type: Text
	+ Required: False
* **Previous Doctor's Office** (`previous_doctor_office`): The name of your previous doctor's practice or clinic.
	+ Type: Text
	+ Required: False
* **Years with Previous Doctor** (`years_with_previous_doctor`): How long you've been seeing your previous doctor.
	+ Type: Number
	+ Required: False
* **New Doctor Name** (`new_doctor_name`): The name of your new doctor.
	+ Type: Text
	+ Required: True
* **New Doctor Specialty** (`new_doctor_specialty`): The medical specialty of your new doctor.
	+ Type: Text
	+ Required: False
* **New Doctor's Office** (`new_doctor_office`): The name of your new doctor's practice or clinic.
	+ Type: Text
	+ Required: False
* **New Doctor's Phone Number** (`new_doctor_phone`): The contact number of your new doctor.
	+ Type: Text
	+ Required: False
* **Reason for Changing Doctors** (`reason_for_change`): Why you're switching doctors.
	+ Type: Text
	+ Required: False
* **Request Medical Records Transfer** (`medical_records_request`): You can request the transfer of your medical records.
	+ Type: Select One
	+ Options: 'Yes', 'No'
	+ Required: True
* **I Authorize This Doctor Change** (`authorization`): Confirm that you authorize the change.
	+ Type: Select One
	+ Options: 'Yes, I Authorize', 'No'
	+ Required: True
