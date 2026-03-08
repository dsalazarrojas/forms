<thinking>This form is a Life Insurance Information Form, which gathers essential information from policy owners and agents to manage and update life insurance policies. The form is designed to be filled out by policy owners and agents to ensure accurate and complete information is captured. This form is not intended to be used for new policy applications, but rather for updating existing policies or for agents to report on policy status. Please ensure that you are filling out this form for the correct purpose.</thinking>

# life-insurance-information-form - Help Guide
## Purpose
This form is used to gather information about life insurance policies, specifically for updating existing policies or reporting on policy status. It's essential to fill out this form accurately and completely to ensure that the information is up to date and correct.

## How To Complete This Form
1. Start by filling out the form fields as required:
	* First and last names are required for both the policy owner and the policy owner's contact information.
	* The date of birth is optional but recommended for policy owners.
	* Social security number is not required but recommended.
	* Policy type, coverage level, and term are required for the policy details.
	* Start and end dates are required for the policy term and status.
	* Policy owner contact information is optional but recommended.
	* Form signature is required to confirm that the information is accurate and complete.
	* Additional information can be provided in the additional info field.
	* Agent contact information is optional but recommended.
	* Select the correct insurance company and product from the options provided.
	* Coverage amount and premium payment are optional but recommended.
2. Ensure that you select the correct policy status from the options provided.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter the policy owner's first name.
* **Last Name** (`last_name`, text, required): Enter the policy owner's last name.
* **Date of Birth** (`date_of_birth`, date, optional): Enter the policy owner's date of birth (YYYY-MM-DD format).
* **Social Security Number** (`social_security_number`, text, optional): Enter the policy owner's social security number (optional but recommended).
* **Policy Type** (`policy_type`, select_one, required): Select the type of life insurance policy (Life, Term, or Whole).
* **Coverage Level** (`coverage_level`, select_multiple, required): Select the coverage level of the policy (Basic, Preferred, Supreme, or Elite).
* **Premium Cost** (`premium_cost`, number, optional): Enter the premium cost of the policy.
* **Policy Term** (`policy_term`, time, optional): Enter the term of the policy (YYYY-MM-DD format).
* **Start Date** (`policy_start_date`, date, required): Enter the start date of the policy (YYYY-MM-DD format).
* **End Date** (`policy_end_date`, date, required): Enter the end date of the policy (YYYY-MM-DD format).
* **Policy Status** (`policy_status`, select_multiple, optional): Select the status of the policy (Active, Inactive, Cancelled, or Pending).
* **Policy Owner** (`policy_owner`, text, optional): Enter the policy owner's name.
* **Policy Owner Email** (`policy_owner_email`, email, optional): Enter the policy owner's email address.
* **Policy Owner Phone** (`policy_owner_phone`, text, optional): Enter the policy owner's phone number.
* **Form Signature** (`form_signature`, select_one, required): Select to confirm that the information is accurate and complete.
* **Additional Info** (`additional_info`, text, optional): Enter any additional information about the policy.
* **Insurance Agent's Name** (`insurance_agents_name`, text, optional): Enter the agent's name.
* **Insurance Agent's Email** (`insurance_agents_email`, email, optional): Enter the agent's email address.
* **Insurance Agent's Phone** (`insurance_agents_phone`, text, optional): Enter the agent's phone number.
* **Company** (`company`, select_one, optional): Select the insurance company (ABC, DEF, or GHI).
* **Insurance Product** (`insurance_product`, select_multiple, required): Select the insurance product (Life, Term, or Whole).
* **Coverage Amount** (`coverage_amount`, text, optional): Enter the coverage amount.
* **Premium Payment** (`premium_payment`, text, optional): Enter the premium payment method.
* **Policy Notes** (`policy_notes`, text, optional): Enter any notes about the policy.
