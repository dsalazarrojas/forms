# Life Insurance Intake Form - Help Guide
## Purpose
The Life Insurance Intake Form is a crucial document used to gather information from customers who are applying for or modifying life insurance policies. This form helps insurance agents, agents' offices, or companies to collect essential details about the customer and the policy they are interested in.

## How To Complete This Form
To complete this form accurately, follow these steps:

1. Fill in your First name and Last name in the respective fields.
2. Enter your Email address, which is a required field.
3. Provide your Phone number for communication purposes.
4. Select the type of policy you are interested in (e.g., "Yes" or "No").
5. Specify the start and end dates of your policy term.
6. Enter the policy amount and select the policy status (if applicable).
7. Provide any additional policy notes if necessary.
8. Select the term of your policy in hours and minutes.
9. Enter any notes about the policy term.
10. If you're a customer, add your signature to confirm your information.
11. If applicable, have your insurance agent sign and date the form.
12. Review the Terms and Conditions and acknowledge understanding by signing.

## Field-by-Field Explanation
* **First name** (`first_name`, `text`, required/optional): Enter your first name for identification purposes.
* **Last name** (`last_name`, `text`, required/optional): Enter your last name for identification purposes.
* **Email** (`email`, `text`, required): Enter your valid email address for communication and verification purposes.
* **Phone** (`phone`, `text`, required/optional): Enter your phone number for communication purposes.
* **Policy type** (`policy_type`, `select_one`, required/optional): Select the type of policy you are interested in ("Yes" or "No").
* **Policy start date** (`policy_start_date`, `date`, required): Enter the start date of your policy term.
* **Policy end date** (`policy_end_date`, `date`, required): Enter the end date of your policy term.
* **Policy amount** (`policy_amount`, `number`, required): Enter the total amount of your policy.
* **Policy status** (`policy_status`, `select_multiple`, required/optional): Select the status of your policy ("Active" or "Inactive").
* **Policy notes** (`policy_notes`, `note`, required/optional): Add any additional notes about your policy.
* **Policy terms** (`policy_terms`, `time`, required): Select the term of your policy in hours and minutes.
* **Policy term notes** (`policy_term_notes`, `note`, required/optional): Add any additional notes about your policy term.
* **Quote date** (`quote_date`, `date`, required): Enter the date you received your quote.
* **Insurance agent** (`insurance_agent`, `text`, required/optional): Enter the name of your insurance agent, if applicable.
* **Agency name** (`agency_name`, `text`, required/optional): Enter the name of your insurance agency, if applicable.
* **Agency address** (`agency_address`, `text`, required/optional): Enter the address of your insurance agency, if applicable.
* **Agency phone** (`agency_phone`, `text`, required/optional): Enter the phone number of your insurance agency, if applicable.
* **Agent notes** (`agent_notes`, `note`, required/optional): Add any notes from your insurance agent.
* **Company name** (`company_name`, `text`, required/optional): Enter the name of your company, if applicable.
* **Company address** (`company_address`, `text`, required/optional): Enter the address of your company, if applicable.
* **Company phone** (`company_phone`, `text`, required/optional): Enter the phone number of your company, if applicable.
* **Company notes** (`company_notes`, `note`, required/optional): Add any notes about your company.
* **Customer signature** (`customer_signature`, `text`, required): Add your signature to confirm your information.
* **Agent signature** (`agent_signature`, `text`, required/optional): If applicable, have your insurance agent sign and date the form.
* **Terms and conditions** (`terms_and_conditions`, `text`, required): Review and acknowledge understanding of the Terms and Conditions by signing.
