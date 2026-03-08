# Life Insurance Quote Form - Help Guide

## Purpose
This form is designed to gather information from individuals applying for a life insurance policy. It includes fields for personal details, health information, and policy requirements.

## How To Complete This Form

1. Fill in the required fields with accurate and complete information.
2. Review the fields carefully to ensure you have filled in all necessary details.
3. Submit the form to complete your application.

## Field-by-Field Explanation

* **First name** (`first_name`, `text`, required: false): Enter your first name.
* **Last name** (`last_name`, `text`, required: false): Enter your last name.
* **Email** (`email`, `text`, required: false, hint: Please enter a valid email address): Enter a valid email address for contact purposes.
* **Phone number** (`phone_number`, `text`, required: false): Enter your phone number for contact purposes.
* **Date of Birth** (`date_of_birth`, `date`, required: false): Enter your date of birth in the format MM/DD/YYYY.
* **Age** (`age`, `number`, required: false, hint: Enter age in years): Enter your age in years.
* **Smoker** (`smoker`, `select_one`, required: false): Select 'True' if you are a smoker or 'False' otherwise.
* **Occupation** (`occupation`, `select_multiple`, required: false): Choose one or more of the following occupations: Manager, Teacher, Doctor, Engineer, Artist.
* **Medical History** (`medical_history`, `note`, required: false): Enter any medical conditions or history you have.
* **Life Insurance Type** (`life_insurance_type`, `select_one`, required: false): Select the type of life insurance policy you need: Term, Whole Life, Variable, Universal.
* **Coverage Type** (`coverage_type`, `select_multiple`, required: false): Choose one or more of the following coverage types: Individual, Group.
* **Coverage Amount** (`coverage_amount`, `number`, required: false): Enter the coverage amount you require.
* **Premium** (`premium`, `number`, required: false): Enter your expected premium.
* **Policy Holder Name** (`policy_holder_name`, `text`, required: false): Enter the name of the policy holder (if different from your name).
* **Policy Holder Date of Birth** (`policy_holder_date_of_birth`, `date`, required: false): Enter the date of birth of the policy holder.
* **Policy Holder Social Security Number** (`policy_holder_social_security_number`, `text`, required: false, hint: Please enter a valid social security number): Enter a valid social security number of the policy holder.
* **Policy Holder Address** (`policy_holder_address`, `text`, required: false): Enter the address of the policy holder.
* **Policy Holder City** (`policy_holder_city`, `text`, required: false): Enter the city of the policy holder.
* **Policy Holder State** (`policy_holder_state`, `text`, required: false): Enter the state of the policy holder.
* **Policy Holder Zip** (`policy_holder_zip`, `text`, required: false): Enter the zip code of the policy holder.

## Tips

* Ensure you fill in all required fields accurately.
* If you have any doubts or questions, contact your life insurance provider or sales representative.
* Review the submitted information carefully before finalizing the application.
