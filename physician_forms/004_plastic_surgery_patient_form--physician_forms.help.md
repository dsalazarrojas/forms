# Plastic Surgery Patient Form - Help Guide
## Purpose
This form is designed to collect personal and medical information from patients undergoing plastic surgery. It's essential to gather accurate and complete data to ensure a safe and successful surgical experience.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill in the patient's first name and last name in the respective fields.
2. Enter the patient's birthdate in the correct format (MM/DD/YYYY).
3. Provide the patient's address, including the street address, city, and state where they reside.
4. Enter the patient's contact number.
5. Enter the patient's email address.
6. Provide a detailed description of the patient's medical history.
7. List any allergies or medical devices the patient is using.
8. Select any relevant medical devices the patient uses.
9. Select any relevant medical procedures the patient has undergone or is currently experiencing.

## Field-by-Field Explanation
* **First Name** (`patient_first_name`, text, required): Enter the patient's first name.
* **Last Name** (`patient_last_name`, text, required): Enter the patient's last name.
* **Birthdate** (`patient_birthdate`, date, required): Enter the patient's birthdate in the format MM/DD/YYYY.
* **Address** (`patient_address`, text, optional): Enter the patient's address, including the street address, city, and state where they reside.
* **Contact Number** (`patient_contact_number`, text, optional): Enter the patient's contact number.
* **Email** (`patient_email`, email, optional): Enter the patient's email address.
* **Medical History** (`medical_history`, text, required): Provide a detailed description of the patient's medical history.
* **Allergies** (`allergies`, text, optional): List any allergies or medical conditions the patient has.
* **Medical Devices** (`medical_devices`, select_multiple, required): Select any relevant medical devices the patient uses, such as pacemakers, wheelchairs, or contact lenses.
* **Medical Procedures** (`medical_procedures`, select_multiple, optional): Select any relevant medical procedures the patient has undergone or is currently experiencing, such as cardiac arrest or cancer.
