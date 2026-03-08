<thinking>

To create the perfect guide for the user-facing help document, I will need to consider a few things:

- Understand the form's purpose, which is to gather information for vegetable orders.
- Identify any dependencies or relationships between fields.
- Be concise and clear in explaining each field.

</thinking>

# vegetables_order_form - Help Guide
## Purpose
The `vegetables_order_form` is used to place orders for vegetables. This form is intended for end-users to provide their order details, contact information, and delivery preferences.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the **Order Details** section with any relevant information about your order.
2. Provide your **Contact Information** in the next section, including your name, phone number, and email address.
3. In the **Select Products** section, choose the vegetables you wish to purchase from the available options.
4. If necessary, enter the quantity of each selected vegetable.
5. Calculate the **Unit Price** for each selected vegetable (though this field is currently not visible in the current form schema).
6. The **Total Price** field will be populated based on your selected products and unit prices.
7. Enter any additional contact information in the **Contact Info** fields, such as your name, phone number, and email address.
8. Finally, enter your delivery zip code.

## Field-by-Field Explanation
* **Order Details** (`title`, text, optional): This section is for you to provide any additional details about your order.
* **Contact Info** (`contact_info`, text, optional): Enter your name, phone number, or email address to contact you.
* **Delivery Info** (`delivery_info`, text, optional): Enter any delivery instructions or special requests.
* **Select Products** (`products`, select_multiple, optional): Choose one or more vegetables from the available options to add to your order.
	+ Red Tomato
	+ Green Leaf
	+ Yellow Pepper
	+ Mixed Greens
	+ Broccoli
	+ Mixed Salad
	+ Carrot
	+ Mixed Berries
	+ Cauliflower
	+ Mixed Herbs
	+ Green Beans
	+ Yellow Tomato
	+ Beetroot
	+ Cucumber
	+ Lettuce
	+ Mixed Peas
	+ Onion
	+ Mixed Tomatoes
* **Quantity** (`quantity`, number, optional): Enter the quantity of each selected vegetable. Note: This field is optional, implying that the quantity might be assumed or automatically calculated by the system.
* **Unit Price** (`unit_price`, number, optional): Enter the unit price for each selected vegetable (though this field is not visible in the current schema).
* **Total Price** (`total_price`, number, optional): Calculated based on your selected products and unit prices (though this field is not visible in the current schema).
* **Contact Name** (`contact_name`, text, optional): Enter your name if you wish to be contacted.
* **Contact Phone** (`contact_phone`, text, optional): Enter your phone number if you wish to be contacted.
* **Contact EMail** (`contact_email`, email, optional): Enter your email address if you wish to be contacted.
* **Delivery Zip** (`delivery_zip`, text, optional): Enter your delivery zip code.

Note: The form schema has a few fields with 'optional' status, but these might still be required based on the context and business logic not present in the schema.
