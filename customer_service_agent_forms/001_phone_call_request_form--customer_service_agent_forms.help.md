<thinking>
The phone call request form is a crucial tool for customer service agents to receive requests for phone calls from customers. This form is used to gather essential information from customers to process their phone call requests efficiently. 

When a customer submits a form, the agent will review the provided details, which include contact information, the reason for the phone call, and the customer's preferred date and time for the call. The agent will then contact the customer at the scheduled date and time to discuss the customer's inquiry. 

This form is used by customer service agents to receive requests for phone calls from customers, so it is not used for internal tasks or other purposes. Ensure that the form is only used for its intended purpose to avoid duplication of efforts and ensure accurate data collection.

</thinking>

# phone_call_request_form - Help Guide
## Purpose
The phone call request form is designed to receive requests for phone calls from customers. The form helps customer service agents gather essential information to efficiently process the customer's request and schedule a call with them.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your contact information, including your name and email address.
2. Provide a brief reason for the phone call in the `Reason for Phone Call` field.
3. Describe the purpose of the phone call in the `Reason for Phone Call` field.
4. Add any additional notes that the customer service agent may need to know.
5. Choose a customer service agent from the `Customer Service Agent` dropdown list.
6. Select the date you would like to schedule the call.
7. Select the time you would like to schedule the call.
8. Confirm the scheduled date of the call.

## Field-by-Field Explanation

* **Contact Information** (`contact_info`, text, **required**): Enter your name and email address in this field.
* **Reason for Phone Call** (`reason`, text, **required**): Provide a brief description of the reason for the phone call.
* **Reason for Phone Call** (`customer_request`, text, **required**): This field is used to further describe the purpose of the phone call.
* **Notes** (`notes`, text, **optional**): Add any additional information that the customer service agent may need to know.
* **Email** (`contact_info_email`, email, **optional**): Enter your email address if you have one.
* **Customer Service Agent** (`customer_service_agent`, select one, **required**): Choose a customer service agent from the list to schedule the call with.
* **Customer Service Agent Phone** (`customer_service_agent_phone`, text, **optional**): This field is not used in the current form.
* **Date** (`date`, date, **required**): Select the date you would like to schedule the call.
* **Time** (`time`, time, **required**): Select the time you would like to schedule the call.
* **Confirm Date** (`confirm_date`, date, **required**): Confirm the date of the scheduled call.
