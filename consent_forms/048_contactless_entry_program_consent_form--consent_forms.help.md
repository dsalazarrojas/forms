# Contactless Entry Program Consent Form - Help Guide
## Purpose
The Contactless Entry Program Consent Form is designed to gather information and gain consent from participants for the contactless entry program, allowing them to access certain areas of the building using specific methods.

## How To Complete This Form

1. Review the form carefully to understand the purpose and requirements.
2. Enter your first name, last name, and organization name.
3. Provide your contact email and phone number.
4. Select your requested access level, entry points, and preferred contactless method.
5. If applicable, select your mobile platform if you're using a mobile credential.
6. Acknowledge the program terms, accept the privacy policy, consent to data sharing, and accept liability terms.
7. Confirm if you require training and select a start date for the program.
8. Choose a program duration and whether to authorize emergency access.
9. Provide a digital signature and signature date.
10. Finally, have an administrator approve your application.

## Field-by-Field Explanation

* **Contactless Entry Program Consent Form** (`form_title`, note, optional): This is the title of the form and a placeholder for any additional comments or instructions.
* **First Name** (`participant_first_name`, text, required): Enter your given name.
* **Last Name** (`participant_last_name`, text, required): Enter your surname.
* **Organization** (`organization`, text, required): Enter the name of your company or building.
* **Department** (`department`, text, optional): Enter your department or team.
* **Employee ID** (`employee_id`, text, optional): Enter your identification number if applicable.
* **Email Address** (`email`, email, required): Enter your contact email.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Requested Access Level** (`access_level`, select_one, required): Select the access level you require.
*   *   Full Building Access: Access to all areas of the building.
  *   Floor Specific: Access to specific floors only.
  *   Common Areas Only: Access to common areas only.
  *   After Hours Access: Access during non-business hours.
  *   Weekend Access: Access on weekends.
* **Entry Points Needed** (`entry_points`, select_multiple, required): Select all entry points you need access to.
*   *   Main Entrance: Entry through the main entrance.
  *   Side Entrance: Entry through a side entrance.
  *   Garage Entrance: Entry through the garage.
  *   Service Entrance: Entry through the service entrance.
  *   Rooftop Access: Access to the rooftop.
* **Contactless Method Preference** (`contactless_method`, select_one, required): Select your preferred contactless method.
*   *   Mobile Credential: Use a mobile app to gain access.
  *   Biometric Scan: Use a biometric scan for authentication.
  *   Proximity Card: Use a proximity card for access.
  *   QR Code: Use a QR code for access.
  *   Facial Recognition: Use facial recognition for access.
* **Mobile Platform** (`mobile_platform`, select_one, optional): If using a mobile credential, select the platform (iOS or Android).
*   *   iOS: Use iOS for mobile access.
  *   Android: Use Android for mobile access.
  *   Not Applicable: Not using a mobile credential.
* **Program Terms Acknowledgment** (`program_terms`, select_one, required): Confirm you understand the program terms.
*   *   Yes I Understand: You acknowledge understanding the terms.
  *   No - Need More Info: You need more information about the terms.
* **Privacy Policy Acceptance** (`privacy_policy`, select_one, required): Confirm you accept the privacy policy.
*   *   I Accept: You accept the privacy policy.
  *   I Do Not Accept: You do not accept the privacy policy.
* **Data Sharing Consent** (`data_sharing`, select_one, required): Confirm you consent to data sharing.
*   *   I Consent: You consent to data sharing.
  *   I Do Not Consent: You do not consent to data sharing.
* **Liability Waiver** (`liability_waiver`, select_one, required): Accept the liability terms.
*   *   I Accept: You accept the liability terms.
  *   I Do Not Accept: You do not accept the liability terms.
* **Training Required** (`training_required`, select_one, required): Confirm if you need training.
*   *   'True': You require training.
  *   No - I Am Familiar: You are familiar with the system.
* **Training Completion Date** (`training_date`, date, optional): Enter the date you completed training if required.
*   *   Date to fill in the format MM/DD/YYYY.
* **Program Start Date** (`start_date`, date, required): Enter the start date of the program.
*   *   Date to fill in the format MM/DD/YYYY.
* **Program Duration** (`duration`, select_one, required): Select the program duration.
*   *   30 days: Access duration of 30 days.
  *   90 days: Access duration of 90 days.
  *   6 months: Access duration of 6 months.
  *   1 year: Access duration of 1 year.
  *   Indefinite: No end date.
* **Emergency Override Authorization** (`emergency_override`, select_one, required): Authorize emergency access.
*   *   'True': Authorize emergency access.
  *   'False': Do not authorize emergency access.
* **Participant Signature** (`participant_signature`, text, required): Add a digital signature.
*   *   A handwritten signature is not required.
* **Signature Date** (`signature_date`, date, required): Enter the date you signed the form.
*   *   Date to fill in the format MM/DD/YYYY.
* **Administrator Approval** (`administrator_approval`, text, required): Enter your administrator's name.
*   *   This field is for administrative purposes only.
