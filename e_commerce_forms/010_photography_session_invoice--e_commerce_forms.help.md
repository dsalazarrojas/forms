# photography-session-invoice - Help Guide
## Purpose
This form is used to create an invoice for a photography session, capturing customer, session, and payment information.

## How To Complete This Form

1.  To fill out this form, select the "Customer Name", input the customer's name.
2.  Enter the date of the photography session under "prophets", or "Session Date". This is when the session took place.
3.  Enter the start and end times of the session under "start-time" and "end-time" respectively.
4.  Specify the session duration (in minutes) under "session-duration".
5.  Enter the name of the photographer under "photographer-name".
6.  Enter the invoice date under "invoice-date".
7.  Enter the total cost under "total-cost".
8.  Select the payment method(s) used under "payment-methods".
9.  Enter any additional notes about the session under "notes".
10. Enter the customer's email under "email".
11. Enter the customer's phone number under "phone".
12. Select whether to send an email to the customer with the invoice or not under "Send Email".

## Field-by-Field Explanation

* **Customer Name** (`Customer Name`, text, required: false): Enter the customer's name as it should be displayed on the invoice.
* **prophets** (`date`, required: false): Enter the date of the photography session in the format "MM/DD/YYYY".
* **start-time** (`time`, required: false): Enter the start time of the session in 24-hour format (e.g., 14:00).
* **end-time** (`time`, required: false): Enter the end time of the session in 24-hour format (e.g., 15:00).
* **session-duration** (`number`, required: false): Specify the duration of the session in minutes.
* **photographer-name** (`text`, required: false): Enter the photographer's name who conducted the session.
* **invoice-date** (`date`, required: false): Enter the date the invoice is being generated.
* **total-cost** (`number`, required: false): Enter the total cost of the session.
* **payment-methods** (`select_multiple`, required: false): Select the payment method(s) used (Visa, Mastercard, PayPal).
* **notes** (`note`, required: false): Add any additional notes about the session.
* **email** (`email`, required: false): Enter the customer's email address.
* **phone** (`text`, required: false): Enter the customer's phone number.
* **Send Email** (`select_one`, required: false): Select whether to send the invoice to the customer via email or not.

## Tips

* Please ensure all fields are filled out accurately for proper invoice generation.
* If you're sending the invoice via email, make sure the customer's email address is correct.
* Use a 24-hour time format for session start and end times.
