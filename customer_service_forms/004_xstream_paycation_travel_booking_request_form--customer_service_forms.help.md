# Xstream Paycation Travel Booking Request Form - Help Guide
## Purpose
This form is designed to collect information from clients for travel booking requests. It helps the travel service or customer support team to understand the client's preferences and requirements for their trip.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your client information in the "Client Info" field.
2. Provide details about your travel in the "Travel Details" field.
3. Select your preferred travel date in the "Preferred Travel Date" field.
4. Specify your start and end times for the travel in the "Start Time" and "End Time" fields, respectively.
5. Indicate whether you have a preferred travel destination in the "Travel Destination" field.
6. Choose how long you would like your travel to be in the "Travel Length" field.
7. Select how you would like to be contacted in the "Contact Method" field.
8. Enter your contact number in the "Contact Number" field, if you have one.
9. Provide any additional message you have for the travel service or support team in the "Client Message" field.

## Field-by-Field Explanation

* **Client Info** (`client_info`, text, required: false): This is the field where you enter your client information, which could be your name, company name, or other relevant details.
* **Travel Details** (`travel_details`, text, required: false): Here, you can provide any details you think are relevant to your travel booking, such as special requests or requirements.
* **Preferred Travel Date** (`preferred_travel_date`, date, required: false): Select a date for your travel, and the travel service or support team will try to accommodate it.
* **Start Time** (`start_time`, time, required: false): Specify the start time for your travel, which could be an important factor in planning your trip.
* **End Time** (`end_time`, time, required: false): Enter the end time for your travel, which will help the team plan your trip accordingly.
* **Travel Destination** (`travel_destination`, select_one, required: false): Select whether you have a preferred travel destination, and if so, which one.
* **Travel Length** (`travel_length`, number, required: false): Choose how long you would like your travel to be, which will help the team plan your trip duration.
* **Contact Method** (`contact_method`, select_one, required: false): Select how you would like to be contacted for your travel booking, such as by phone, email, or other means.
* **Contact Number** (`contact_number`, text, required: false): If you have a contact number, enter it so the travel service or support team can reach you easily.
* **Client Message** (`client_message`, note, required: false): Provide any additional message you have for the travel service or support team, such as special requests or instructions.
