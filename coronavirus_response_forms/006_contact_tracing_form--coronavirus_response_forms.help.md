# Contact Tracing Form - Help Guide
## Purpose
The Contact Tracing Form is used to collect information about individuals who may have been exposed to or infected with COVID-19. This information will be shared with public health authorities for contact tracing and monitoring purposes.

## How To Complete This Form
1. Please provide your full name, date of birth, and primary phone number.
2. Select all symptoms you are currently experiencing from the list provided.
3. If you are experiencing symptoms, select the date they first appeared.
4. Confirm if you have been in close contact with someone who has tested positive for COVID-19.
5. Provide the date of last potential exposure.
6. List anyone you have had close contact with in the last 14 days.
7. List any public places visited in the last 14 days.
8. Confirm if you have traveled internationally in the last 14 days.
9. If yes, specify the destination.
10. Confirm that the provided information is accurate to the best of your knowledge.
11. Consent to sharing this information with public health authorities for contact tracing purposes.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Enter your full name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the YYYY-MM-DD format.
* **Primary Phone Number** (`patient_phone`, text, required): Enter your primary phone number.
* **Email Address** (`patient_email`, email, required): Enter your email address.
* **Are you experiencing any symptoms?** (`experiencing_symptoms`, select_multiple, required): Select all symptoms you are currently experiencing from the provided list:
	+ Fever or Chills
	+ Cough
	+ Shortness of Breath
	+ Fatigue
	+ Muscle Aches
	+ Headache
	+ Loss of Taste or Smell
	+ Sore Throat
	+ Congestion
	+ Nausea
* **If yes, when did symptoms first appear?** (`symptom_onset_date`, date, optional): Enter the date symptoms first appeared in the YYYY-MM-DD format.
* **Have you been in close contact with someone who has tested positive?** (`exposure_known_contact`, select_one, required): Confirm if you have been in close contact with someone who has tested positive for COVID-19.
* **Date of Last Potential Exposure** (`date_of_exposure`, date, optional): Enter the date of last potential exposure in the YYYY-MM-DD format.
* **List of contacts** (`list_of_contacts`, text, optional): List anyone you have had close contact with in the last 14 days.
* **Public Places Visited** (`public_places_visited`, text, optional): List any public places visited in the last 14 days.
* **Have you traveled internationally in the last 14 days?** (`international_travel`, select_one, required): Confirm if you have traveled internationally in the last 14 days.
* **Destination** (`travel_destination`, text, optional): If yes, specify the destination.
* **I confirm that the information provided is accurate to the best of my knowledge** (`accuracy_confirmation`, select_one, required): Select 'I Agree' to confirm that the provided information is accurate.
* **Do you consent to sharing this information with public health authorities?** (`privacy_consent`, select_one, required): Select 'I Consent' to share your information with public health authorities for contact tracing purposes.
