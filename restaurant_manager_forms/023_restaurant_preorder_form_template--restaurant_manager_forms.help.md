<thinking>
This form is designed to capture customer details, order information, and status updates for restaurant preorders. It is meant to be filled out by restaurant staff to efficiently manage preordered meals. The form is composed of multiple fields that include customer contact information, address, order total, and order status among other information.
</thinking>

# restaurant_preorder_form_template - Help Guide
## Purpose
This form is designed to help restaurant staff capture and manage customer information, order details, and status updates for preordered meals.

## How To Complete This Form
1. Fill in the customer's details, including their name and contact information.
2. Enter the customer's address.
3. Enter the order details, including order total.
4. Select the order status and status options as required.
5. Add any additional notes about the order.
6. Enter the customer's email address.
7. Enter the phone number of the customer.
8. Select the date and time of the order.
9. Select the date and time of the order.
10. The form does not require any additional fields to be filled out, but filling out all fields will ensure that the information is captured accurately and completely.

## Field-by-Field Explanation
* **Customer Details** (`customer_details`, `text`, required: false): Enter the customer's name and any other relevant details.
* **Address** (`address`, `text`, required: false): Enter the customer's address.
* **Order Details** (`order_details`, `text`, required: false): Enter any additional information about the order.
* **Order Total** (`order_total`, `number`, required: false): Enter the total cost of the order.
* **Order Status** (`order_status`, `select_one`, required: false): Select the status of the order, such as Active or Inactive.
* **Order Status Options** (`order_status_options`, `select_multiple`, required: false): Select any additional status options for the order.
* **Order Notes** (`order_notes`, `note`, required: false): Add any additional notes about the order.
* **Email** (`email`, `email`, required: false): Enter the customer's email address.
* **Phone** (`phone`, `text`, required: false): Enter the customer's phone number.
* **Date** (`date`, `date`, required: false): Select the date of the order.
* **Time** (`time`, `time`, required: false): Select the time of the order.
* **Date Time** (`date_time`, `date`, required: false): Select the date and time of the order.
