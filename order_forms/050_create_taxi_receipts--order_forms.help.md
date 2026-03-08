# Create Taxi Receipts - Help Guide
## Purpose
This form is designed to create taxi receipts for a ride-hailing company, capturing essential information for efficient and accurate receipt generation.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Enter the pickup location where the passenger was picked up.
2. Enter the dropoff location where the passenger was dropped off.
3. Select the date of the trip from the calendar or enter it manually.
4. Select the time of the trip from the time picker or enter it manually.
5. Enter the driver's information, including their name and driver's license number.
6. Enter the passenger's information, including their name, address, phone number, and email.
7. Choose the payment method used (cash, credit card, or debit card).
8. Enter the payment amount.

## Field-by-Field Explanation
* **pickup location** (`pickup_location`, text, false): Enter the location where the passenger was picked up.
* **dropoff location** (`dropoff_location`, text, false): Enter the location where the passenger was dropped off.
* **date** (`date`, date, false): Select the date of the trip using the calendar or enter it manually in the format `YYYY-MM-DD`.
* **time** (`time`, time, false): Select the time of the trip using the time picker or enter it manually in the format `HH:MM`.
* **driver info** (`driver_info`, text, false): Enter the driver's name and any other relevant information.
* **driver license** (`driver_license`, text, false): Enter the driver's license number.
* **driver license number** (`driver_license_number`, text, false): Enter the driver's license number (if different from the driver's license).
* **receipt number** (`receipt_number`, text, false): Enter a unique receipt number for the trip.
* **passenger name** (`passenger_name`, text, false): Enter the passenger's name.
* **passenger address** (`passenger_address`, text, false): Enter the passenger's address.
* **passenger phone** (`passenger_phone`, text, false): Enter the passenger's phone number.
* **passenger email** (`passenger_email`, text, false): Enter the passenger's email address.
* **payment method** (`payment_method`, select_one, false): Choose the payment method used (cash, credit card, or debit card).
* **payment amount** (`payment_amount`, number, false): Enter the payment amount.

## Tips
* Ensure that all fields are completed accurately and according to the company's policies.
* Double-check the entered information for any errors before submitting the form.
* If you have any questions or issues, contact the support team for assistance.
