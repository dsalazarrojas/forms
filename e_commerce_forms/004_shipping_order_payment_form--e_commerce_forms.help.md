<thinking>
This form is intended to collect information for shipping order payments, ensuring that the user can enter details about their order, including the delivery date, time, address, payment method, and customer information.
To complete this form, follow these steps:

1. Enter the delivery details on the first page. This is not a required field but entering your delivery details can assist the shipping provider with processing your order efficiently.
2. Select a date for delivery on the second page. This is also not required but helps the shipping provider schedule the delivery accordingly.
3. Choose the time for delivery on the third page. Similar to delivery details and date, this is not required but aids the shipping provider in planning the delivery.
4. Provide the delivery address on the page 4. Like the others, this field is not required but facilitates the shipping process.
5. Select the payment method on the 5th page. Choose between options such as Cash on Delivery, Credit Card, and PayPal.
6. Enter the customer's name on page 6. This is not a required field but helps in addressing the customer.
7. Enter the customer's email on page 7. Although not required, a valid email helps in keeping the customer updated on shipping status and any further communications.
8. Enter the customer's phone number on page 8. Similar to the email, it is also not required but aids in communication and any further updates on the delivery status.

# shipping_order_payment_form - Help Guide
## Purpose
The shipping order payment form is designed to facilitate the efficient processing of shipping orders. It gathers information for the shipping provider to ensure correct delivery details and payment methods. This includes details that are helpful for the delivery process but are not all required.

## How To Complete This Form
- Complete the delivery details, if available, to help with the delivery process.
- Select a delivery date for the shipping provider to schedule the delivery.
- Choose the delivery time to aid the shipping provider in planning the delivery.
- Enter your delivery address for the shipping provider to process the order efficiently.
- Select a payment method from the available options.
- Enter your name for customer address.
- Enter your email address for updates and further communications.
- Enter your phone number for easier contact and updates.

## Field-by-Field Explanation
- **delivery_details** (`delivery_details`, text, not required): Enter details about your delivery, if you wish to provide specific information to the shipping provider.
- **delivery_date** (`delivery_date`, date, not required): Select a date for your delivery to assist the shipping provider with scheduling.
- **delivery_time** (`delivery_time`, time, not required): Choose the time of your delivery to help the shipping provider with planning.
- **delivery_address** (`delivery_address`, text, not required): Enter your delivery address to enable the shipping provider to process the order correctly.
- **payment_method** (`payment_method`, select_one, required): Select how you wish to make the payment: Cash on Delivery, Credit Card, or PayPal.
- **customer_name** (`customer_name`, text, not required): Enter your name to help identify you as the customer.
- **customer_email** (`customer_email`, email, not required): Provide your email address for updates on the delivery status and any further communications.
- **customer_phone** (`customer_phone`, text, not required): Enter your phone number for easier contact and updates on the delivery status.
