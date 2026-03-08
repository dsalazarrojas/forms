# Hotel Reservation Form - Help Guide
## Purpose
This form is designed to help users book a room at a hotel by providing their guest information, selecting their preferred room(s), choosing dates and time for their stay, and specifying their payment method and details.

## How To Complete This Form
To complete this form, follow these steps:

1.  Start by filling out the **Reservation Form** page, which is the first page of the form.
2.  On the **Guest Information** page, enter your details as prompted.
3.  On the **Room Selection** page, select the rooms you wish to book from the provided options.
4.  On the **Dates and Time** page, choose your preferred dates and time for your stay.
5.  On the **Payment Method** page, select your payment method from the options provided.
6.  On the **Payment Details** page, enter any additional payment information as required.

## Field-by-Field Explanation

* **Reservation Form** (`reservation_form`, text, required: false):
    This first page is the starting point for your hotel reservation.
* **Guest Information** (`guest_info`, text, required: false):
    Enter your name and any other relevant guest information here.
* **Room Selection** (`room_selection`, select_multiple, required: false):
    Select the rooms you wish to book from the provided options.
* **Dates and Time** (`dates_and_time`, select_one, required: false):
    Choose your preferred dates and time for your stay.
* **Payment Method** (`payment_method`, select_one, required: false):
    Select how you wish to pay for your booking (e.g., credit card, cash).
* **Payment Details** (`payment_details`, text, required: false):
    Enter any additional payment information as prompted.
Note: Ensure you complete all required fields to successfully submit your form.
