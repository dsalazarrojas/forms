# Simple Guest List Form - Help Guide
## Purpose
The Simple Guest List Form is used to register guests for events. This form collects relevant information about the event and the guests attending it.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of the event in the **Event Name** field.
2. Select the date of the event from the calendar.
3. Choose the time of the event from the time picker.
4. Enter the name of the guest(s) attending the event.
5. Provide their contact information, including phone number and email.
6. Optionally, select whether the guest is assigned to someone or not.
7. Add any additional notes about the guest.
8. Click the submit button to save the registration.

## Field-by-Field Explanation

* **Event Name** (`event_name`, text, required): Enter the name of the event, e.g., "Company Holiday Party".
* **Date** (`date`, date, required): Select the date of the event from the calendar.
* **Time** (`time`, time, required): Choose the time of the event from the time picker.
* **Guest Name** (`guest_name`, text, required): Enter the name(s) of the guest(s) attending the event.
* **Contact Information** (`contact_info`, text, required): Provide the contact information of the guest(s), including phone number and email.
* **Email** (`email`, email, required): Enter the email address of the guest(s).
* **Phone** (`phone`, text, required): Enter the phone number of the guest(s).
* **Guest Count** (`guest_count`, number, required): Enter the number of guests attending the event.
* **Notes** (`notes`, note, required): Add any additional notes about the guest(s).
* **Assigned To** (`assigned_to`, select_one, required): Select whether the guest is assigned to someone or not.
* **Assigned To** (`assigned_to_options`, text, required): If yes, select the name of the person assigned to the guest.
* The **Assigned To** field is a dropdown with two options: "Yes" and "No". If selected as "Yes", the **Assigned To** field will appear and allow you to select the person assigned to the guest. 

## Tips
* Make sure to enter accurate information to ensure that the guest list is up-to-date and accurate.
* If you are unsure about any field, refer to your event coordinator or host for clarification.
