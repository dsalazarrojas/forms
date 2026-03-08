# Jacket Order Form - Help Guide
## Purpose
The Jacket Order Form is a tool for customers or sales staff to create, view, and manage jacket orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's email address in the `customer_email` field.
2. Select the payment method used for the order in the `payment_method` field.
3. Choose the design style of the jacket in the `jacket_minimalist_design` field.
4. Enter the total cost of the order in the `order_total` field.
5. If using an additional payment method, enter the details in the `payment_method_other` and `payment_method_other_notes` fields.
6. Enter the date and time the order was placed in the `order_date` and `order_time` fields.
7. Add any additional notes about the order in the `order_notes` field.
8. Enter the customer's name in the `customer_name` field.
9. Enter the order number for reference in the `order_number` field.
10. Enter the customer's phone number in the `customer_phone` fields.
11. Select the status of the order in the `order_status` field.
12. Choose the size of the jacket in the `jacket_size` field.
13. Select the type of order in the `order_type` field.
14. If needed, enter an additional type of order in the `order_type_other` and `order_type_other_notes` fields.
15. Enter the customer's address in the `customer_address1` and `customer_address2` fields.
16. Select the customer's city in the `customer_city` field.
17. Select the customer's country in the `customer_country` field.
18. Enter the customer's zip code in the `customer_zip` field.
19. Select the customer's state or province in the `customer_state` field.
20. Select the customer's province in the `customer_province` field (only for Canadian customers).
21. Enter any additional notes about the customer in the `customer_notes` field.
22. Add any additional comments about the order in the `customer_comments` field.

## Field-by-Field Explanation

* **customer_email** (`customer_email`, email, required/optional): Enter the customer's email address.
* **payment_method** (`payment_method`, select_one, required/optional): Select the payment method used for the order (e.g., credit card, PayPal).
* **jacket_minimalist_design** (`jacket_minimalist_design`, select_multiple, required/optional): Choose the design style of the jacket (e.g., minimal, artistic).
* **order_total** (`order_total`, number, required/optional): Enter the total cost of the order.
* **payment_method_other** (`payment_method_other`, text, required/optional): Enter an additional payment method used for the order (e.g., cash).
* **payment_method_other_notes** (`payment_method_other_notes`, text, required/optional): Enter notes about the additional payment method.
* **order_date** (`order_date`, date, required/optional): Enter the date the order was placed.
* **order_time** (`order_time`, time, required/optional): Enter the time the order was placed.
* **order_notes** (`order_notes`, note, required/optional): Enter any additional notes about the order.
* **customer_name** (`customer_name`, text, required/optional): Enter the customer's name.
* **order_number** (`order_number`, number, required/optional): Enter the order number for reference.
* **customer_phone** (`customer_phone`, text, required/optional): Enter the customer's phone number.
* **order_status** (`order_status`, select_one, required/optional): Select the status of the order (e.g., pending, shipped).
* **jacket_size** (`jacket_size`, select_one, required/optional): Choose the size of the jacket ordered.
* **order_type** (`order_type`, select_one, required/optional): Select the type of order (e.g., custom, standard).
* **order_type_other** (`order_type_other`, text, required/optional): Enter an additional type of order (e.g., rush).
* **order_type_other_notes** (`order_type_other_notes`, text, required/optional): Enter notes about the additional order type.
* **customer_address1** (`customer_address1`, text, required/optional): Enter the customer's address line 1.
* **customer_address2** (`customer_address2`, text, required/optional): Enter the customer's address line 2.
* **customer_city** (`customer_city`, select_one, required/optional): Select the customer's city.
* **customer_country** (`customer_country`, select_one, required/optional): Select the customer's country.
* **customer_zip** (`customer_zip`, number, required/optional): Enter the customer's zip code.
* **customer_state** (`customer_state`, select_one, required/optional): Select the customer's state or province.
* **customer_province** (`customer_province`, select_one, required/optional): Select the customer's province (only for Canadian customers).
* **customer_notes** (`customer_notes`, note, required/optional): Enter any additional notes about the customer.
* **customer_comments** (`customer_comments`, text, required/optional): Enter any additional comments about the order.

## Tips

* Make sure to enter accurate information to ensure the order is processed correctly.
* Double-check the fields before submitting the form.
* If you're unsure about any field, contact your sales staff for assistance.
