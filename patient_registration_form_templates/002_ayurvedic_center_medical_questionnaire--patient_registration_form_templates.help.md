# Ayurvedic Center Medical Questionnaire - Help Guide
## Purpose
This form is intended to be a comprehensive tool for our medical staff to quickly and accurately gather essential information about our patients. Please ensure that you are using this form for its intended purpose and not duplicating efforts.

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter the patient's full name in the `Patient name` field.
2. Provide their date of birth in the `Date of birth` field. This is an essential detail for our staff to assess their eligibility for certain treatments.
3. If applicable, enter the patient's phone number for easy contact.
4. If the patient has an email address, please enter it for appointment reminders.
5. In the `Primary health concern` field, describe the reason for their visit.
6. For patients experiencing symptoms, describe their onset, frequency, and severity in the `Current symptoms` field.
7. If the patient has a medical history, include it in the `Medical history summary` field.
8. If the patient has any allergies, list them in the `Known allergies` field.
9. Finally, confirm your consent to receive follow-up calls or messages by selecting the corresponding option.

## Field-by-Field Explanation
* **Patient name** (`patient_name`, text, required): Please enter the patient's full name.
* **Date of birth** (`dob`, date, required): This is a crucial piece of information for our medical staff to understand the patient's age and potential risks.
* **Contact number** (`contact_number`, text, optional): If the patient has a preferred phone number, please enter it for easy contact.
* **Email address** (`email`, email, optional): If the patient has an email address, please enter it for appointment reminders and notifications.
* **Primary health concern** (`primary_concern`, text, required): This is the main reason for the patient's visit. Be specific and detailed in your description.
* **Current symptoms** (`current_symptoms`, text, optional): If the patient is experiencing symptoms, describe them in terms of onset, frequency, and severity.
* **Medical history summary** (`medical_history`, text, optional): Include any chronic conditions or past surgeries the patient has had.
* **Known allergies** (`allergies`, text, optional): List any known allergies, including food and medication sensitivities.
* **Consent to follow up** (`consent_follow_up`, select_one, required): Please confirm your consent to be contacted for follow-up care.
* **Consent to follow up: True** (`True`, select_one, optional): 
* **Consent to follow up: False** (`False`, select_one, optional):
