# Biometric Time Clock Consent Form - Help Guide
## Purpose
This form is designed to collect employee consent for the biometric timekeeping system, ensuring employees understand how their biometric data will be used and stored.

## How To Complete This Form
1. Read each section carefully and provide your consent accordingly.
2. Fill in your employee information (first name, last name, employee ID, email address, department, and position title).
3. Select the biometric methods that will be used for timekeeping (fingerprint recognition, facial recognition, iris recognition, voice recognition, or hand geometry).
4. Choose the primary purpose of data collection (attendance tracking, attendance and security access, attendance and payroll integration, or other business purposes).
5. Acknowledge your understanding of your biometric data's privacy rights.
6. Confirm your understanding of data retention periods (while employed only, 1 year after employment ends, 3 years after employment ends, or company discretion).
7. Declare your right to access your biometric data and request its deletion under applicable law.
8. Provide your consent to the collection and use of your biometric data.
9. Sign and date your consent form.

## Field-by-Field Explanation

* **First Name** (`employee_first_name`, text, required): Provide your first name.
* **Last Name** (`employee_last_name`, text, required): Provide your last name.
* **Employee ID** (`employee_id`, text, required): Enter your unique employee identifier.
* **Email Address** (`employee_email`, email, required): Enter your work email address.
* **Department** (`employee_department`, text, required): Enter your department name.
* **Position Title** (`employee_position`, text, required): Enter your job title.
* **Biometric Type Disclosure** (`biometric_type_disclosure`, select_multiple, required): Choose the biometric methods to be used for timekeeping (fingerprint recognition, facial recognition, iris recognition, voice recognition, or hand geometry).
* **Data Collection Purpose** (`data_collection_purpose`, select_one, required): Select the primary purpose of data collection (attendance tracking, attendance and security access, attendance and payroll integration, or other business purposes).
* **Privacy Acknowledgment** (`privacy_acknowledgment`, select_one, required): Confirm you understand your biometric data's privacy rights (I Understand or I Do Not Understand).
* **Data Retention Period** (`data_retention_period`, select_one, required): Choose the biometric data retention period (while employed only, 1 year after employment ends, 3 years after employment ends, or company discretion).
* **Right to Access** (`right_to_access`, select_one, required): Declare your right to access your biometric data (I Agree or I Do Not Agree).
* **Right to Deletion** (`right_to_deletion`, select_one, required): Confirm you understand you can request deletion of your biometric data under applicable law (I Agree or I Do Not Agree).
* **Voluntary Consent** (`voluntary_consent`, select_one, required): Provide your consent to the collection and use of your biometric data (I Consent or I Do Not Consent).
* **Acknowledgment of Terms** (`acknowledgment_of_terms`, select_one, required): Confirm you have read and understand all terms in this consent form (I Acknowledge and Agree or I Do Not Agree).
* **Consent Date** (`consent_date`, date, required): Fill in today's date.
* **Questions or Concerns** (`questions_concerns`, text, optional): Share any questions or concerns about the biometric system.
