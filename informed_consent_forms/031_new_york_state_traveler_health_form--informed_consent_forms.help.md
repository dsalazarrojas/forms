# New York State Traveler Health Form - Help Guide
## Purpose
The New York State Traveler Health Form is designed to gather essential information from travelers arriving in New York State. This form is intended to help the authorities ensure the traveler's health and safety, and to facilitate contact and emergency procedures.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your traveler name.
2. Enter your date of arrival in the required format (mm/dd/yyyy).
3. Provide your flight number, if applicable.
4. Enter your destination.
5. Give your contact number and email address.
6. If you have a health insurance provider, select "New York State Health Insurance" or "Other" and fill in the name and address of your health insurance provider.

## Field-by-Field Explanation
* **Traveler Name** (`traveler_name`, text, required): Enter your name as it appears on your passport or government-issued ID.
* **Date of Arrival** (`traveler_date_of_arrival`, date, required): Enter the date of your arrival in the format mm/dd/yyyy.
* **Flight Number** (`flight_number`, text, optional): Provide the number of your flight, if you have one.
* **Destination** (`travel_destination`, text, optional): Enter the city or town you are traveling to.
* **Address** (`address`, text, optional): Enter your current or destination address.
* **Travel History** (`travel_history`, text, optional): Provide any relevant information about your travel history.
* **Contact Number** (`contact_number`, text, optional): Enter a contact number where you can be reached.
* **Email** (`email`, email, optional): Enter your email address.
* **Health Insurance Provider** (`health_insurance_provider`, select_multiple, optional): Select "New York State Health Insurance" or "Other" if you have a different health insurance provider.
* **Health Insurance Provider Name** (`health_insurance_provider_name`, text, optional): If you selected "Other", enter the name of your health insurance provider.
* **Health Insurance Provider Address** (`health_insurance_provider_address`, text, optional): If you selected "Other", enter the address of your health insurance provider.
* **Travel Reason** (`travel_reason`, text, optional): Enter the reason for your travel.
