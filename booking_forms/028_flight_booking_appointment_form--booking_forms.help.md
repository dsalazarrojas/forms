<thinking>
This form is designed for customers to book flights, providing essential information such as flight number, travel dates, and contact details. The form is composed of multiple fields, each with a specific purpose:

*   Flight selection: Select Flight
*   Flight number: Enter the flight number (e.g., UA 1234)
*   Customer details: Customer Name, Customer Email, Customer Phone
*   Travel dates: Travel Date and Return Date (optional)
*   Flight preferences: Flight Class
*   Payment and security: Confirm Booking, Payment Method, Card Number (optional), CVV (optional), Expiry Month, and Expiry Year (all optional)

The form is designed to be completed in a step-by-step manner, with each field requiring a specific type of input. The form is divided into several pages, and each page has a specific purpose:

*   Page 1: Select Flight (Yes/No)
*   Page 2: Enter flight number, customer details, travel dates
*   Page 3: Flight preferences and payment information

The required fields are: Flight Number, Customer Name, Customer Email, Customer Phone, Travel Date, Travel Time, and Card Number (optional).

</thinking>
# flight_booking_appointment_form - Help Guide
## Purpose
This form is designed for customers to book flights, providing essential information such as flight number, travel dates, and contact details.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the flight you wish to book on Page 1.
2.  On Page 2, enter the flight number, customer details, and travel dates.
3.  On subsequent pages, you will be asked to provide additional information, including flight preferences and payment details.

## Field-by-Field Explanation

*   **Select Flight** (`flight_booking_appointment_form`, select_one, required/optional): Choose the flight you wish to book by selecting "Yes".
*   **Flight Number** (`flight_number`, text, required): Enter the flight number (e.g., UA 1234). Please use the format specified in the hint.
*   **Customer Name** (`customer_name`, text, required): Enter the customer's name.
*   **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
*   **Customer Phone** (`customer_phone`, text, required): Enter the customer's phone number.
*   **Travel Date** (`travel_date`, date, required): Enter the date of travel.
*   **Travel Time** (`travel_time`, time, required): Enter the time of travel.
*   **Flight Class** (`flight_class`, select_one, optional): Choose the flight class you prefer.
*   **Confirm Booking** (`confirm_booking`, select_one, optional): Confirm or deny the booking.
*   **Payment Method** (`payment_method`, select_one, optional): Choose the payment method.
*   **Card Number** (`card_number`, text, optional): Enter your credit card number.
*   **CVV** (`card_cvv`, text, optional): Enter your credit card's CVV.
*   **Expiry Month** (`card_exp_month`, select_one, optional): Choose the expiry month of your credit card.
*   **Expiry Year** (`card_exp_year`, select_one, optional): Choose the expiry year of your credit card.

## Tips
*   Please ensure that you enter the correct flight number and travel dates.
*   Double-check your email address and phone number for accuracy.
*   Make sure to confirm your booking after completing all the required fields.
*   If you encounter any issues or have questions, please contact the relevant authority for assistance.
