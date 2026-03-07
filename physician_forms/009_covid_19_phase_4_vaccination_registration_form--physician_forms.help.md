# COVID 19 Phase 4 Vaccination Registration Form - Help Guide
## Purpose
This form is designed to collect information from individuals who are eligible to receive the COVID-19 vaccine during Phase 4 of the vaccination program. Please review the form carefully and ensure you have all the required information before proceeding.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your registrant's name in the "Registrant Name" field.
2. Check the "Is this registration for a child?" box if the registrant is under 18 years old. If yes, please provide the parent or guardian's name in the "Parent or Guardian Name" field.
3. Enter the registrant's date of birth in the "Date of Birth" field.
4. Enter the name of the registrant's school or employer if applicable in the "School or Employer Name" field.
5. Provide your contact phone number in the "Contact Phone Number" field.
6. Enter your email address in the "Contact Email Address" field.
7. List any known medical exemptions or severe allergies in the "Please list any known medical exemptions or severe allergies" field.
8. Check the box indicating that you give consent for this registrant to receive the vaccine, if the registrant is under 18 years old.
9. Select your preferred vaccination site from the options provided.
10. Finally, confirm that the information provided is accurate.

## Field-by-Field Explanation
### Registrant Name (Registrant Name)
*   **Registrant Name** (`registrant_name`, text, required): This is where you enter the name of the individual registering for the vaccine. Enter the name as it appears on their government-issued ID or passport.

*   **Is this registration for a child?** (`is_minor`, select_one, required): If the registrant is under 18 years old, check this box and provide the parent or guardian's name in the next field. If the registrant is 18 or older, this field is not required.

*   **Parent or Guardian Name** (`parent_guardian_name`, text, optional): If the registrant is under 18 years old, enter the name and contact information of the parent or guardian here.

*   **Date of Birth** (`dob_registrant`, date, required): Enter the registrant's date of birth in the format of month/day/year (MM/DD/YYYY).

*   **School or Employer Name** (`school_employer`, text, optional): If the registrant is a student or an employee, enter the name of their school or employer here.

*   **Contact Phone Number** (`phone_contact`, text, required): Enter your phone number where you can be reached for further information or confirmation.

*   **Contact Email Address** (`email_contact`, email, required): Enter your email address where you can receive further information or confirmation.

*   **Please list any known medical exemptions or severe allergies** (`medical_exemptions`, text, required): List any known medical exemptions or severe allergies that the registrant has.

*   **I give consent for this registrant to receive the vaccine** (`guardian_consent`, select_one, required): Check this box to indicate that you give consent for the registrant to receive the vaccine, if the registrant is under 18 years old.

*   **Preferred Vaccination Site** (`preferred_site`, select_one, required): Select the preferred location to administer the vaccine from the options provided.

*   **I confirm the information provided is accurate** (`information_accuracy`, select_one, required): Confirm that the information provided is accurate to ensure the registrant's details are correct.

### Tips
Please review the form carefully before submitting to ensure all required fields are filled and information is accurate. If you have any questions or need further assistance, please do not hesitate to contact us.
