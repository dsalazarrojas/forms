# Medical Prior Authorization Form - Help Guide

## Purpose

This form is used to request medical authorization for patient care services. It collects necessary information from the patient and the medical provider to facilitate the authorization process.

## How To Complete This Form

To complete this form, follow the steps below:

*   Fill in all required fields marked as "required".
*   Select the relevant options for "Medical Group", "Medical Group Options", "Medical Care Type", "Medical Care Type Options", "Request Status", and "Request Status Options" fields carefully, as they play a crucial role in the authorization process.
*   Ensure that the "Date of Service", "Request Date", "Request Time", "Procedure Date", "Authorized Date", and "Procedure Date" fields are filled with accurate dates.
*   Enter accurate patient information in the "Patient Name", "Patient Phone", "Patient Address", "Authorized By", "Doctor's Name", and "Medical Care Provider" fields.

## Field-by-Field Explanation

*   *Patient Name* (`patient_name`, text, **required**): Please enter the patient's full name as it appears on their medical record.
*   *Medical Provider* (`medical_provider`, text, **required**): Enter the name of the patient's medical provider or primary care physician.
*   *Procedure* (`procedure`, text, **not required**): Describe the specific medical procedure or treatment requested for the patient.
*   *Date of Service* (`date_of_service`, date, **required**): Enter the date on which the patient is scheduled to receive the medical service or treatment.
*   *Medical Group* (`medical_group`, select_one, **required**): Select the applicable medical group that the patient belongs to.
*   *Medical Group Options* (`medical_group_options`, select_multiple, **not required**): Select any additional medical groups that may be relevant to the patient's care.
*   *Patient Phone* (`patient_phone`, text, **not required**): Enter the patient's phone number, if available.
*   *Medical Record Number* (`medical_record_number`, text, **required**): Enter the patient's medical record number, if available.
*   *Request Date* (`request_date`, date, **required**): Enter the date on which the request for authorization was made.
*   *Request Time* (`request_time`, time, **required**): Enter the time on which the request for authorization was made.
*   *Patient Address* (`patient_address`, text, **required**): Enter the patient's address for billing and correspondence purposes.
*   *Authorized By* (`authorized_by`, text, **required**): Enter the name of the healthcare professional who authorized the medical service or treatment.
*   *Authorized Date* (`authorized_date`, date, **required**): Enter the date on which the medical service or treatment was authorized.
*   *Medical Department* (`medical_department`, select_one, **required**): Select the relevant medical department that provided the care or service.
*   *Doctor’s Name* (`doctor_name`, text, **required**): Enter the name of the doctor who ordered the medical service or treatment.
*   *Medical Care Provider* (`medical_care_provider`, text, **required**): Enter the name of the medical care provider or facility that will deliver the medical service or treatment.
*   *Procedure Date* (`procedure_date`, date, **not required**): Enter the date on which the medical procedure or treatment was performed.
*   *Authorization Reason* (`authorization_reason`, text, **required**): Enter the reason for the medical authorization.
*   *Medical Care Type* (`medical_care_type`, select_one, **required**): Select the type of medical care or service that is being requested.
*   *Medical Care Type Options* (`medical_care_type_options`, select_multiple, **not required**): Select any additional types of medical care or service that may be applicable.
*   *Request Status* (`request_status`, select_one, **required**): Select the current status of the request for authorization.
*   *Request Status Options* (`request_status_options`, select_multiple, **not required**): Select the relevant status options for the request for authorization.
*   *Patient Age* (`patient_age`, number, **required**): Enter the patient's age, which is crucial for medical planning and treatment decisions.
*   *Medical Care Level* (`medical_care_level`, select_one, **required**): Select the level of medical care that the patient requires, which is crucial for service planning and coordination.
*   *Medical Care Level Options* (`medical_care_level_options`, select_multiple, **not required**): Select any additional levels of medical care that may be required for the patient.
