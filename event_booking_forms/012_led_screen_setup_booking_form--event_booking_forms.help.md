<thinking>

This form is used to book and configure LED screen setups for upcoming events. To avoid duplicate bookings, please ensure that you are only booking a screen for an event if it has not been previously set up. If you're unsure, you can check the setup status of a screen on the screen management dashboard.

</thinking>

# LED Screen Setup Booking Form - Help Guide
## Purpose
This form is used to book and configure LED screen setups for events. Please fill out the form to reserve an LED screen for an event and provide all necessary details for the setup.

## How To Complete This Form

1. Fill in the event details:
	* Event Name: Enter the name of the event.
	* Event Date: Enter the date of the event in the correct format (YYYY-MM-DD).
	* Event Time: Enter the start time of the event in the correct format (HH:MM).
2. Choose the setup options:
	* Setup Type: Choose whether the setup is 'Yes' or 'No'.
	* Setup Size: Choose whether the setup is 'Yes' or 'No'.
	* Setup Location: Enter the location of the setup.
3. Schedule the setup:
	* Setup Date: Enter the date for the setup in the correct format (YYYY-MM-DD).
	* Setup Time: Enter the start time for the setup in the correct format (HH:MM).
	* Setup Duration: Choose whether the setup is 'Yes' or 'No'.
4. Confirm the setup:
	* Setup Status: Choose whether the setup is 'Active' or 'Inactive'.
	* Review Status: Choose whether the review is 'Yes' or 'No'.
5. Enter customer details:
	* Customer Name: Enter the name of the customer.
	* Customer Email: Enter the email address of the customer.
	* Customer Phone: Enter the phone number of the customer.
	* Company: Enter the name of the company.
6. Add any notes:
	* Setup Notes: Enter any notes for the setup.
	* Review Comment: Enter any comments for the review.

## Field-by-Field Explanation

* **Event Name** (`event_name`, text, required/optional): Enter the name of the event.
* **Event Date** (`event_date`, date, required/true): Enter the date of the event in the correct format (YYYY-MM-DD).
* **Event Time** (`event_time`, time, required/true): Enter the start time of the event in the correct format (HH:MM).
* **Setup Type** (`setup_type`, select_one, optional/optional): Choose whether the setup is 'Yes' or 'No'.
* **Setup Size** (`setup_size`, select_multiple, optional/optional): Choose whether the setup is 'Yes' or 'No'.
* **Setup Location** (`setup_location`, text, required/true): Enter the location of the setup.
* **Setup Date** (`setup_date`, date, required/true): Enter the date for the setup in the correct format (YYYY-MM-DD).
* **Setup Time** (`setup_time`, time, required/true): Enter the start time for the setup in the correct format (HH:MM).
* **Setup Duration** (`setup_duration`, select_one, optional/optional): Choose whether the setup is 'Yes' or 'No'.
* **Setup Status** (`setup_status_prophets`, select_multiple, optional/optional): Choose whether the setup is 'Active' or 'Inactive'.
* **Customer Name** (`customer_name`, text, optional/optional): Enter the name of the customer.
* **Customer Email** (`customer_email`, email, required/true): Enter the email address of the customer.
* **Customer Phone** (`customer_phone`, text, optional/optional): Enter the phone number of the customer.
* **Company** (`customer_company`, text, optional/optional): Enter the name of the company.
* **Setup Notes** (`setup_notes`, text, optional/optional): Enter any notes for the setup.
* **Review Score** (`review_score`, select_one, required/true): Choose whether the review is 'Yes' or 'No'.
* **Review Comment** (`review_comment`, text, optional/optional): Enter any comments for the review.
* **Review Status** (`review_status`, select_one, optional/optional): Choose whether the review is 'Active' or 'Inactive'.
