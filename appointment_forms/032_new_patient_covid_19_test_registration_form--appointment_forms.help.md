# New Patient COVID-19 Test Registration Form - Help Guide
## Purpose
This form is used to register a new patient for a COVID-19 test. It collects information about the patient, test type, medical insurance, and emergency contact details.

## How To Complete This Form
1. Fill out the patient's personal information (page 1).
2. Select the type of COVID-19 test required (page 1).
3. Provide medical insurance details (page 1).
4. Enter emergency contact information (pages 1-2).
5. Sign the form to confirm completion (page 2).
6. Schedule a test date and time (page 2).

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, text, required: false): Enter the patient's personal details, including name, date of birth, and contact number.
* **Patient Name** (`name`, text, required: false): Enter the patient's name.
* **Date of Birth** (`date_of_birth`, date, required: false): Enter the patient's date of birth.
* **Contact Number** (`contact_number`, text, required: false): Enter the patient's contact number.
* **Email** (`email`, email, required: false): Enter the patient's email address.
* **Test Type** (`test_type`, select_one, required: false): Select the type of COVID-19 test required, such as "COVID-19 Test", "Rapid Test", "PCR Test", or "Serology Test".
* **Other (Specify)** (`test_type_other`, text, required: false): If "Other" is selected for test type, enter a brief description of the test required.
* **Other Test Type** (`test_type_other_text`, text, required: false): Enter the specific test type if it's not listed.
* **Medical Insurance** (`medical_insurance`, select_multiple, required: false): Select all applicable medical insurance types, such as "No Insurance", "Medicare", "Medicaid", or "Private Insurance".
* **Medical Insurance Other** (`medical_insurance_other`, text, required: false): If "Other" is selected for medical insurance, enter a brief description.
* **Other Insurance** (`medical_insurance_other_text`, text, required: false): Enter the specific insurance type if it's not listed.
* **Medical Condition** (`medical_condition`, text, required: false): Enter any medical conditions the patient may have.
* **Medical Condition Other** (`medical_condition_other`, text, required: false): If "Other" is selected for medical condition, enter a brief description.
* **Other Medical Condition** (`medical_condition_other_text`, text, required: false): Enter the specific medical condition if it's not listed.
* **Medical History** (`medical_history`, text, required: false): Enter any relevant medical history.
* **Medical History Other** (`medical_history_other`, text, required: false): If "Other" is selected for medical history, enter a brief description.
* **Other Medical History** (`medical_history_other_text`, text, required: false): Enter the specific medical history if it's not listed.
* **Test Location** (`test_location`, select_one, required: false): Select the location where the test will be performed, such as "Hospital", "Clinic", or "Home".
* **Test Location Other** (`test_location_other`, text, required: false): If "Other" is selected for test location, enter a brief description.
* **Other Test Location** (`test_location_other_text`, text, required: false): Enter the specific test location if it's not listed.
* **Doctor Name** (`doctor_name`, text, required: false): Enter the name of the doctor performing the test.
* **Doctor Name Other** (`doctor_name_other`, text, required: false): If "Other" is selected for doctor name, enter a brief description.
* **Other Doctor Name** (`doctor_name_other_text`, text, required: false): Enter the specific doctor name if it's not listed.
* **Emergency Contact Name** (`emergency_contact_name`, text, required: false): Enter the name of the emergency contact person.
* **Relationship** (`emergency_contact_relationship`, select_one, required: false): Select the relationship between the patient and the emergency contact person, such as "Spouse/Partner", "Parent", "Child", or "Other".
* **Emergency Contact Number** (`emergency_contact_number`, text, required: false): Enter the contact number of the emergency contact person.
* **Emergency Contact Relationship 2** (`emergency_contact_relationship_2`, select_one, required: false): Select the relationship between the patient and the emergency contact person 2, such as "Spouse/Partner", "Parent", "Child", or "Other".
* **Emergency Contact Relationship Other** (`emergency_contact_relationship_other`, text, required: false): If "Other" is selected for emergency contact relationship 2, enter a brief description.
* **Other Relationship** (`emergency_contact_relationship_other_text`, text, required: false): Enter the specific relationship if it's not listed.
* **Patient Signature** (`patient_signature`, note, required: false): This field is for the patient's signature to confirm form completion.
* **Test Date** (`test_date`, date, required: false): Enter the date of the test.
* **Test Time** (`test_time`, time, required: false): Enter the time of the test.
