# life_insurance_lead_generation_form - Help Guide
## Purpose
The life_insurance_lead_generation_form is a lead generation form designed for life insurance agents to gather information from potential clients about their life insurance needs.

## How To Complete This Form
1. To begin, select the "Lead Generation" page.
2. Choose whether you are "Yes" or "No" to indicate whether you would like to generate a lead.
3. On the "contact" page, select the contact method you would like to use.
4. On the "policy" page, select the policy interest and type of policy you are interested in.
5. On the "customer" page, select the type of customer and their employment status.
6. Enter the customer's age, income, and occupation.
7. On the "phone" page, enter the customer's phone number and select their preferred contact method.
8. On the "contact_info" page, enter the customer's email address and policy email address.
9. On the "customer_address" page, enter the customer's address.
10. On the "agent_notes" page, enter any additional notes for the agent.
11. Finally, submit the form to generate a lead.

## Field-by-Field Explanation

* **Lead Generation** (`Yes`, `No`, select_multiple, required: `false`): 
  - This is the first field in the form. Choose "Yes" or "No" to indicate whether you want to generate a lead.
* **contact** (`contact_info`, select_one, required: `true`): 
  - This field asks you to choose how you would like to be contacted. Select "Option 1" or "Option 2" based on your preference.
* **policy_interest** (`policy_interest`, select_one, required: `true`): 
  - This field asks you about the type of policy you are interested in. Choose between "Option 1" or "Option 2".
* **customer** (`customer_info`, select_one, required: `false`): 
  - This field asks you about the type of customer you are interested in. Choose between "Option 1" or "Option 2".
* **policy_benefit** (`policy_benefit`, select_one, required: `true`): 
  - This field asks you about the policy benefit. Choose between "Option 1" or "Option 2".
* **customer_relationship** (`customer_relationship`, select_one, required: `false`): 
  - This field asks you about the customer relationship. Choose between "Option 1" or "Option 2".
* **policy_deduction** (`policy_deduction`, select_one, required: `false`): 
  - This field asks you about the policy deduction. Choose between "Option 1" or "Option 2".
* **contact_method** (`contact_method`, select_one, required: `true`): 
  - This field asks you how you would like to be contacted. Choose between "Option 1" or "Option 2".
* **insurance_product** (`insurance_product`, select_one, required: `true`): 
  - This field asks you about the type of insurance product you are interested in. Choose between "Option 1" or "Option 2".
* **customer_note** (`customer_note`, text, required: `false`): 
  - This is a text field where you can provide additional information about the customer.
* **policy_note** (`policy_note`, text, required: `false`): 
  - This is a text field where you can provide additional information about the policy.
* **agent_note** (`agent_note`, text, required: `false`): 
  - This is a text field where you can leave notes for the agent.
* **customer_question** (`customer_question`, text, required: `false`): 
  - This is a text field where you can provide additional information about the customer.
* **policy_question** (`policy_question`, text, required: `false`): 
  - This is a text field where you can provide additional information about the policy.
* **customer_age** (`customer_age`, number, required: `true`): 
  - This field asks for the customer's age.
* **customer_income** (`customer_income`, number, required: `false`): 
  - This field asks for the customer's income.
* **customer_employment_status** (`customer_employment_status`, number, required: `false`): 
  - This field asks for the customer's employment status.
* **customer_occupation** (`customer_occupation`, text, required: `false`): 
  - This field asks for the customer's occupation.
* **customer_phone** (`customer_phone`, text, required: `true`): 
  - This field asks for the customer's phone number.
* **policy_phone** (`policy_phone`, text, required: `false`): 
  - This field asks for the policy phone number.
* **contact_email** (`contact_email`, email, required: `true`): 
  - This field asks for the customer's email address.
* **policy_email** (`policy_email`, email, required: `false`): 
  - This field asks for the policy email address.
* **customer_address** (`customer_address`, text, required: `false`): 
  - This field asks for the customer's address.
* **agent_comment** (`agent_comment`, text, required: `false`): 
  - This is a text field where the agent can leave comments.
* **submission** (`submission`, text, required: `true`): 
  - This field is for the final submission of the form. 

Note: Please make sure to enter accurate and correct information in each field to ensure that the lead is properly generated.
