<thinking>
This form is intended to collect information for retail window orders. It's a general-purpose form that could be used for various retail scenarios, such as sales, customer inquiries, or other similar retail transactions. Before proceeding with the help guide, I will review the form fields to ensure they are properly explained and easy to understand for end-users.

Upon reviewing the form, it appears to be designed to collect basic information about an order, including the order date and time, customer details, order notes, contact information, and shipping details. Each field is designed to provide a clear and concise way to collect this information.

The form does not appear to be designed for any specific industry or business, making it a general-purpose form for collecting retail-related information. It's possible that some fields may need to be modified or additional fields added depending on the specific use case.

</thinking>
# retail_window_lightbox_order_form - Help Guide
## Purpose
This form is designed to collect information for retail orders, providing a general-purpose solution for various retail scenarios.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the order date and time in the format `MM/DD/YYYY HH:MM AM/PM` in the **Order Date** field.
2. Enter the customer information in the **Customer Info** field. This field is for any relevant customer details.
3. If you have any additional notes, enter them in the **Order Notes** field.
4. Select the contact's name in the **Contact Name** field.
5. Enter the contact's email address in the **Contact Email** field.
6. Enter the contact's phone number in the **Contact Phone** field.
7. Select the order type from the **Order Type** dropdown list.
8. Select the payment method from the **Payment Method** dropdown list.
9. Enter the shipping address in the **Shipping Address** field.
10. Enter the shipping city in the **Shipping City** field.
11. Enter the shipping state in the **Shipping State** field.
12. Enter the shipping zip code in the **Shipping Zip** field.
13. Enter the shipping country in the **Shipping Country** field.
14. If you have any additional comments, enter them in the **Order Comments** field.

## Field-by-Field Explanation

* **Order Date** (`order_date`, date, required: false): Enter the date of the order in the format `MM/DD/YYYY`.
* **Order Time** (`order_time`, time, required: false): Enter the time of the order in the 12-hour clock format (e.g., 08:00 AM).
* **Customer Info** (`customer_info`, text, required: false): Enter any relevant customer information.
* **Order Notes** (`order_notes`, note, required: false): Enter any additional notes about the order.
* **Contact Name** (`contact_name`, text, required: false): Enter the name of the person who placed the order.
* **Contact Email** (`contact_email`, email, required: false): Enter the email address of the contact person.
* **Contact Phone** (`contact_phone`, text, required: false): Enter the phone number of the contact person.
* **Order Type** (`order_type`, select_one, required: false): Select the type of order from the provided options (e.g., `typeA`, `typeB`, `typeC`).
* **Payment Method** (`payment_method`, select_one, required: false): Select the payment method from the provided options (e.g., `credit`, `cash`, `other`).
* **Shipping Address** (`shipping_address`, text, required: false): Enter the shipping address of the order.
* **Shipping City** (`shipping_city`, text, required: false): Enter the city of the shipping address.
* **Shipping State** (`shipping_state`, text, required: false): Enter the state of the shipping address.
* **Shipping Zip** (`shipping_zip`, text, required: false): Enter the zip code of the shipping address.
* **Shipping Country** (`shipping_country`, text, required: false): Enter the country of the shipping address.
* **Order Comments** (`order_comments`, text, required: false): Enter any additional comments about the order.
