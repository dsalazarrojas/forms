# Restaurant Takeout Order Form - Help Guide
## Purpose
This form is used to gather information about restaurant takeout orders, including payment method, customer details, order date and time, order details, and order total.

## How To Complete This Form
To complete this form, follow these steps:
1. Determine the payment method for the order.
2. Enter the customer's name and contact number.
3. Select the order date and time.
4. Provide the order details in the text field.
5. Enter the order total.
6. Choose the payment status (Active or Inactive).

## Field-by-Field Explanation

* **Payment Method** (`payment_method`, select_one, required: false): Choose how the customer will be paying for their order, such as by credit card, cash, or other payment methods.
* **Customer Name** (`customer_name`, text, required: false): Enter the name of the customer placing the order.
* **Contact Number** (`contact_number`, text, required: false): Enter the customer's contact number, if applicable.
* **Order Date** (`order_date`, date, required: false): Select the date of the order.
* **Order Time** (`order_time`, time, required: false): Select the time of the order.
* **Order Details** (`order_details`, text, required: false): Enter any additional information about the order, such as special requests or modifications.
* **Order Total** (`order_total`, number, required: false): Enter the total cost of the order.
* **Payment Status** (`payment_status`, select_one, required: false): Choose whether the payment is Active or Inactive.

## Tips
* Make sure to select the correct payment method and payment status for each order.
* Double-check the customer's name and contact number for accuracy.
* Be as detailed as possible when providing order details to ensure that the order is processed correctly.
* Enter the correct order total to avoid errors in processing the payment.
* Review the form carefully before submitting to ensure all required fields are filled out and accurate.
