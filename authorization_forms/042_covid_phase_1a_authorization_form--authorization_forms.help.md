# COVID Phase 1A Authorization Form - Help Guide
## Purpose
The COVID Phase 1A Authorization Form is designed to gather information from healthcare workers, long-term care facility residents and staff, emergency responders, and others who are eligible for Phase 1A COVID-19 vaccination. This form ensures that you have provided accurate and truthful information for the purpose of authorization.

## How To Complete This Form
1. Start by providing your personal details, including your name, date of birth, email address, phone number, and current address.
2. Confirm your Phase 1A eligibility category.
3. If applicable, provide proof of employment status and the name of your facility or employer.
4. Disclose any known allergies, chronic medical conditions, and if you are immunocompromised.
5. Declare your pregnancy or nursing status.
6. Indicate your understanding of the COVID-19 vaccine benefits and risks.
7. Confirm that you accept the risks associated with vaccination.
8. Declare that all provided information is truthful.
9. Finally, submit the form with the date you are requesting authorization.

## Field-by-Field Explanation

* **First Name (`phase1a_first_name`, text, required)**: Enter your first name in this field.
* **Last Name (`phase1a_last_name`, text, required)**: Enter your last name in this field.
* **Date of Birth (`phase1a_date_of_birth`, date, required)**: Enter your date of birth in the MM-DD-YYYY format.
* **Email Address (`phase1a_email`, email, required)**: Enter your valid email address.
* **Phone Number (`phase1a_phone`, phone, required)**: Enter your phone number.
* **Current Address (`phase1a_address`, text, required)**: Enter your current street address.
* **City, State, ZIP Code (`phase1a_city_state_zip`, text, required)**: Enter your city, state, and ZIP code.
* **Phase 1A Eligibility Category (`phase1a_eligibility_category`, select_one, required)**: Select the category that applies to you:
	+ Healthcare worker
	+ Long-term care facility resident
	+ Long-term care facility staff
	+ Emergency responder
	+ Other Phase 1A category
* **Employment Verification (`phase1a_employment_verification`, text, optional)**: Provide proof of your employment status if requested.
* **Facility or Employer Name (`phase1a_facility_name`, text, required)**: Enter the name of your facility or employer.
* **Position or Role (`phase1a_position`, text, required)**: Enter your job title or role.
* **Known Allergies (`phase1a_allergies`, text, optional)**: Disclose any known allergies or vaccine allergies.
* **Chronic Medical Conditions (`phase1a_chronic_conditions`, text, optional)**: Disclose any ongoing health conditions.
* **Are You Immunocompromised (`phase1a_immunocompromised`, select_one, required)**: Answer:
	+ False
	+ True
	+ Unsure
* **Are You Pregnant or Nursing (`phase1a_pregnancy_nursing`, select_one, optional)**: Answer:
	+ Pregnant
	+ Nursing
	+ Neither
	+ Prefer Not to Say
* **Authorization (`phase1a_seek_authorization`, select_one, required)**: Select:
	+ I seek authorization
	+ I am unsure
	+ I decline authorization
* **I Understand the COVID-19 Vaccine Information (`phase1a_understand_vaccine`, select_one, required)**: Select:
	+ Yes, I understand
	+ I have questions
	+ False
* **I Accept the Risks of Vaccination (`phase1a_accept_risks`, select_one, required)**: Select:
	+ I accept the risks
	+ I have concerns
	+ I do not accept
* **Final Certification (`phase1a_truthful_declaration`, select_one, required)**: Select:
	+ All information is truthful
	+ Some information needs revision
	+ I am uncertain
* **Date of Authorization Request (`phase1a_authorization_date`, date, required)**: Enter the date you are submitting this form.
