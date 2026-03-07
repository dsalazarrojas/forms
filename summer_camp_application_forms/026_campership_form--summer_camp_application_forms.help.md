<thinking>As an expert form designer and technical writer, I will create a user-facing help guide for the "Campership Form" that is concrete, concise, and practical. I will base the explanation on the provided YAML fields and aim to be concrete without inventing unsupported business logic. The form is designed for campership applications, and the user needs to provide information about themselves and their family member or guardian. The form is divided into four main sections: Applicant Information, Parent or Guardian Information, Financial Information, and Camp Interest and Background. I will cover each section and field to ensure the user understands how to complete the form correctly.</thinking>

# Campership Form - Help Guide
## Purpose
The Campership Form is designed for campership applications. It is a comprehensive form that gathers information about the applicant, their parent or guardian, financial situation, and camp interest. This form is required to be completed accurately and thoroughly to ensure that your application is considered for a campership.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill out the Applicant Information section by providing your first name, last name, email address, phone number, and age.
2. Enter your parent or guardian's information, including their first name, last name, email address, phone number, and occupation.
3. Provide your household size and annual household income in the Financial Information section.
4. Explain any financial hardships or circumstances in the "Explain any financial hardship or circumstances" field if applicable.
5. In the Camp Interest and Background section, select your preferred camp session and indicate if you have attended the camp before.
6. Choose the estimated campership amount you need.
7. Finally, explain why you feel you deserve a campership in the provided field.

## Field-by-Field Explanation

* **First Name** (`applicant_first_name`, text, required): Enter your first name.
* **Last Name** (`applicant_last_name`, text, required): Enter your last name.
* **Email Address** (`applicant_email`, email, required): Enter your email address in the format of `example@example.com`.
* **Phone Number** (`applicant_phone`, text, required): Enter your phone number in the format of `123-456-7890`.
* **Age** (`applicant_age`, number, required): Enter your age.
* **Parent or Guardian First Name** (`parent_first_name`, text, required): Enter your parent or guardian's first name.
* **Parent or Guardian Last Name** (`parent_last_name`, text, required): Enter your parent or guardian's last name.
* **Email Address** (`parent_email`, email, required): Enter your parent or guardian's email address in the format of `example@example.com`.
* **Phone Number** (`parent_phone`, text, required): Enter your parent or guardian's phone number in the format of `123-456-7890`.
* **Occupation** (`parent_occupation`, text, optional): Enter your parent or guardian's occupation if applicable.
* **Street Address** (`parent_address`, text, required): Enter your parent or guardian's street address.
* **City** (`parent_city`, text, required): Enter your parent or guardian's city.
* **State** (`parent_state`, text, required): Enter your parent or guardian's state.
* **Zip Code** (`parent_zip`, text, required): Enter your parent or guardian's zip code.
* **Household Size** (`household_size`, number, required): Enter the number of people living in your household.
* **Annual Household Income** (`annual_household_income`, select_one, required): Select your household's annual income from the provided options: Below 25000, 25000 - 50000, 50000 - 75000, 75000 - 100000, 100000 - 150000, Above 150000.
* **Explain any financial hardship or circumstances** (`financial_hardship_explanation`, text, optional): Explain any financial hardships or circumstances that may affect your application.
* **Preferred Camp Session** (`camp_session_preferred`, text, required): Select the camp session you prefer.
* **Previous camp attendance** (`camp_attendance_history`, select_one, required): Choose whether this is your first time attending the camp or if you have attended before.
* **Estimated campership amount needed** (`campership_amount_needed`, select_one, required): Choose the estimated amount of campership you need from the provided options: Full scholarship (100%), 75%, 50%, 25%, Partial assistance.
* **Why do you feel you deserve this campership** (`why_deserving`, text, required): Explain why you feel you deserve a campership in the provided field.
