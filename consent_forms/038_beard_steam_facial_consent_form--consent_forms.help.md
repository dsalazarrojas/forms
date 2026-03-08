# Beard Steam Facial Consent Form - Help Guide
## Purpose
This form is used to provide consent for a steam facial treatment. Please fill out the form carefully and honestly to ensure a safe and successful treatment.

## How To Complete This Form

1. Please complete each section of the form as instructed.
2. If you have any issues or questions while filling out the form, refer to the help guides below.
3. Once you have completed the form, please sign and date it to confirm your consent for the treatment.

## Field-by-Field Explanation

* **First Name** (`client_first_name`, text, required):
	+ This is your first name.
	+ Please enter your full first name.
* **Last Name** (`client_last_name`, text, required):
	+ This is your last name.
	+ Please enter your full last name.
* **Date of Birth** (`date_of_birth`, date, required):
	+ This is your date of birth.
	+ Please enter your date of birth in the correct format (MM/DD/YYYY).
* **Email Address** (`email_address`, email, required):
	+ This is your email address.
	+ Please enter a valid email address that we can contact you with.
* **Phone Number** (`phone_number`, text, required):
	+ This is your phone number.
	+ Please enter a valid phone number that we can contact you with.
* **Service Date** (`service_date`, date, required):
	+ This is the date of your appointment.
	+ Please enter the date of your appointment in the correct format (MM/DD/YYYY).
* **Service Provider Name** (`service_provider`, text, required):
	+ This is the name of the esthetician or barber providing the service.
	+ Please enter their full name.
* **Skin Type** (`skin_type`, select_one, required):
	+ Please select your skin type from the options below:
		- Normal
		- Oily
		- Dry
		- Combination
		- Sensitive
* **Current Skin Conditions** (`skin_conditions`, select_multiple, required):
	+ Please select any conditions that affect your skin from the options below:
		- Acne
		- Rosacea
		- Eczema
		- Psoriasis
		- Dermatitis
		- Sunburn
		- None
* **Heat Sensitivity** (`heat_sensitivity`, select_one, required):
	+ Please select your level of heat sensitivity from the options below:
		- Not Sensitive
		- Mildly Sensitive
		- Moderately Sensitive
		- Very Sensitive
* **Respiratory Conditions** (`respiratory_conditions`, select_one, required):
	+ Please select if you have any respiratory conditions from the options below:
		- Yes - Asthma
		- Yes - Other Condition
		- No Respiratory Issues
* **Current Medications** (`medications`, text, required):
	+ Please list any current medications, especially skin medications.
* **Recent Facial Procedures** (`recent_procedures`, text, optional):
	+ Please list any recent facial procedures, such as surgeries or treatments.
* **Service Description Understood** (`service_description`, select_one, required):
	+ Please select if you understand the service being offered:
		- True
		- False
* **Benefits Have Been Explained** (`benefits_explained`, select_one, required):
	+ Please select if you understand the benefits of the service:
		- True
		- False
* **Risks Have Been Explained** (`risks_explained`, select_one, required):
	+ Please select if you understand the risks of the service:
		- True
		- False
* **Discomfort Communication** (`discomfort_communication`, select_one, required):
	+ Please select if you will communicate any discomfort during the service:
		- True
		- False
* **Consent to Service** (`consent_to_service`, select_one, required):
	+ Please select if you consent to the service:
		- True
		- False
* **Client Signature** (`client_signature`, text, required):
	+ This is where you sign the form to confirm your consent.
	+ Please sign with your full name.
* **Signature Date** (`signature_date`, date, required):
	+ This is the date you signed the form.
	+ Please enter the date in the correct format (MM/DD/YYYY).
