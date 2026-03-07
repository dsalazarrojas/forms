<thinking>
The purpose of the "craft_supplies_order_form" is to gather information from customers about their craft supplies orders, including customer details, order items, shipping information, order date, payment method, payment details, customer notes, and order total. This form is likely used in a retail or online setting where customers need to place orders for craft supplies. The form appears to be optional, which suggests that customers may not be required to complete every field. The fields seem to be focused on order details rather than customer identification or contact information. However, it would be good to confirm this interpretation with a subject matter expert or business stakeholder.
</thinking>

# craft_supplies_order_form - Help Guide
## Purpose
The "craft_supplies_order_form" is a form used to gather information from customers about their craft supplies orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the `customer_info` field with the customer's name, address, and any other relevant information.
2. Select the `order_items` field to specify the craft supplies items ordered, with options 'Yes' or 'No'.
3. Leave the `shipping_info` field as a note field for any additional shipping instructions or remarks.
4. Enter the `order_date` in the format of a date (e.g., MM/DD/YYYY).
5. Choose a payment method from the `payment_method` field, with options 'Yes' or 'No'.
6. Fill in the `payment_info` field with any additional payment details or remarks.
7. Enter any customer notes in the `customer_notes` field.
8. Enter the total cost of the order in the `order_total` field.

## Field-by-Field Explanation
* **customer_info** (`customer_info`, text, required/optional): Enter the customer's name, address, and any other relevant information.
* **order_items** (`order_items`, select_multiple, required/optional): Select the craft supplies items ordered, with options 'Yes' or 'No'.
* **shipping_info** (`shipping_info`, note, required/optional): Leave as a note field for any additional shipping instructions or remarks.
* **order_date** (`order_date`, date, required/optional): Enter the date of the order in the format of MM/DD/YYYY.
* **payment_method** (`payment_method`, select_one, required/optional): Choose a payment method, with options 'Yes' or 'No'.
* **payment_info** (`payment_info`, text, required/optional): Fill in any additional payment details or remarks.
* **customer_notes** (`customer_notes`, text, required/optional): Enter any customer notes or comments.
* **order_total** (`order_total`, number, required/optional): Enter the total cost of the order.
