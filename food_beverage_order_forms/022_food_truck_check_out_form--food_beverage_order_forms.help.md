# food_truck_check_out_form - Help Guide
## Purpose
This form is designed to collect customer information and order details for food trucks. It's intended to be used for checkout purposes, ensuring customers can easily provide their data and payment information.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the customer details on page 1.
2. On page 2, select the food and beverages you'd like to order from the list.
3. On page 3, provide your payment information.
4. On page 4, calculate or fill in the total cost of your order.
5. On page 5, add any event details if applicable.
6. Optionally, add a note if you'd like to make any additional comments.
7. Enter your email address for communication purposes.
8. Enter your phone number for contact.
9. If applicable, select an assigned tool for the order.
10. Finally, provide a name for the output file.

## Field-by-Field Explanation

* **Customer Details** (`customer_details`, text, required/optional): This field is used to capture the customer's name, address, and other essential contact information.
* **Select Food and Beverages** (`order_items`, select_multiple, required/optional): Choose the food and beverages you'd like to order from the available options:
	+ Hamburger
	+ Fries
	+ Soda
	+ Salad
* **Payment Info** (`payment_info`, text, required/optional): Enter your payment method and relevant card details, if applicable.
* **Total Cost** (`total_cost`, number, required/optional): Fill in the total cost of your order or calculate it using the provided options.
* **Event Details** (`event_details`, text, required/optional): If you're placing an order for an event, provide the relevant event details here.
* **Note** (`note`, note, required/optional): Add any additional comments or notes related to your order, if needed.
* **Email** (`email`, email, required/optional): Enter your email address for communication purposes, so we can keep in touch with you about your order.
* **Phone** (`phone`, text, required/optional): Enter your phone number for contact purposes, in case we need to reach out to you about your order.
* **Assigned Tool** (`assigned_tool`, text, required/optional): If applicable, select the assigned tool for your order, if one has been assigned.
* **Output File Name** (`output_file_name`, text, required/optional): Provide a name for the output file, so we can save and share it with you.

# Tips
* Please ensure you provide accurate information for each field to avoid any confusion or issues with your order.
* Review each page carefully before submitting to ensure all required fields are filled out.
* If you have any questions or concerns about your order, don't hesitate to contact us!
