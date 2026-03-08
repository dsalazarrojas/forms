# COVID 19 Self Declaration Form - Help Guide
## Purpose
The COVID-19 Self Declaration Form is designed to collect personal and health-related information from individuals for vaccination purposes. This information will help healthcare providers assess risks and ensure a safe and efficient vaccination process.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the "Declaration Date" on page 1, entering the date you are submitting this form.
2. Enter your "Full Name", "Date of Birth", and "Phone Number" on page 1.
3. On page 2, select your "Gender", which is an option from the list provided.
4. Enter your "Email Address" and "Home Address" on page 2.
5. On page 3, select your "City" and "State" or "Province".
6. Enter your "ZIP Code" on page 3.
7. If applicable, select your "Race or Ethnicity" from the provided options.
8. On page 4, select "Are you a healthcare worker?" and "Are you an essential worker?" options.
9. Choose "What type of workplace do you work in?" from the provided options.
10. If applicable, select "Do you have any underlying medical conditions?" from the options.
11. On page 5, select "Does anyone in your household have high-risk conditions?".
12. Select your preferred language for communication.
13. If you need transportation assistance, select the corresponding option.
14. On page 6, select "I am interested in receiving the COVID-19 vaccine" and "Why do you want to get vaccinated?".
15. If you have previously tested positive for COVID-19, select "Have you previously tested positive for COVID-19?".
16. If you have, enter "When did you test positive?".
17. Select your preferred vaccine brand, if you have a preference.
18. On page 7, select "When are you available for vaccination?".
19. If you need transportation assistance, select the corresponding option.
20. On page 8, enter "Additional Comments or Questions".
21. Finally, select "I declare that the information provided is true and accurate to the best of my knowledge" and sign with your "Signature Date".

## Field-by-Field Explanation
### Page 1
* **Declaration Date** (`declaration_date`, date, required): Enter the date you are submitting this form.
* **Full Name** (`full_name`, text, required): Enter your first and last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Gender** (`gender`, select_one, required): Select your gender from the provided options.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.

### Page 2
* **Email Address** (`email_address`, email, required): Enter your contact email address.
* **Home Address** (`address`, text, required): Enter your street address.
* **City** (`city`, text, required): Enter the city of your residence.
* **State** (`state`, text, required): Enter your state or province of residence.

### Page 3
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Race or Ethnicity** (`race_ethnicity`, select_one, optional): Select your race or ethnicity from the provided options.
* **Healthcare Worker** (`healthcare_worker`, select_one, required): Select if you are a healthcare worker.
* **Essential Worker** (`essential_worker`, select_one, required): Select if you are an essential worker.
* **Workplace Type** (`workplace_type`, select_one, required): Select the type of workplace you work in.

### Page 4
* **Underlying Conditions** (`underlying_conditions`, select_multiple, required): Select any underlying medical conditions you have.
* **Household High Risk** (`household_high_risk`, select_one, required): Select if anyone in your household has high-risk conditions.
* **Language Preference** (`language_preference`, select_one, required): Select your preferred language for communication.
* **Transportation Needs** (`transportation_needs`, select_one, optional): Select if you need transportation assistance.

### Page 5
* **Vaccine Interest** (`vaccination_interest`, select_one, required): Select if you are interested in receiving the COVID-19 vaccine.
* **Vaccine Reason** (`vaccine_reason`, select_one, required): Select why you want to get vaccinated.
* **Previous COVID Infection** (`previous_covid_infection`, select_one, required): Select if you have previously tested positive for COVID-19.
* **Previous Infection Date** (`previous_infection_date`, date, optional): Enter the date you tested positive for COVID-19.
* **Vaccine Preference** (`vaccine_preference`, select_one, optional): Select your preferred vaccine brand, if applicable.
* **Availability Preference** (`availability_preference`, select_one, required): Select when you are available for vaccination.

### Page 6
* **Additional Comments** (`additional_comments`, text, optional): Enter any additional comments or questions you have.

### Page 7
* **Signature Declaration** (`declaration_statement`, select_one, required): Select "I declare that the information provided is true and accurate to the best of my knowledge".
* **Signature Date** (`signature_date`, date, required): Enter the date you signed this form.

### Page 8
* **No fields**
