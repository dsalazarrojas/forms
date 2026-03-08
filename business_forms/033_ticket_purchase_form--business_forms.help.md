# Ticket Purchase Form - Help Guide
## Purpose
The Ticket Purchase Form is designed to collect necessary information from customers to process their ticket purchase orders accurately and efficiently.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required information as accurately as possible.
2. Select the appropriate payment method from the options provided.
3. Ensure that all fields are filled out correctly before submitting the form.

## Field-by-Field Explanation
* **Customer Name** (`name`, `text`, required/optional: false): This is the customer's name that will be associated with the ticket purchase.
* **Phone** (`phone`, `text`, required/optional: false): Please enter the customer's phone number for contact purposes.
* **Email** (`email`, `email`, required/optional: false): Enter the customer's email address where they can be contacted about their ticket purchase.
* **Address** (`address`, `text`, required/optional: false): Provide the customer's address for delivery purposes.
* **Terms and Conditions** (`consent`, `text`, required/optional: false): Read and accept the terms and conditions of the ticket purchase.
* **Quantity** (`quantity`, `number`, required/optional: false): Enter the number of tickets you wish to purchase.
* **Price** (`price`, `number`, required/optional: false): The price of the tickets you are purchasing.
* **Payment Method** (`payment_method`, `select_one`, required/true): Select the payment method you wish to use (Cash, Credit Card, or Bank Transfer).
	+ Note: This field is not visible on the form as it's only a display note.
