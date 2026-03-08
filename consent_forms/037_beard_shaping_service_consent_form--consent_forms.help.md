> <thinking>...</thinking>

# Beard Shaping Service Consent Form - Help Guide
## Purpose

This consent form is used to obtain the client's consent and agreement to receive the beard shaping service. It is required to be completed by the client before the service can be provided.

## How To Complete This Form

1. Please fill out the form completely and accurately with your information.
2. Select the correct answers to the questions and checkboxes.
3. Sign the form with your full name and date.
4. Ensure that you have read and understood the service description, risks, and maintenance requirements.
5. Confirm that you consent to the service and allow for before and after photos to be taken.

## Field-by-Field Explanation

* **First Name** (`client_first_name`, `text`, required): Enter your first name.
* **Last Name** (`client_last_name`, `text`, required): Enter your last name.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the YYYY-MM-DD format.
* **Email Address** (`email_address`, `email`, required): Enter your contact email address.
* **Phone Number** (`phone_number`, `text`, required): Enter your contact phone number.
* **Appointment Date** (`appointment_date`, `date`, required): Enter the scheduled date for the service.
* **Barber Name** (`barber_name`, `text`, required): Enter the name of the barber providing the service.
* **Current Beard Length** (`current_beard_length`, `select_one`, required): Select the length of your current beard:
	+ Stubble - Less than 1 inch
	+ Short - 1 to 2 inches
	+ Medium - 2 to 4 inches
	+ Long - 4 to 6 inches
	+ Extra Long - Over 6 inches
* **Desired Beard Style** (`desired_style`, `select_one`, required): Select the desired style for your beard:
	+ Full Beard
	+ Goatee
	+ Van Dyke
	+ Circle Beard
	+ Balbo
	+ Corporate Beard
	+ Natural Trim
	+ Custom Style
* **Skin Conditions** (`skin_conditions`, `select_multiple`, required): Select any skin conditions you may have:
	+ Acne
	+ Razor Burn
	+ Ingrown Hairs
	+ Eczema
	+ Psoriasis
	+ None
* **Known Allergies** (`allergies`, `text`, required): List any known allergies.
* **Taking Blood Thinners** (`blood_thinners`, `select_one`, required): Select if you are taking blood thinners:
	+ True
	+ False
* **Previous Experiences** (`previous_experiences`, `text`, optional): Describe any previous shaping experiences.
* **Service Description Understood** (`service_understood`, `select_one`, required): Confirm if you have read and understood the service description:
	+ True
	+ False
* **Risks Explained** (`risks_explained`, `select_one`, required): Confirm if you have read and understood the risks:
	+ True
	+ False
* **Maintenance Requirements Understood** (`maintenance_understood`, `select_one`, required): Confirm if you have read and understood the maintenance requirements:
	+ True
	+ False
* **Consent for Before and After Photos** (`photo_consent`, `select_one`, required): Confirm if you consent to taking before and after photos:
	+ True
	+ False
* **Consent to the Service** (`consent_to_proceed`, `select_one`, required): Confirm if you consent to the service:
	+ True
	+ False
* **Client Signature** (`client_signature`, `text`, required): Type your full name as the client.
* **Signature Date** (`signature_date`, `date`, required): Date signed in the YYYY-MM-DD format.
