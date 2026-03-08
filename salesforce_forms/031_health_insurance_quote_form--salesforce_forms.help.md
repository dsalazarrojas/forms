# Health Insurance Quote Form - Help Guide
## Purpose
This form is designed to gather essential information for quoting health insurance plans. Please fill it out to help our team provide you with accurate and personalized quotes or assistance.

## How To Complete This Form
1. Fill out the required fields:
	* **Name**: Enter your full name as it appears on your identification.
	* **Email**: Enter your email address where you'd like to receive quotes or updates.
	* **Phone**: Enter your phone number where we can contact you for more information.
	* **Age**: Enter your age in years.
	* **Income**: Enter your annual income.
2. Select your preferred health insurance provider:
	* Choose one of the provided health insurance providers (Blue Cross, Green Shield, Red Cross).
3. Indicate your health insurance type preference:
	* Select 'Yes' or 'No' for the type of health insurance you need.

## Field-by-Field Explanation
* **Name** (`name`, text, required): Enter your full name as it appears on your identification.
* **Email** (`email`, email, required): Enter your email address where you'd like to receive quotes or updates.
* **Phone** (`phone`, text, required): Enter your phone number where we can contact you for more information.
* **Age** (`age`, number, required): Enter your age in years.
* **Income** (`income`, number, required): Enter your annual income.
* **Health Insurance Provider** (`health_insurance_provider`, select_one, required): Choose one of the provided health insurance providers (Blue Cross, Green Shield, Red Cross).
* **Health Insurance Type** (`health_insurance_type`, select_multiple, required): Select 'Yes' or 'No' for the type of health insurance you need.
* **Policy Holder Name** (`policy_holder_name`, text, optional): If you're quoting for someone else, enter their name.
* **Policy Holder Age** (`policy_holder_age`, number, optional): If you're quoting for someone else, enter their age.
* **Policy Holder Income** (`policy_holder_income`, number, optional): If you're quoting for someone else, enter their annual income.
* **Policy Holder Relationship** (`policy_holder_relationship`, text, optional): Describe your relationship with the policy holder (e.g., 'Self', 'Parent', 'Spouse').
