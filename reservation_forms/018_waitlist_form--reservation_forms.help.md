# Waitlist Form - Help Guide
## Purpose
The Waitlist Form is used to manage reservations or waitlist positions. It gathers information from customers or clients about their reservation time, date, contact details, and other relevant data.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the reservation time in the correct format (HH:MM AM/PM).
2. Select the reservation date from the calendar or enter it manually.
3. Provide your name and contact information (phone, email, address, etc.).
4. Indicate the method of reservation (e.g., reservation, cancellation).
5. If applicable, provide a reason for cancellation.
6. Enter any additional customer information (ID, notes, etc.).
7. Select the status of the reservation (e.g., active, closed, waitlisted).
8. Set the priority of the reservation.
9. Leave any additional comments or notes about the customer.

## Field-by-Field Explanation
* **Reservation Time** (`reservation_time`, `time`, required/optional): Enter the time of the reservation.
* **Date** (`reservation_date`, `date`, required/optional): Select or enter the date of the reservation.
* **Name** (`name`, `text`, required/optional): Enter your name.
* **Phone** (`phone`, `text`, required/optional): Enter your phone number.
* **Method** (`reservation_method`, `select_one`, required/optional): Select the method of reservation (e.g., reservation, cancellation).
* **Reason for Cancellation** (`reason_for_cancellation`, `select_multiple`, required/optional): If applicable, select the reason for cancellation.
* **Customer ID** (`customer_id`, `number`, required/optional): Enter the customer's ID.
* **Status** (`reservation_status`, `select_one`, required/optional): Select the status of the reservation (e.g., active, closed, waitlisted).
* **Priority** (`priority`, `number`, required/optional): Set the priority of the reservation.
* **Comments** (`comments`, `note`, required/optional): Leave any additional comments or notes about the customer.
* **Email** (`email`, `email`, required/optional): Enter the customer's email.
* **Customer** (`customer_name`, `text`, required/optional): Enter the customer's name.
* **Customer Phone** (`customer_phone`, `text`, required/optional): Enter the customer's phone number.
* **Customer Email** (`customer_email`, `email`, required/optional): Enter the customer's email.
* **Address** (`customer_address`, `text`, required/optional): Enter the customer's address.
* **Address 2** (`customer_address_2`, `text`, required/optional): Enter the customer's secondary address.
* **City** (`customer_city`, `text`, required/optional): Enter the customer's city.
* **State** (`customer_state`, `text`, required/optional): Enter the customer's state.
* **Zip** (`customer_zip`, `number`, required/optional): Enter the customer's zip code.
* **Country** (`customer_country`, `text`, required/optional): Enter the customer's country.
* **Notes** (`customer_notes`, `note`, required/optional): Leave any additional notes about the customer.
* **Customer Id 2** (`customer_id_2`, `number`, required/optional): Enter the customer's secondary ID.
* **Status Update** (`status_update`, `select_one`, required/optional): Select if the status has been updated.
* **Updated By** (`updated_by`, `select_one`, required/optional): Select who updated the status.
* **Updated Date** (`updated_date`, `date`, required/optional): Select or enter the date of the status update.
