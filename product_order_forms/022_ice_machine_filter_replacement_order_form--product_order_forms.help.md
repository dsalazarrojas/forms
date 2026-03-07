<thinking>
This form is designed to collect information from users for the purpose of ordering ice machine filters. The form will likely be used by customers or internal staff to place orders for replacement filters for ice machines.
To avoid duplication of effort, it's assumed that the form will be used in a controlled environment, such as a customer support portal or a dedicated ordering system. This guide will cover the expected usage flow and field explanations to ensure that users understand how to complete the form correctly.
</thinking>

# Ice Machine Filter Replacement Order Form - Help Guide
## Purpose
This form is used to order replacement filters for ice machines. Please fill out the required fields to place your order.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of ice machine that needs a filter replacement.
2. Choose the type of filter required.
3. Enter the quantity of filters needed.
4. Enter your shipping address.
5. Add any order notes or comments.
6. Enter your email address.
7. Enter your phone number.
8. Enter the machine ID (if known).
9. Enter the filter ID (if known).
10. Choose whether to submit or cancel the order.

## Field-by-Field Explanation
### <u>Ice Machine Type</u>
(ice_machine_type, select, required: false)
Select the type of ice machine that needs a filter replacement. Choose from the options:
* Ice Machine 1
* Ice Machine 2
* Ice Machine 3

### <u>Filter Type</u>
(filter_type, select, required: false)
Select the type of filter required for the ice machine. Choose from the options:
* Ice Filter 1
* Ice Filter 2
* Ice Filter 3

### <u>Quantity</u>
(quantity, number, required: false)
Enter the number of filters needed.

### <u>Shipping Address</u>
(shipping_address, text, required: false)
Enter your shipping address where the filter will be delivered. This can include your street address, city, state, and zip code.

### <u>Order Notes</u>
(order_notes, note, required: false)
Add any additional notes or comments about your order, such as any special instructions or preferences.

### <u>Email</u>
(email, email, required: false)
Enter your email address where you can be reached for communication about your order.

### <u>Phone</u>
(phone, text, required: false)
Enter your phone number where you can be reached for any further communication about your order.

### <u>Machine ID</u>
(machine_id, number, required: false)
Enter the ID of the machine that needs a filter replacement (if known).

### <u>Filter ID</u>
(filter_id, number, required: false)
Enter the ID of the filter to be replaced (if known).

### <u>Submit or Cancel</u>
(submit_button, select, required: false)
Choose to submit your order or cancel it if you need to make any changes. Choose from:
* Submit
* Cancel
