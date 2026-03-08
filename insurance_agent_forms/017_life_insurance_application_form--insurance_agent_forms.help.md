# Life Insurance Application Form - Help Guide
## Purpose
This form is designed to collect personal and demographic information from individuals applying for life insurance. It helps the insurance company to understand the applicant's background and preferences for their policy.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "name" field.
2. Provide your address in the "address" field.
3. Select your date of birth from the calendar.
4. Choose your occupation from the "occupation" field.
5. Select the type of life insurance you are interested in.
6. Choose the coverage type you need.
7. Enter the coverage amount, if applicable.
8. Select the policy type you prefer.
9. Choose the term of life for your policy.
10. Select who issued the policy by.
11. Enter the name of the insurance agent handling your policy.
12. Enter the email of the insurance agent.

## Field-by-Field Explanation

* **name** (`Name`, `text`, required: false): Enter your full name as it appears on your identification documents.
* **address** (`Address`, `text`, required: false): Provide your current address for communication purposes.
* **date of birth** (`Date of Birth`, `date`, required: false): Select your date of birth from the calendar.
* **occupation** (`Occupation`, `select_one`, required: false):
	+ Choose your occupation from the options: Doctor, Teacher, Pilot.
* **insurance type** (`Insurance Type`, `select_one`, required: false):
	+ Select the type of life insurance you are interested in: Term Life Insurance, Whole Life Insurance, Universal Life Insurance.
* **coverage type** (`Coverage Type`, `select_one`, required: false):
	+ Select the coverage type you need: Single, Joint, Joint with Beneficiary.
* **coverage amount** (`Coverage Amount`, `number`, required: false): Enter the amount of coverage you need, if applicable.
* **date issued** (`Date Issued`, `date`, required: false): This field is usually pre-populated and not editable.
* **policy type** (`Policy Type`, `select_one`, required: false):
	+ Select the policy type you prefer: Single Life Insurance, Joint Life Insurance, Universal Life Insurance.
* **premium amount** (`Premium Amount`, `number`, required: false): Enter the premium amount, if applicable.
* **term of life** (`Term of Life`, `select_one`, required: false):
	+ Choose the term of life for your policy: 1 year, 5 years, 10 years.
* **policy issued by** (`Policy Issued By`, `select_one`, required: false):
	+ Select who issued the policy by: Insurance Company, Insurance Agent, Both.
* **agent name** (`Agent Name`, `text`, required: false): Enter the name of the insurance agent handling your policy.
* **agent email** (`Agent Email`, `email`, required: false): Enter the email of the insurance agent.

## Tips
* Make sure to enter accurate and up-to-date information.
* Double-check your selections before submitting the form.
* If you have any questions or concerns, contact your insurance agent or the insurance company.
