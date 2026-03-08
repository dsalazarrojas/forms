# demo_square_payment - Help Guide
## Purpose
The "demo_square_payment" form is used for customers to place new orders and make payments. It gathers essential information such as customer details, order specifics, and payment method.

## How To Complete This Form
To complete the form, follow these steps:

1. Click on the "Order Form" page to begin the submission process.
2. Fill in the required information for the customer, including the "Customer Name" and "Customer Email" fields.
3. Enter the "Order Date" of the order in the format `YYYY-MM-DD`.
4. Enter the "Total" amount for the order.
5. Select the preferred "Payment Method" from the options provided (Credit Card, PayPal, or Bank Transfer).
6. Enter the "Payment Amount" for the selected payment method.
7. If necessary, add any "Order Notes" for the customer.

## Field-by-Field Explanation
- **Order Form** (`order_form`, page, required/optional): This is the first page of the form where you will start the submission process. Fill in the required information for the customer.
  - **Customer Name** (`customer_name`, text, required): Enter the customer's name.
  - **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
  - **Order Date** (`order_date`, date, optional): Enter the order date in the format `YYYY-MM-DD`.
  - **Total** (`total`, number, optional): Enter the total amount of the order.
  - **Payment Method** (`payment_method`, select_one, optional): Select the preferred payment method from the options provided.
  - **Payment Amount** (`payment_amount`, number, optional): Enter the amount to be paid for the selected payment method.
  - **Order Notes** (`order_notes`, note, optional): Add any additional notes for the order.

## Tips
- Double-check all fields for accuracy before submission.
- Ensure that the customer's name and email are correctly formatted.
- Use the correct format for the "Order Date" field.
