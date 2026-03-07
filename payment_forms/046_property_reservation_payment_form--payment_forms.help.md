<thinking>
The form purpose is to process payments for property reservations. This form should only be used for payments that are not already processed or paid through other means, ensuring accuracy and efficiency in financial transactions. 
Please verify that this form does not overlap with other payment forms or reservation processes before using it.
</thinking>

# Property Reservation Payment Form - Help Guide
## Purpose
The Property Reservation Payment Form is used to process payments for property reservations. It ensures that payments are accurately and efficiently recorded and reported.

## How To Complete This Form
1. Fill out the form with the required information. The form has two pages: "Payment Form" and "Reservation Details". Please answer each page's questions in the corresponding section.
2. On the "Payment Form" page:
   - Select the payment method from the dropdown list.
   - Enter the payment amount in the format required for the selected method.
   - Choose the date and time of the payment.
   - Add any additional notes about the payment.
3. On the "Reservation Details" page:
   - Enter the reservation ID, which is a unique identifier for the reservation.
4. Review your information for accuracy before submitting the form.

## Field-by-Field Explanation
- **Payment Method** (`payment_method`, select_one, required): Select the method of payment, such as "card," "cash," "paypal," or "paypals."
  - Please choose one of the available payment methods to proceed.
- **Payment Amount** (`payment_amount`, number, required): Enter the amount of payment, formatted as a number (e.g., "123.45").
  - Enter the exact amount to be paid.
- **Payment Date** (`payment_date`, date, required): Select the date of payment.
  - Choose the date on which the payment was made.
- **Payment Time** (`payment_time`, time, required): Select the time of payment.
  - Choose the time of day for the payment.
- **Note** (`note`, note, optional): Add any additional notes about the payment.
  - Enter any relevant comments or observations about the payment.
- **Payment Status** (`payment_status`, select_multiple, optional): Choose the status of the payment (pending, completed, or cancelled).
  - Select all applicable statuses to update the payment status.
- **Reservation ID** (`reservation_id`, number, optional): Enter the reservation ID for the property reservation.
  - Enter the unique ID for the reservation.
- **Guest Email** (`guest_email`, email, optional): Enter the guest's email address.
  - Enter the guest's email address.
- **Reservation Details** (`reservation_details`, text, optional): Enter any additional details about the reservation.
  - Enter any information about the reservation that may be helpful for payment processing.
