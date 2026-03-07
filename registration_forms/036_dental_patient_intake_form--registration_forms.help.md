<thinking>
To create a user-facing help guide for the Dental Patient Intake Form, we need to first understand the form's purpose and ensure that the form is not already filled out by the user before proceeding. The form's purpose is to collect essential information about the patient, including demographic details, medical history, and insurance information. We'll guide users through the form completion process, explaining each field in detail to ensure they understand what's required and what's optional.</thinking>

# Dental Patient Intake Form - Help Guide
## Purpose
This form is used to collect essential information about a new patient for our dental care services. Please fill out this form to help us get to know you better and provide the best possible care.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your demographic details, including your name, date of birth, and contact information.
2. Share your medical history with us, including any previous medical records or conditions.
3. Provide your emergency contact information, so we can reach out to you in case of an emergency.
4. Share your address and medical record number, if applicable.
5. If you have medical insurance, please select your insurance provider and type of coverage you have.
6. Finally, fill out any other requested fields, such as email and phone number, and provide the date of your last medical record update.

## Field-by-Field Explanation
- **Patient Name** (`patient_name`, text, required): Enter your full name as it appears on your ID or medical records.
  - Please use the format "First Name Last Name".
- **Patient Date of Birth** (`patient_date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YY.
  - This helps us to verify your age and medical history.
- **Contact Number** (`contact_number`, text, required): Enter your phone number where we can reach you for any updates or emergencies.
  - Please use the format 123-456-7890.
- **Medical History** (`medical_history`, note, required): Describe any previous medical conditions or allergies we should know about.
  - Be as detailed as possible to ensure we can provide the best care.
- **Emergency Contact** (`emergency_contact`, text, required): Provide the name and contact information of a family member or friend we can reach out to in case of an emergency.
  - Please include their name, phone number, and relation to you.
- **Patient Address** (`patient_address`, text, required): Enter your home address for mail and appointment reminders.
  - Please use the format "Street Address, City, State ZIP Code".
- **Medical Record Number** (`medical_record_number`, text, required): If you have a medical record number, please enter it here.
  - This helps us to locate your medical history.
- **Medical Specialty** (`medical_specialty`, text, required): If you have a specific medical specialty, please select it from the list.
  - This helps us to tailor your treatment accordingly.
- **Medical Insurance** (`medical_insurance`, select_multiple, required): Do you have medical insurance?
  - Select "Yes" if you have insurance, "No" otherwise.
- **Medical Insurance Provider** (`medical_insurance_provider`, text, required): If you selected "Yes" above, please enter your insurance provider's name.
  - This helps us to verify your insurance coverage.
- **Patient Email** (`patient_email`, email, required): Enter your email address for secure communication and appointment reminders.
  - Please use the format "example@example.com".
- **Patient Phone** (`patient_phone`, text, required): Enter your phone number for easy contact and appointment reminders.
  - Please use the format 123-456-7890.
- **Medical Record Date** (`medical_record_date`, date, required): If you have a medical record date, please enter it here.
  - This helps us to track your medical history.
- **Medical Record Number 2** (`medical_record_number2`, text, required): If you have a second medical record number, please enter it here.
  - This helps us to verify your medical history.
- **Medical History 2** (`medical_history2`, note, required): Describe any additional medical history or conditions we should know about.
  - Be as detailed as possible to ensure we can provide the best care.

Please note that all fields marked as "required" are necessary for our records and treatment planning. If you have any questions or concerns, please do not hesitate to contact us.
