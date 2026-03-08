# Body Assessment Form - Help Guide
## Purpose

The Body Assessment Form is designed to collect information from clients regarding their physical appearance, medical conditions, and lifestyle habits. This information will be used to assess their skin and body concerns and provide personalized recommendations for improvement.

## How To Complete This Form

1. Please fill out the form with your personal details, making sure to include all required fields.
2. Be as accurate as possible when selecting your skin type, concerns, and other relevant information.
3. If you have any medical conditions, current medications, allergies, or previous treatments, list them in the designated fields.
4. Indicate your smoking status and sun exposure habits.
5. If you are pregnant or nursing, select the corresponding option.
6. At the end of the form, confirm your agreement to the terms and conditions and sign your name.

## Field-by-Field Explanation

* **Client First Name** (`client_first_name`, text, **Required**): Please enter your first name as you would like it to be displayed.
* **Client Last Name** (`client_last_name`, text, **Required**): Please enter your last name as you would like it to be displayed.
* **Client Email** (`client_email`, email, **Required**): Enter your email address where you can be reached.
* **Client Phone** (`client_phone`, text, **Required**): Enter your phone number for communication purposes.
* **Date of Birth** (`date_of_birth`, date, **Required**): Enter your date of birth in the format MM/DD/YYYY.
* **Gender** (`gender`, select_one, **Required**): Select your gender from the available options.
* **Height** (`height`, text, **Required**): Enter your height in feet and inches.
* **Current Weight** (`current_weight`, number, **Required**): Enter your current weight in pounds.
* **Goal Weight** (`goal_weight`, number, **Optional**): Enter your target weight in pounds (if applicable).
* **Skin Type** (`skin_type`, select_one, **Required**): Select your skin type from the available options.
* **Skin Concerns** (`skin_concerns`, select_multiple, **Required**): Select all skin concerns that apply to you.
* **Body Concerns** (`body_concerns`, select_multiple, **Optional**): Select areas of concern on your body (if applicable).
* **Medical Conditions** (`medical_conditions`, text, **Optional**): List any relevant medical conditions you have.
* **Current Medications** (`medications`, text, **Optional**): List any current medications you are taking.
* **Allergies** (`allergies`, text, **Optional**): List any allergies you have.
* **Previous Treatments** (`previous_treatments`, text, **Optional**): List any previous treatments or therapies you have received.
* **Treatment Goals** (`treatment_goals`, text, **Required**): Enter your goals for treatment.
* **Lifestyle Factors** (`lifestyle_factors`, text, **Optional**): Discuss your diet, exercise, and other lifestyle habits related to your skin and body concerns.
* **Sun Exposure** (`sun_exposure`, select_one, **Optional**): Indicate your sun exposure habits.
* **Smoking Status** (`smoking_status`, select_one, **Optional**): Indicate your smoking status.
* **Pregnancy Status** (`pregnancy_status`, select_one, **Optional**): Indicate your pregnancy status.
* **Consultation Needed** (`consultation_needed`, select_one, **Required**): Confirm if you need a consultation with a professional.
* **Terms and Conditions** (`terms_acceptance`, select_one, **Required**): Confirm your agreement to the terms and conditions.
* **Client Signature** (`client_signature`, text, **Required**): Type your full name as a signature.
* **Signature Date** (`signature_date`, date, **Required**): Enter the date of the assessment.
