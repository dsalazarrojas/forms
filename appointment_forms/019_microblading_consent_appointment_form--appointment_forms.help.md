# Microblading Consent & Appointment Form - Help Guide
## Purpose
The Microblading Consent & Appointment Form is designed to collect essential information from customers for microblading services. This form helps you to understand their appointment preferences, emergency contacts, and billing details.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your customer information, including name, phone number, and email address.
2. Choose whether the appointment is 'Yes' or 'No' by selecting 'Yes' or 'No' from the 'Appointment Details' dropdown.
3. Select the type of microblading procedure you would like to undergo.
4. Provide your signature to confirm your consent for the microblading procedure.
5. Enter your preferred date and time for the appointment.
6. Share any special requests or requirements for the appointment.
7. Specify your emergency contact's name and relation.
8. Enter your billing contact's name and any additional details.
9. Enter the procedure price you are willing to pay.

## Field-by-Field Explanation
* **Customer Information** (`customer_information`, `text`, required: false): Enter your full name, phone number, and email address so we can contact you about your appointment.
* **Appointment Details** (`appointment_details`, `select_one`, required: false): Confirm whether you have an existing appointment or not. Select 'Yes' to continue with the existing appointment or 'No' to indicate it's not your appointment.
* **Procedure Selection** (`procedure_selection`, `select_multiple`, required: false): Choose the type of microblading procedure you would like to have. Select as many options as apply.
* **Consent** (`consent`, `text`, required: false): Sign this form to confirm your consent for the microblading procedure. This is a mandatory field to ensure we have your explicit approval.
* **Signature** (`signature`, `note`, required: false): This is a note field for you to put your signature, which is required for your consent to be valid.
* **Phone** (`phone`, `text`, required: false): Enter your phone number so we can contact you about your appointment.
* **Email** (`email`, `email`, required: false): Enter your email address so we can communicate with you about your appointment.
* **Date** (`date`, `date`, required: false): Enter the date you'd like to schedule your appointment.
* **Time** (`time`, `time`, required: false): Enter the time you'd like to schedule your appointment.
* **Appointment Preferences** (`appointment_preferences`, `text`, required: false): Share any preferences or requests you have for your appointment.
* **Special Requests** (`special_requests`, `text`, required: false): Share any special requests or requirements you have for your appointment.
* **Emergency Contact** (`emergency_contact`, `text`, required: false): Enter the name of your emergency contact.
* **Emergency Contact Relation** (`emergency_contact_relation`, `select_one`, required: false): Specify the relation between your emergency contact and you (e.g., parent, sibling, spouse).
* **Billing Contact** (`billing_contact`, `text`, required: false): Enter the name of your billing contact.
* **Procedure Price** (`procedure_price`, `number`, required: false): Enter the price you are willing to pay for the procedure.
