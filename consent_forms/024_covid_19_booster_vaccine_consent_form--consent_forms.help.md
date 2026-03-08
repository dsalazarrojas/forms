# COVID 19 Booster Vaccine Consent Form - Help Guide

## Purpose
This form is designed to collect information from patients regarding their understanding and consent to receive the COVID-19 booster vaccine.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your personal information, including your name, date of birth, and email address.
2. Select the type of primary COVID-19 vaccine you received.
3. Enter the date you completed your primary vaccine series.
4. Provide information about your previous booster experiences, including the number of doses you have received.
5. Indicate your understanding of the booster vaccine, its benefits, and potential risks.
6. Confirm that you have been informed about common and serious side effects.
7. Report any known allergies or medical conditions that may affect your eligibility for vaccination.
8. Disclose any current medications or medical conditions.
9. Confirm that alternative treatment options have been discussed with your healthcare provider.
10. Indicate that you understand that your participation in this vaccination is voluntary and you can ask questions anytime.
11. Confirm that all your questions have been answered satisfactorily.
12. Provide a date for when you signed this consent form.
13. Fill in your healthcare provider's name and title.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Your full legal name as it appears on your identification document.
	+ Please enter your name as it is registered with your government-issued ID or passport.
* **Date of Birth** (`date_of_birth`, date, required): Your date of birth.
	+ Enter your date of birth in the format mm/dd/yyyy.
* **Patient ID** (`patient_id`, text, optional): Medical record number if available.
	+ If you have a medical record number, please enter it here.
* **Email Address** (`email`, email, required): Your email address.
	+ Please enter your email address where you can be reached for follow-up questions or updates.
* **Phone Number** (`phone`, text, required): Your phone number.
	+ Enter your phone number where you can be reached for follow-up questions or updates.
* **Primary COVID-19 Vaccine Type** (`primary_vaccine`, select_one, required): What vaccine did you initially receive?
	+ Select the type of vaccine you received for your initial vaccination series.
* **Date of Primary Vaccine Series Completion** (`primary_vaccine_date`, date, required): Date of primary vaccine series completion.
	+ Enter the date when you completed your primary vaccine series.
* **Number of Previous Booster Doses Received** (`previous_boosters`, number, optional): Boosters already administered.
	+ If you have received previous booster doses, enter the number here.
* **I understand that the booster vaccine is to strengthen immunity against COVID-19** (`booster_purpose_understanding`, select_one, required): Acknowledge your understanding of the booster vaccine's purpose.
	+ Select "Yes, I understand" to confirm your understanding.
* **I understand the potential benefits of the booster vaccine** (`vaccine_benefits_understanding`, select_one, required): Acknowledge your understanding of the booster vaccine's benefits.
	+ Select "Yes, I understand" to confirm your understanding.
* **I understand the potential risks and side effects** (`risks_understanding`, select_one, required): Acknowledge your understanding of the potential risks and side effects of the booster vaccine.
	+ Select "Yes, I understand" to confirm your understanding.
* **I have been informed about common side effects** (`side_effects_info`, select_one, required): Confirm that you have been informed about common side effects.
	+ Select "Yes, informed" to confirm.
* **I have been informed about serious but rare reactions** (`serious_reactions_info`, select_one, required): Confirm that you have been informed about serious side effects.
	+ Select "Yes, informed" to confirm.
* **I have reported all known allergies** (`allergies`, select_one, required): Confirm that you have reported all known allergies.
	+ Select "Yes, no allergies" if you have no known allergies.
* **I have disclosed all relevant medical conditions** (`medical_conditions`, select_one, required): Confirm that you have disclosed all medical conditions.
	+ Select "Yes, disclosed" to confirm.
* **I have informed of all current medications** (`current_medications`, select_one, required): Confirm that you have informed your healthcare provider about all current medications.
	+ Select "Yes, informed" to confirm.
* **Alternative treatment options have been discussed** (`alternatives_discussed`, select_one, optional): Confirm that alternative treatment options have been discussed with your healthcare provider.
	+ Select "Yes" to confirm.
* **I understand that my participation is voluntary** (`voluntary_consent`, select_one, required): Confirm that you understand that your participation is voluntary.
	+ Select "Yes, I understand" to confirm your understanding.
* **All my questions have been answered satisfactorily** (`questions_answered`, select_one, optional): Confirm that all your questions have been answered satisfactorily.
	+ Select "Yes" to confirm.
* **I voluntarily consent to receive the COVID-19 booster vaccine** (`consent_agreement`, select_one, required): Confirm that you consent to receive the COVID-19 booster vaccine.
	+ Select "I consent" to confirm your consent.
* **Consent Date** (`consent_date`, date, required): Date of your consent.
	+ Enter the date when you signed this consent form.
* **Healthcare Provider Name** (`provider_name`, text, required): Name of the healthcare provider.
	+ Enter the name of the healthcare provider who administered the vaccine or obtained your consent.
* **Provider Title** (`provider_signature`, text, optional): Title of the healthcare provider.
	+ Enter the title of the healthcare provider who administered the vaccine or obtained your consent.

## Tips
* Please ensure that you have read and understood all the questions and information before signing this form.
* If you are unsure about any question or have questions, please discuss them with your healthcare provider.
* Please sign this form only after you have read and understood all the information provided.
