# order_cancellation_refund_form - Help Guide
## Purpose
This form is used to process order cancellations and refunds. It captures essential information for the order cancellation reason, refund details, and customer contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a valid reason for the order cancellation in the `Order Cancellation Reason` field.
2. Select the current status of the order in the `Order Status` field.
3. Enter the refund amount in the `Refund Amount` field.
4. Choose the refund method from the options provided in the `Refund Method` field.
5. Enter the customer's name in the `Customer Name` field.
6. Enter the customer's email address (if available) in the `Customer Email` field.
7. Enter the customer's phone number (if available) in the `Customer Phone` field.

## Field-by-Field Explanation
* **Order Cancellation Reason (`order_cancellation_reason`**, text, required)**: Enter a clear and concise reason for cancelling the order. This will help in understanding the cause for the cancellation.
* **Cancellation Date (`cancellation_date`**, date, optional)**: If applicable, enter the date of order cancellation. Otherwise, leave it blank.
* **Order Status (`current_order_status`**, select_one, required)**: Select the current status of the order from the options provided (cancelled, refunded, pending).
* **Cancellation Reason Details (`cancellation_reason_details`**, text, optional)**: Provide additional details about the cancellation reason, if necessary.
* **Customer Service Response (`customer_service_response`**, text, optional)**: Enter any comments or feedback from the customer service team.
* **Customer Service Response Details (`customer_service_response_details`**, text, optional)**: Enter any additional details about the customer service response.
* **Refund Amount (`refund_amount`**, number, required)**: Enter the amount to be refunded to the customer.
* **Refund Method (`refund_method`**, select_one, required)**: Choose the method for refunding the amount (bank, card, other).
* **Reason for Cancellation (`reason_for_cancellation`**, text, required)**: Enter a valid reason for cancelling the order.
* **Customer Name (`customer_name`**, text, required)**: Enter the customer's name.
* **Customer Email (`customer_email`**, email, optional)**: Enter the customer's email address (if available).
* **Customer Phone (`customer_phone`**, text, optional)**: Enter the customer's phone number (if available).
