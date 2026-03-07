<thinking>
  This form is intended to register a customer's outdoor care services request.
  The form allows customers to select multiple services they require (landscaping or property care),
  input their contact information (name, email, phone), and schedule an appointment.
  The goal of this form is to capture essential information for the business to fulfill
  the customer's request efficiently.
  This form is designed to be used by customers to register their outdoor care services
  requests, making it a crucial part of the customer journey.
  Before proceeding, check if you have already submitted this form.
  Please note that the form fields are designed to be completed in the order they appear.
  </thinking>

# Outdoor Care Services Registration - Help Guide
## Purpose
This form is designed to help customers register their outdoor care services requests with the business.

## How To Complete This Form
To complete this form, follow these steps:
1. Choose whether you are requesting service (Service Request) by selecting the appropriate option from the dropdown menu.
2. Enter your name in the customer name field.
3. Enter your email address and phone number in the respective fields.
4. Schedule an appointment by selecting a date in the Schedule Appointment field.
5. Select the services you require (Landscaping, Property Care, or Both) in the Services field.
6. Provide any additional information about the follow-up schedule in the Follow-up field.
7. Add any relevant notes about your service request in the Notes field.

## Field-by-Field Explanation
* **Service Request** (`service_request`, select_multiple, required: false): Choose whether you are requesting service (Yes or No).
* **Customer Name** (`name`, text, required: false): Enter your name.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Schedule Appointment** (`schedule_appointment`, date, required: false): Schedule your appointment by selecting a date.
* **Authorization** (`authorization`, text, required: false): If necessary, provide authorization or permission information.
* **Address** (`address`, text, required: false): Enter your address (if applicable).
* **Services** (`services`, select_one, required: false): Select the service(s) you require (Landscaping, Property Care, or Both).
* **Follow-up** (`follow_up`, date, required: false): Provide any additional information about your follow-up schedule.
* **Notes** (`notes`, note, required: false): Add any relevant notes about your service request.
