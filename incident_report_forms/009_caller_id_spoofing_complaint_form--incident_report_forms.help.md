# Caller ID Spoofing Complaint Form - Help Guide
## Purpose
The Caller ID Spoofing Complaint Form is used to report incidents of Caller ID spoofing, a type of scam where the caller's ID is manipulated to appear as a legitimate organization or individual. This form helps to gather information about the incident and report it to the relevant authorities.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date and time of the incident in the "Date of Report" and "Date of the Call" fields, respectively.
2. Provide your full name and contact information (email and phone number) to enable us to reach out to you for further assistance.
3. Enter the number displayed on your caller ID during the call in the "Number Displayed on Caller ID" field.
4. If the caller identified themselves differently during the call, please enter their actual identity in the "Actual Caller Identity" field.
5. Describe the nature of the interaction with the caller in the "Nature of Interaction" field.
6. If you shared any sensitive information with the caller, select "True" and provide details in the "Details of Information Shared" field.
7. If you have previously received similar calls, select "True" in the "Have you received similar calls recently?" field.
8. Finally, please confirm that the information provided is accurate and true by selecting "I Agree" in the "Acknowledgment" field.

## Field-by-Field Explanation

* **Date of Report** (`report_date`, `date`, `required`): Enter the date you are reporting this incident.
* **Full Name of Complainant** (`complainant_full_name`, `text`, `required`): Enter your full name, as the person reporting the incident.
* **Contact Email Address** (`contact_email`, `email`, `required`): Enter your email address to enable us to reach out to you for further assistance.
* **Contact Phone Number** (`contact_phone_number`, `text`, `required`): Enter the phone number where you received the call.
* **-- Incident Details --** (`call_details_header`, `note`, `required`): This is a header for the incident details section.
* **Date of the Call** (`date_of_spoofed_call`, `date`, `required`): Enter the date of the call when the incident occurred.
* **Time of the Call** (`time_of_spoofed_call`, `text`, `required`): Enter the time of the call, including AM/PM and time zone.
* **Number Displayed on Caller ID** (`number_on_caller_id`, `text`, `required`): Enter the number displayed on your caller ID during the call.
* **Name or Organization Displayed** (`organization_displayed`, `text`, `optional`): If any name or organization was displayed on the caller ID, enter it here.
* **Actual Caller Identity** (`actual_caller_identity`, `text`, `optional`): If the caller identified themselves differently during the call, enter their actual identity here.
* **Nature of Interaction** (`nature_of_call`, `select_multiple`, `required`): Describe the nature of the interaction with the caller, selecting one or more of the provided options.
* **Was any sensitive information shared?** (`information_shared`, `select_one`, `required`): Indicate if you shared any sensitive information with the caller.
* **Details of Information Shared** (`information_shared_details`, `text`, `optional`): If you shared sensitive information, provide details about what was shared.
* **Have you received similar calls recently?** (`previous_incidents`, `select_one`, `optional`): Indicate if you have received similar calls recently.
* **Evidence Description** (`evidence_description`, `text`, `optional`): Provide any evidence you have, such as a screenshot of the call log or a recording (if legal).
* **Acknowledgment** (`acknowledgement_of_truth`, `select_one`, `required`): Confirm that the information provided is true and accurate by selecting "I Agree".
