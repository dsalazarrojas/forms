<thinking>

To create a comprehensive help guide for the "Trading Cards Pre Order Form", I'll first consider its purpose and required fields. The form, as evident from its title, is designed for customers to provide information for a preorder of trading cards. This form is likely used for customers to specify their shipping information, preferred payment method, and details about the items they want to preorder. 

Given the form structure, it appears that customers can select multiple payment methods and specify the quantity of preordered items. This guide will explain the form fields in detail to ensure users understand what's required from them.

</thinking>

# Trading Cards Pre Order Form - Help Guide
## Purpose
The Trading Cards Pre Order Form is designed for customers to specify their shipping information, payment preferences, and details about the items they want to preorder. This form helps the business process these preorders efficiently and accurately.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the customer information fields, including First Name, Last Name, and shipping address.
2. Select your preferred payment method(s) from the Payment Method dropdown.
3. Specify the items you want to preorder and their corresponding quantities.
4. Confirm your shipping city and state.
5. Enter your shipping postal code.

## Field-by-Field Explanation

* **Customer Information** (`Customer Information`, `text`, required: false): This section is where you'll enter your personal details, including your first and last name.
* **First Name** (`customer_first_name`, `text`, required: false): Enter your first name here.
* **Last Name** (`customer_last_name`, `text`, required: false): Enter your last name here.
* **Shipping Address** (`shipping_address`, `text`, required: false): Provide your shipping address for accurate delivery.
* **City** (`shipping_city`, `text`, required: false): Enter the city for your shipping address.
* **State** (`shipping_state`, `select_one`, required: false): Select your state from the dropdown for correct shipping calculations.
* **Postal Code** (`shipping_postal_code`, `text`, required: false): Enter your postal code for shipping.
* **Payment Method** (`payment_method`, `select_multiple`, required: false): Choose your preferred payment method, such as credit card or bank draft.
* **Preorder Items** (`preorder_items`, `text`, required: false): Specify the items you want to preorder, including descriptions.
* **Quantity** (`preorder_quantity`, `number`, required: false): Enter the quantity of each item you want to preorder.
* **Preorder Item 2** (`preorder_item_2`, `text`, required: false): For customers with multiple preorder items, enter details for the second item here.
