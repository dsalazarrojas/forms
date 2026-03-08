# Dock Rental Payment Form - Help Guide
## Purpose
The Dock Rental Payment Form is used to collect payment information and details for a dock rental reservation.

## How To Complete This Form
1. Ensure you have all the required information ready, including the reservation date, unit number, and other relevant details.
2. Fill in the reservation details section, including the reservation date and unit number.
3. Select the unit type and reservation status.
4. Choose the payment method and select the payment status.
5. Fill in the payment method details and other relevant information.
6. Review and submit the form.

## Field-by-Field Explanation

* **Reservation Details** (`reservation_details`, text, optional): Enter the details of the reservation, including any relevant notes.
* **Reservation Date** (`reservation_date`, date, optional): Enter the date of the reservation in the correct date format.
* **Start Date** (`reservation_date`, date, optional): Enter the start date of the reservation in the correct date format.
* **End Date** (`reservation_date_end`, date, optional): Enter the end date of the reservation in the correct date format.
* **Unit Number** (`unit_number`, number, optional): Enter the unit number of the dock rental.
* **Unit Type** (`unit_type`, select_one, optional): Select the type of unit (Docker, Boat Lift, Slip, or Berth).
* **Reservation Status** (`reservation_status`, select_one, optional): Select the status of the reservation (New, Pending, or Confirmed).
* **Payment Status** (`payment_status`, select_one, optional): Select the payment status (Unpaid or Paid).
* **Total Cost** (`total_cost`, number, optional): Enter the total cost of the reservation.
* **Payment Method** (`payment_method`, select_one, optional): Select the payment method (Cash, Credit Card, or Bank Transfer).
* **Notes** (`notes`, note, optional): Enter any additional notes about the reservation.
* **Email** (`email`, email, optional): Enter the email of the contact person.
* **Phone** (`phone`, text, optional): Enter the phone number of the contact person.
* **Contact Person** (`contact_person`, text, optional): Enter the name of the contact person.
* **Contact Email** (`contact_email`, email, optional): Enter the email of the contact person.
* **Contact Phone** (`contact_phone`, text, optional): Enter the phone number of the contact person.
* **Order ID** (`order_id`, text, optional): Enter the ID of the reservation.
* **Customer ID** (`customer_id`, text, optional): Enter the ID of the customer.
* **Created By** (`created_by`, text, optional): Enter the name of the person who created the reservation.
* **Updated By** (`updated_by`, text, optional): Enter the name of the person who updated the reservation.
* **Created At** (`created_at`, text, optional): Enter the date and time the reservation was created.
* **Updated At** (`updated_at`, text, optional): Enter the date and time the reservation was updated.
* **Payment At** (`payment_at`, text, optional): Enter the date and time the payment was made.
* **Payment Method Details** (`payment_method_details`, text, optional): Enter any additional details about the payment method.
* **Additional Notes** (`notes`, note, optional): Enter any additional notes about the reservation.
