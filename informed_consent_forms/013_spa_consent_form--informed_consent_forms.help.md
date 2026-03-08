# spa_consent_form - Help Guide
## Purpose
The spa consent form is designed to collect informed consent from clients before providing spa services. It's essential to have a clear understanding of the services and their scope to ensure a safe and enjoyable experience for the client.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields with accurate and up-to-date information.
2. Provide your name, email address, and phone number (if applicable).
3. Disclose your medical history, including any allergies.
4. Select the correct option for your allergies (if you have any).
5. Choose a date of service and describe the procedure you will receive.
6. Review and agree to the terms and conditions.

## Field-by-Field Explanation

* **Client Name (client_name)** (`text`, required): Enter your full name as it appears on your identification.
* **Client Email (client_email)** (`text`, required): Enter your valid email address.
* **Client Phone (client_phone)** (`text`, optional): Enter your phone number (if you wish to provide it).
* **Date of Service (date_of_service)** (`date`, required): Enter the date of service in the format MM/DD/YYYY (e.g., 02/15/2024).
* **Procedure (procedure)** (`text`, required): Describe the procedure you will receive, including the type and duration of the service.
* **Medical History (medical_history)** (`text`, optional): Provide any relevant medical history or conditions that may impact your spa experience.
* **Allergies (allergies)** (`select_one`, required): Select all allergies from the list if you have any. If you don't have any allergies, choose "other" and provide a description in the "other" field.
