# Virtual Tour Booking Form - Help Guide
## Purpose
This form is designed to collect information from customers to book a virtual tour. It is used to gather details necessary for the booking process.

## How To Complete This Form
To complete this form, please follow these steps:

* Fill in the required fields marked as required (e.g. Customer Name, Customer Email, Booking Price, etc.)
* Select the tour date and time that suits your needs
* Choose the payment method and payment terms that apply to your booking
* Fill in the tour description and any other relevant details
* Make sure to review and agree to the tour terms and customer terms

## Field-by-Field Explanation

* **Tour Name** (`tour_name`, text, required): Enter the name of the virtual tour you wish to book.
* **Customer Name** (`customer_name`, text, required): Enter your name as the customer.
* **Customer Email** (`customer_email`, email, required): Enter your email address for communication purposes.
* **Customer Phone** (`customer_phone`, text, required): Enter your phone number for communication purposes.
* **Tour Date** (`tour_date`, date, required): Select a date for the virtual tour.
* **Tour Time** (`tour_time`, time, required): Select a time for the virtual tour.
* **Tour Start Time** (`tour_start_time`, time, optional): Optional start time for the virtual tour (if needed).
* **Tour End Time** (`tour_end_time`, time, optional): Optional end time for the virtual tour (if needed).
* **Tour Provider Name** (`tour_provider_name`, text, optional): Enter the name of the tour provider (if applicable).
* **Tour Provider Email** (`tour_provider_email`, email, optional): Enter the email of the tour provider (if applicable).
* **Tour Provider Phone** (`tour_provider_phone`, text, optional): Enter the phone number of the tour provider (if applicable).
* **Booking Price** (`booking_price`, number, required): Enter the price of the booking.
* **Payment Method** (`payment_method`, select_one, optional): Choose the payment method you prefer (Yes or No).
* **Payment Terms** (`payment_terms`, text, optional): Enter any payment terms or conditions.
* **Tour Description** (`tour_description`, text, optional): Enter a brief description of the tour.
* **Tour Terms** (`tour_terms`, text, optional): Enter any tour-specific terms or conditions.
* **Customer Terms** (`customer_terms`, text, optional): Enter any customer terms or conditions.
* **Payment Confirmation** (`payment_confirmation`, select_multiple, optional): Confirm the payment method and terms (Yes or No).

Note: Please ensure all required fields are filled in accurately and completely to ensure a smooth booking process.
