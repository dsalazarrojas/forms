# Healthcare Consumer Trust Index Survey - Help Guide
## Purpose
The Healthcare Consumer Trust Index Survey is designed to measure the level of trust patients have with their healthcare providers. This survey collects information on patient demographics, provider characteristics, and perceptions of trustworthiness.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your unique patient identifier, which is required for tracking purposes.
2. Enter your date of birth in the format `MM/DD/YYYY`.
3. Enter the unique identifier of your healthcare provider.
4. Answer the following questions about your provider:
	* How likely are you to recommend this provider?
	* What is the level of trust you have with this provider?
	* How long have you been a patient of this provider?
5. Select your gender from the provided options.
6. Select the type of provider you have been seeing (e.g. primary care, specialist, etc.).
7. Choose your race/ethnicity from the provided options.
8. Answer the additional trust questions, if desired.

## Field-by-Field Explanation
* **Patient Identifier** (`patient_identifier`, number, required): Unique identifier for the patient.
* **Date of Birth** (`patient_dob`, date, required): Enter your date of birth in the format `MM/DD/YYYY`.
* **Provider Identifier** (`provider_identifier`, number, required): Unique identifier for the provider.
* **How likely are you to recommend this provider?** (`trust_question_1`, select_one, required): Answer on a scale from very likely to not at all likely.
* **Patient Gender** (`patient_gender`, select_multiple, required): Select your gender from the provided options.
* **Provider Gender** (`provider_gender`, select_multiple, required): Select the gender of your provider.
* **Type of Provider** (`provider_type`, select_multiple, required): Select the type of provider you have been seeing (e.g. primary care, specialist, etc.).
* **What is the level of trust you have with this provider?** (`trust_question_2`, select_one, required): Answer on a scale from very high to very low.
* **Provider Experience** (`provider_experience`, select_multiple, required): Select how long you have been a patient of this provider.
* **Race/Ethnicity** (`patient_race`, select_multiple, required): Choose your racial/ethnic identity from the provided options.
* **Additional Comments** (`trust_question_1`, note, required): Enter any additional comments or thoughts about your provider.
* **Trust Question 4** (`trust_question_4`, select_one, optional): Answer on a scale from very likely to not at all likely.
* **Trust Question 5** (`trust_question_5`, select_one, optional): Answer on a scale from very likely to not at all likely.
* **Trust Question 6** (`trust_question_6`, select_one, optional): Answer on a scale from very likely to not at all likely.
* **Trust Question 7** (`trust_question_7`, select_one, optional): Answer on a scale from very likely to not at all likely.

## Tips
* Make sure to enter your patient identifier and date of birth correctly.
* Choose the correct options for your provider gender and type.
* Be honest and accurate when answering the trust questions.
* Provide any additional comments or thoughts about your provider if applicable.
