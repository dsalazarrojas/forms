# Marketing Analytics Communication Form - Help Guide
## Purpose
The Marketing Analytics Communication Form is a tool used to gather marketing analytics communication information from users. This form is likely used by sales or marketing teams to collect data on marketing campaigns, contacts, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant campaign from the "Campaign" dropdown menu.
2. Fill in the "Form ID" and "Campaign Name" fields.
3. Provide feedback in the "Feedback" field.
4. Select the preferred communication channels (Phone, Email, or Text Message) in the "Communication Channels" field.
5. Enter the contact person's name in the "Contact" field.
6. Enter the phone number in the "Phone Number" field.
7. Enter the email address in the "Email" field.
8. Select the date and time for communication in the "Date" and "Time" fields.

## Field-by-Field Explanation

* **Campaign** (`campaign_id`, select_one, required: false): Select the relevant marketing campaign from the dropdown menu.
* **Form** (`form_id`, text, required: false): Enter the ID of the form you are submitting for.
* **Campaign Name** (`campaign_name`, text, required: false): Enter the name of the campaign.
* **Feedback** (`feedback`, text, required: false): Provide any relevant feedback on the campaign.
* **Communication Channels** (`communication_channels`, select_multiple, required: false): Select the preferred communication channels (Phone, Email, or Text Message) for the campaign.
* **Contact** (`contact_person`, text, required: false): Enter the name of the contact person.
* **Phone Number** (`phone_number`, text, required: false): Enter the phone number of the contact person.
* **Email** (`email`, email, required: false): Enter the email address of the contact person.
* **Date** (`date`, date, required: false): Select the date for communication.
* **Time** (`time`, time, required: false): Select the time for communication.
