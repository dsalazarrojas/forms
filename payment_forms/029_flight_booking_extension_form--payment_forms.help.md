<thinking>
The Flight Booking Extension Form is used for booking flights and handling related payment and shipping information. It is not a duplicate of the main flight booking form, but rather an extension of the existing process. Please ensure you have completed the main flight booking form before proceeding with this form. This form is typically used for customers who require special handling of their flight booking, such as extra payment details or shipping information. It is recommended to review the main flight booking form for a comprehensive overview of the flight booking process.
</thinking>

# Flight Booking Extension Form - Help Guide
## Purpose
The Flight Booking Extension Form is used to gather additional information for customers who require special handling of their flight booking, including extra payment details or shipping information.

## How To Complete This Form
To complete this form, please follow these steps:

1. Ensure you have completed the main flight booking form before proceeding with this form.
2. Fill in your customer details, including name, email, and phone number.
3. Enter flight details, such as flight number.
4. Provide payment details, including payment type (VISA, MASTERCARD, AMEX), credit card number, expiration date, and CVV.
5. Enter shipping details, including shipping name, email, phone number, and country.
6. Review your submission and select "Submit and Continue" to complete the form.

## Field-by-Field Explanation
### Customer Details
* **Customer Name** (`customer_name`, text, required/optional): Enter the customer's name.
* **Email** (`customer_email`, email, required/optional): Enter the customer's email address.
* **Phone** (`customer_phone`, text, required/optional): Enter the customer's phone number.

### Flight Details
* **Flight Number** (`flight_number`, text, required/optional): Enter the flight number.

### Payment Details
* **Payment Type** (`payment_type`, select_one, required/optional): Select the payment type (VISA, MASTERCARD, AMEX).
* **Credit Card** (`credit_card_details`, text, required/optional): Enter the credit card details.
* **Type** (`credit_card_type`, select_one, required/optional): Select the credit card type (VISA, MASTERCARD, AMEX).
* **Number** (`credit_card_number`, text, required/optional): Enter the credit card number.
* **Expiration** (`credit_card_expire`, select_multiple, required/optional): Select the credit card expiration date.
* **CVV** (`credit_card_cvv`, text, required/optional): Enter the credit card CVV.
* **Billing Address** (`billing_details`, text, required/optional): Enter the billing address details.
* **Street** (`billing_street`, text, required/optional): Enter the street address.
* **City** (`billing_city`, text, required/optional): Enter the city.
* **State** (`billing_state`, text, required/optional): Enter the state.
* **Country** (`billing_country`, text, required/optional): Enter the country.

### Shipping Details
* **Shipping Name** (`shipping_name`, text, required/optional): Enter the shipping name.
* **Shipping Email** (`shipping_email`, email, required/optional): Enter the shipping email address.
* **Shipping Phone** (`shipping_phone`, text, required/optional): Enter the shipping phone number.
* **Shipping Country** (`shipping_country`, text, required/optional): Enter the shipping country.

### Submission
* **Submit** (`submit`, select_multiple, required/optional): Select "Submit and Continue" to complete the form.
