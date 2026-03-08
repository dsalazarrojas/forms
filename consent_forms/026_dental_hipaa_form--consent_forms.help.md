# dental_hipaa_form--consent_forms - Help Guide
## Purpose
This form collects patient information and medical history for HIPAA compliance.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the **Patient Name** field.
2. Provide the patient's **Date of Birth** in the correct format (MM/DD/YYYY).
3. Enter the patient's **Address**.
4. Enter the patient's **Contact Number**.
5. Check the box if the patient has **Medical Insurance**.
6. Enter the **Emergency Contact Person's Name**.
7. Provide the patient's **Date of Last Visit** (if applicable).
8. Check the boxes for any **Medical Conditions** the patient has.
9. Check the boxes for any **Allergies** the patient has.
10. Check the boxes for any **Medication** the patient is taking.
11. Enter the **Medical Provider's Name**.
12. Provide the **Emergency Contact Information**.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their identification documents.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Address** (`address`, text, required): Enter the patient's address or the address where they can be reached.
* **Contact Number** (`contact_number`, text, required): Enter the patient's contact phone number where they can be reached.
* **Medical Insurance** (`medical_insurance`, select_one, optional): Check this box if the patient has medical insurance.
* **Emergency Contact Person** (`emergency_contact_person`, text, optional): Enter the name of the emergency contact person.
* **Date of Last Visit** (`date_of_last_visit`, date, optional): If the patient has visited the dental clinic before, enter the date of their last visit.
* **Medical Conditions** (`medical_conditions`, select_multiple, optional): Check the boxes for any medical conditions the patient has, such as diabetes or high blood pressure.
* **Allergies** (`allergies`, select_multiple, optional): Check the boxes for any allergies the patient has, such as nuts or shellfish.
* **Medication** (`medication`, select_multiple, optional): Check the boxes for any medication the patient is taking.
* **Medical Provider** (`medical_provider`, text, required): Enter the name of the patient's primary medical provider.
* **Emergency Contact Information** (`emergency_contact_information`, text, required): Enter the emergency contact person's name and contact information.
