# Party Rental Agreement Form - Help Guide
## Purpose
This form is used to collect information from customers planning a party event at a rental space. It helps the rental service provider to understand the event details, payment terms, and contact information to facilitate the booking process.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the Renter Details section with your contact information.
2. Provide contact information and other details related to the event in the Contact Details section.
3. Specify the event details, including party type, size, date, and time, in the Party Details section.
4. Choose the desired equipment and services from the list.
5. Select the payment method and enter the total cost of the event.
6. Sign the form to confirm the agreement.

## Field-by-Field Explanation

### Renter Details
* **Renter's Signature** (`renter_signature`, `text`, required): Sign the form to confirm that you have read and agreed to the terms.
* **Renter's Name** (`renter_name`, `text`, required): Enter your name as the person booking the party.
* **Contact Number** (`contact_number`, `text`, required): Enter your contact number for further communication.
* **Email** (`email`, `email`, required): Enter your email address for further communication.

### Contact Details
* **Contact Details** (`contact_details`, `text`, required): Provide any additional contact information or details that you want to share.

### Rental Details
* **Rental Details** (`rental_details`, `text`, required): Specify the rental details, including any specific requirements or requests.
* **Party Space** (`equipment_and_services`, `select_multiple`, required): Choose the type of party space and services that you desire.
* **Payment Details** (`payment_details`, `text`, required): Specify the payment terms and conditions for the event.

### Party Details
* **Party Type** (`party_type`, `select_one`, required): Choose the type of party (birthday, graduation, corporate, etc.).
* **Party Size** (`party_size`, `number`, optional): Estimate the number of attendees.
* **Party Date** (`party_date`, `date`, optional): Select the date of the party.
* **Party Time** (`party_time`, `time`, optional): Select the time of the party.
* **Event Name** (`event_name`, `text`, optional): Give your event a name.
* **Event Description** (`event_description`, `text`, optional): Briefly describe the event.

### Payment and Terms
* **Payment Method** (`payment_method`, `select_one`, required): Choose how you want to pay for the event.
* **Total Cost** (`total_cost`, `number`, required): Enter the total cost of the event.

### Terms and Conditions
* **Terms and Conditions** (`terms_and_conditions`, `text`, optional): Read and agree to the terms and conditions of the rental service.
* **Notes** (`notes`, `text`, optional): Add any additional comments or notes.

Please review the form and ensure all fields are accurate and complete.
