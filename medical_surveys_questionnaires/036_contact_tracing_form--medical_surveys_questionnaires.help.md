<thinking>
We need to ensure that the form is being used to collect relevant and accurate information for contact tracing purposes. To avoid duplication of effort, we should only collect information on patients who have not been previously surveyed. This form is intended for patients who have tested positive or negative for a certain disease and need to report their contact history to prevent the spread of the disease. The information collected will be used by health authorities to track and prevent the spread of the disease.
</thinking>

# Contact Tracing Form - Help Guide
## Purpose
This form is for patients to report their contact history to help health authorities track and prevent the spread of a disease. It is intended for patients who have tested positive or negative for the disease.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal details such as your first name, last name, date of birth, phone number, and email address.
2. Select your gender.
3. Fill in your home address, city, and state.
4. Enter your ZIP code.
5. Report your test date and test result.
6. If you have symptoms, select all that apply.
7. Report the number of close contacts you have had in the past 14 days.
8. If you have close contacts, list their names.
9. Report any locations you have visited recently.
10. Select any underlying health conditions you have.
11. Fill in the name and phone number of your primary healthcare provider.
12. Fill in the name and phone number of your emergency contact.
13. Consent to be contacted by health officials.
14. Consent to share your information with health authorities.

## Field-by-Field Explanation

* **First Name** (`patient_first_name`, **text**, required): Enter your first name.
* **Last Name** (`patient_last_name`, **text**, required): Enter your last name.
* **Date of Birth** (`date_of_birth`, **date**, required): Enter your date of birth in MM-DD-YYYY format.
* **Gender** (`gender`, **select_one**, required): Select your gender for health records.
* **Phone Number** (`phone_primary`, **text**, required): Enter your primary phone number for contact.
* **Secondary Phone Number** (`phone_secondary`, **text, optional): Enter an alternate phone number for contact.
* **Email Address** (`email`, **email, required): Enter your email address for contact.
* **Home Address** (`address`, **text, required): Enter your home address.
* **City** (`city`, **text, required): Enter the city you live in.
* **State** (`state`, **text, required): Enter the state you live in.
* **ZIP Code** (`zip_code`, **text, required): Enter your postal code.
* **Test Date** (`test_date`, **date, required): Enter the date you were tested.
* **Test Result** (`test_result`, **select_one, required): Select the result of your test.
* **Symptom Onset Date** (`symptom_onset`, **date, optional): Enter the date your symptoms started.
* **Current Symptoms** (`symptoms`, **select_multiple, required): Select all that apply.
* **Number of Close Contacts** (`close_contacts`, **number, required): Enter the number of close contacts you have had in the past 14 days.
* **Close Contact Names** (`contact_names`, **text, optional): List the names of your close contacts.
* **Locations Visited Recently** (`locations_visited`, **text, optional): List the places you have visited recently.
* **Underlying Health Conditions** (`underlying_conditions`, **select_multiple, required): Select all that apply.
* **Primary Healthcare Provider** (`healthcare_provider`, **text, optional): Enter the name of your primary healthcare provider.
* **Emergency Contact Name** (`emergency_contact`, **text, required): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_phone`, **text, required): Enter the phone number of your emergency contact.
* **Consent to be Contacted** (`consent_contact`, **select_one, required): Consent to be contacted by health officials.
* **Consent to Share Information** (`consent_share`, **select_one, required): Consent to share your information with health authorities.
