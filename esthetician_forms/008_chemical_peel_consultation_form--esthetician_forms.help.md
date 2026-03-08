<thinking>
The purpose of this form is to gather information from patients about their skin type, concerns, and medical history before undergoing a chemical peel treatment. This form helps the esthetician understand the patient's expectations, concerns, and medical conditions that may impact their treatment. It is essential to ensure that all fields are filled out accurately to provide the best possible care for the patient.
</thinking>

# Chemical Peel Consultation Form - Help Guide
## Purpose
This form is designed to gather essential information about your skin type, concerns, and medical history before undergoing a chemical peel treatment. It will help us understand your skin better and provide you with the best possible care.

## How To Complete This Form
1. Fill out all the required fields.
2. Select all that apply for your skin concerns.
3. Choose your skin type and tone from the provided options.
4. Answer the questions about your previous chemical peel experience, medical conditions, and allergies.
5. Confirm your expectations and understand the risks and benefits of the treatment.

## Field-by-Field Explanation

* **First name** (`patient_first_name`, text, required): Please enter your first name.
* **Last name** (`patient_last_name`, text, required): Please enter your last name.
* **Date of birth** (`date_of_birth`, date, required): Please enter your date of birth in the format MM/DD/YY.
* **Email address** (`email_address`, email, required): Please enter a valid email address.
* **Phone number** (`phone_number`, text, required): Please enter your phone number.
* **Skin type** (`skin_type`, select_one, required): Please select one of the following options:
	+ Oily
	+ Dry
	+ Combination
	+ Sensitive
	+ Normal
* **Skin tone** (`skin_tone`, select_one, required): Please select one of the following options:
	+ Fair
	+ Light
	+ Medium
	+ Olive
	+ Tan
	+ Deep
* **Primary skin concerns** (`skin_concerns`, select_multiple, required): Please select all that apply:
	+ Acne
	+ Wrinkles
	+ Age spots
	+ Sun damage
	+ Melasma
	+ Scars
	+ Hyperpigmentation
	+ Dull complexion
	+ Uneven texture
* **Have you had chemical peels before?** (`previous_peels`, select_one, required): Please select one of the following options:
	+ True
	+ False
	+ Unsure
* **Type of peel you are interested in** (`peel_type_interest`, select_one, required): Please select one of the following options:
	+ Superficial
	+ Medium
	+ Deep
	+ Combination
	+ Unsure
* **Do you currently use retinoids?** (`retinoid_use`, select_one, required): Please select one of the following options:
	+ True
	+ False
	+ Recently stopped
* **Do you use daily sun protection?** (`sun_protection`, select_one, required): Please select one of the following options:
	+ Always
	+ Usually
	+ Sometimes
	+ Rarely
	+ Never
* **Have you had other skin procedures in the last 6 months?** (`recent_procedures`, select_one, required): Please select one of the following options:
	+ True
	+ False
* **If yes, please describe** (`procedure_details`, text, optional): Please provide more information about the procedure.
* **Do you have any medical conditions we should know about?** (`medical_conditions`, text, optional): Please provide more information about any medical conditions.
* **Do you have any allergies?** (`allergies`, select_one, required): Please select one of the following options:
	+ None
	+ Chemical allergies
	+ Medication allergies
	+ Latex allergy
	+ Other
* **Please describe your allergies** (`allergy_details`, text, optional): Please provide more information about your allergies.
* **Current medications** (`medications`, text, optional): Please list any current medications.
* **Do you have realistic expectations for the results?** (`realistic_expectations`, select_one, required): Please select one of the following options:
	+ True
	+ False
	+ Need more information
* **Are you aware of potential downtime requirements?** (`downtime_expectations`, select_one, required): Please select one of the following options:
	+ Yes, fully informed
	+ Somewhat informed
	+ Not informed
* **I understand the risks and benefits of the chemical peel procedure** (`consent_acknowledge`, select_one, required): Please select one of the following options:
	+ I agree
	+ I do not agree
* **I authorize this treatment** (`consent_signature`, select_one, required): Please select one of the following options:
	+ I consent
	+ I do not consent
