<thinking>
This form is designed to collect demographic information and authorization for COVID-19 Phase 1A vaccination. It is intended to gather data on applicants who are eligible for the first priority phase of the vaccination program. This form will be used to verify that the applicant has the necessary information and is authorized to participate in the Phase 1A program.
</thinking>

# COVID Phase 1A Authorization Form - Help Guide
## Purpose

This form collects information about the applicant and authorizes them to join the COVID-19 Phase 1A vaccination program.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your personal details, including your full name, date of birth, email address, phone number, and street address.
2. Select your priority category for Phase 1A vaccination from the options provided.
3. Indicate your interest in the COVID-19 vaccine and provide any questions or concerns you may have.
4. Confirm your authorization to enter the Phase 1A program.
5. Sign and date the form to complete it.

## Field-by-Field Explanation

* **Full Name (Applicant)** (`applicant_name`, `text`, required): Your full name will be used to identify you in the Phase 1A program.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Social Security Number (Last Four Digits)** (`social_security`, `text`, optional): If you are willing to provide your Social Security number, enter the last four digits for verification purposes.
* **Email Address** (`email`, `email`, required): Enter your active and valid email address where you can be reached.
* **Phone Number** (`phone`, `text`, required): Enter your phone number where you can be contacted.
* **Street Address** (`street_address`, `text`, required): Enter your complete street address.
* **City** (`city`, `text`, required): Enter the city where you reside.
* **State** (`state`, `text`, required): Enter the state where you reside.
* **ZIP Code** (`zip_code`, `text`, required): Enter the ZIP code where you reside.
* **Applies to Phase 1A Category** (`category`, `select_one`, required): Select the category that best describes your priority for Phase 1A vaccination:
	+ Healthcare worker
	+ Long-term care resident
	+ Long-term care staff
	+ First responder
	+ Other (please provide supporting information)
* **Describe Your Category** (`category_details`, `text`, optional): If you selected "Other," provide more information about your category.
* **Current Employment or Service** (`employment`, `text`, optional): Enter information about your current employment or service.
* **Facility or Organization Name** (`facility_name`, `text`, optional): If applicable, enter the name of the facility or organization you are associated with.
* **Facility Address** (`facility_address`, `text`, optional): Enter the address of the facility or organization you are associated with.
* **Pre-existing Health Conditions** (`health_conditions`, `text`, optional): If you have pre-existing health conditions that increase your risk, enter them here.
* **Interest in COVID-19 Vaccination** (`vaccine_interest`, `select_one`, required): Indicate your level of interest in the COVID-19 vaccine:
	+ Very interested
	+ Interested
	+ Neutral
	+ Not interested
	+ Already vaccinated
* **Questions or Concerns About Vaccine** (`vaccine_questions`, `text`, optional): If you have questions or concerns, enter them here.
* **I authorize my entry into Phase 1A vaccination program** (`authorization_consent`, `select_one`, required): Confirm your authorization to enter the Phase 1A program:
	+ Yes, I authorize
	+ No, I do not authorize
* **Electronic Signature** (`signature`, `text`, required): Type your full name for electronic signature purposes.
* **Date of Authorization** (`authorization_date`, `date`, required): Enter the date you are authorizing entry into the Phase 1A program.
