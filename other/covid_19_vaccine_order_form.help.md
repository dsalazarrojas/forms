# COVID-19 Vaccine Order Form - Help Guide
## Purpose
This form is used to collect information from clients or patients who are receiving the COVID-19 vaccine. It helps track vaccine orders and related details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields, marked with an asterisk (\*).
2. Enter the client's name in the "Client Name" field.
3. Select the date of vaccination.
4. Select the time of vaccination.
5. Indicate if the client is receiving a vaccine ("Yes" or "No").
6. Enter the quantity of vaccine to be administered.
7. Provide any additional notes about the client's vaccination.
8. Enter the client's contact phone number.

## Field-by-Field Explanation
* **vaccine_order** (`vaccine_order`, text, not required): Enter a brief description of the vaccine order, if desired.
* **client_name** (`client_name`, text, not required): Enter the name of the client or patient.
* **date_of_vaccination** (`date_of_vaccination`, date, not required): Select the date of the vaccination using the MM/dd/yyyy format.
* **time_of_vaccination** (`time_of_vaccination`, time, not required): Select the time of the vaccination using the HH:MM AM/PM format.
* **vaccine_type** (`vaccine_type`, select one, not required): Indicate if the client is receiving a vaccine ("Yes" or "No").
* **quantity** (`quantity`, integer, not required): Enter the number of vaccine doses to be administered.
* **notes** (`notes`, text, not required): Provide any additional information about the client's vaccination.
* **contact_number** (`contact_number`, phone, not required): Enter the client's contact phone number.

## Tips
- Please ensure all fields are filled in for accurate tracking and billing.
- If you're not sure about any field, contact the relevant department or healthcare professional for assistance.
- This form is for internal use only, please do not share sensitive information with unauthorized parties.
