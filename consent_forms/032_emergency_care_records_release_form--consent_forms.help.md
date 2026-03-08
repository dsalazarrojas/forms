# Emergency Care Records Release Form - Help Guide
## Purpose
The Emergency Care Records Release Form is used to obtain consent from patients or their authorized representatives to access and share their emergency care records. This form ensures that their medical information is shared securely and in accordance with their wishes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Please ensure that you are completing this form for the correct purpose and individual.
2. Fill out the form completely and accurately.

## Field-by-Field Explanation
### Form 1: Patient's Name
 * **patient_name** (`patient_name`, text, optional): This field is used to collect the patient's name for reference purposes.

### Form 2: Relationship with the Patient
 * **patient_relationship** (`patient_relationship`, select_one, optional): This field asks if you are the patient or an authorized representative of the patient. Please select "Yes" if you are the patient or an authorized representative, and "No" if you are not.

### Form 3: Date of Birth
 * **date_of_birth** (`date_of_birth`, date, optional): This field is used to collect the patient's date of birth for reference purposes.

### Form 4: Emergency Contact Name
 * **emergency_contact_name** (`emergency_contact_name`, text, optional): This field is used to collect the name of the emergency contact person.

### Form 5: Emergency Contact Phone
 * **emergency_contact_phone** (`emergency_contact_phone`, text, optional): This field is used to collect the phone number of the emergency contact person.

### Form 6: Emergency Contact Email
 * **emergency_contact_email** (`emergency_contact_email`, email, optional): This field is used to collect the email address of the emergency contact person.

### Form 7: Relationship with Emergency Contact
 * **emergency_contact_relationship** (`emergency_contact_relationship`, select_one, optional): This field asks if you are the emergency contact or an authorized representative of the contact. Please select "Yes" if you are the emergency contact or an authorized representative, and "No" if you are not.

### Form 8: Healthcare Provider
 * **healthcare_provider** (`healthcare_provider`, text, optional): This field is used to collect the name of the healthcare provider who will be accessing the patient's records.

### Form 9: Release Authorization
 * **release_authorization** (`release_authorization`, note, optional): This field is a statement confirming that you are authorized to access the patient's records. Please use this field to provide a brief statement of your release authorization.

### Form 10: Release Expiration
 * **release_expiration** (`release_expiration`, date, optional): This field is used to specify the date after which the authorization will expire. Please enter a date in the format YYYY-MM-DD.

## Tips
- Make sure to fill out all required fields accurately.
- If you are an authorized representative, ensure that you are acting on behalf of the patient.
- If you are unsure about any field, please consult with the patient or their authorized representative before completing the form.
