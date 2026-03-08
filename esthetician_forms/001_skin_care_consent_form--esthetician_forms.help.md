# skin_care_consent_form - Help Guide
## Purpose
The skin care consent form is a document used to obtain consent from clients for various skin care treatments. This form helps ensure that clients understand the procedures, risks, and benefits of each treatment and are able to make informed decisions about their care. It is an essential part of the skin care process to ensure client safety and satisfaction.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the client's name and contact information in the designated fields.
2. Select the consent options for the treatments you will be performing.
3. Choose the date and time of the consent.
4. Add any additional notes or comments about the client's care.
5. Assign a tool or user for follow-up.

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, required): Enter the client's name as it appears on their identification.
* **Contact Email** (`contact_email`, email, optional): Enter the client's email address for communication purposes.
* **Contact Phone Number** (`phone_number`, text, optional): Enter the client's phone number for follow-up calls or reminders.
* **Contact Phone** (`contact_phone`, text, optional): Enter the client's phone number for follow-up calls or reminders.
* **Consent to Treatment** (`consent_to_treatment`, select_one, optional): Select one of the following options:
	+ Client accepts all treatments listed below
	+ Refuse to accept any treatment
	+ Accepts specific treatments
* **Treatments** (`treatments`, select_multiple, optional): Select the specific treatments you will be performing. You can choose multiple options.
* **Consent Date** (`consent_date`, date, optional): Enter the date of the consent in the format mm/dd/yyyy.
* **Consent Time** (`consent_time`, time, optional): Enter the time of the consent in the format 12:00 AM or 13:30 PM.
* **Notes** (`notes`, note, optional): Add any additional comments or notes about the client's care.
* **Assigned Tool** (`assigned_tool`, text, optional): Assign a tool or equipment for follow-up.
* **Assigned User** (`assigned_user`, text, optional): Assign a user for follow-up and monitoring.
