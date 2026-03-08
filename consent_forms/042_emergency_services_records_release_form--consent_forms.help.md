<thinking>
# emergency_services_records_release_form - Help Guide
## Purpose
The Emergency Services Records Release Form is designed to collect information about emergency services provided to a patient. This form is used to document the details of the services rendered, including the date and time of the service, the reason for the service, and the patient's contact preferences. The form is typically used by healthcare providers to record and release information about emergency services, such as paramedic services, hospital visits, or other emergency situations.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's name.
2. Provide the date of birth of the patient, if available.
3. Select the emergency service provider that provided care to the patient.
4. Enter the date and time of the emergency service.
5. Explain the reason for the emergency service.
6. Select your preferred contact method (phone, email, or mail) for follow-up or additional information.
7. Enter a detailed record of the emergency service, including any relevant information.
8. Finally, sign and date the form to indicate your acknowledgment of the information provided.

## Field-by-Field Explanation

* **Patient Name (Patient Name)** (`patient_name`, required, true): Enter the name of the patient who received emergency services.
* **Date of Birth (Date of Birth)** (`date_of_birth`, optional, false): If you have the patient's date of birth, please provide it. If not, you can leave this field blank.
* **Emergency Service Provider (Emergency Service Provider)** (`emergency_service_provider`, optional, false): Select the name of the emergency service provider that provided care to the patient.
	+ Options:
		- Emergency services provider 1
		- Emergency services provider 2
		- Emergency services provider 3
* **Emergency Service Date (Emergency Service Date)** (`emergency_service_date`, optional, false): Enter the date of the emergency service.
* **Emergency Service Time (Emergency Service Time)** (`emergency_service_time`, optional, false): Enter the time of the emergency service.
* **Reason for Service (Reason for Service)** (`reason_for_service`, required, true): Explain the reason for the emergency service provided to the patient.
* **Contact Preference (Contact Preference)** (`contact_preference`, optional, false): Select how you would like to be contacted for follow-up or additional information:
	+ Options:
		- Phone
		- Email
		- Mail
* **Emergency Service Record (Emergency Service Record)** (`emergency_service_record`, required, true): Enter a detailed record of the emergency service, including any relevant information.
* **Signature (Signature)** (`signature`, optional, false): This is a note field for your signature to acknowledge the information provided.
