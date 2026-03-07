<thinking>

To determine the purpose of this form, I will analyze the input YAML fields. 
The form is titled "Microbrewery Equipment Supply Order Form", suggesting that it is used for ordering supplies for a microbrewery. 
Looking at the fields, I can see that they are divided into several sections, including "Equipment Needed", "Contact Info", "Shipping Details", "Delivery Terms", "Supplier Info", and "Order Terms". 
This form is likely used by microbrewery staff or management to place orders for equipment and supplies, and provide details about the order, contact information, and terms of delivery. 
To confirm, I will review the fields:

- "Equipment Needed" suggests that the form is for ordering specific equipment. 
- "Contact Info", "Supplier Info", and "Shipping Details" indicate that the form is for gathering information about the order, the contact person, and the shipping options. 
- "Delivery Terms" and "Order Terms" imply that the form is for specifying the terms of delivery and any special conditions of the order.

The purpose of this form is to collect information for a microbrewery to place an order for equipment and supplies, including details about the equipment, contact information, and terms of delivery.

This form appears to be a straightforward order form, but I will review the fields more closely to ensure that I provide accurate and relevant information to users.

I will now create a help guide based on this understanding.

</thinking>

# Microbrewery Equipment Supply Order Form - Help Guide
## Purpose
This form is used by microbrewery staff or management to place orders for equipment and supplies, providing details about the order, contact information, and terms of delivery.

## How To Complete This Form
To complete this form, simply fill in the required fields with accurate information and select relevant options as needed.

## Field-by-Field Explanation
* **Equipment Needed** (`equipment_needed`, `text`, required: false): List the equipment you need to order. This is where you should specify the specific items you are requesting.
* **Contact Info** (`contact_info`, `text`, required: false): Enter your contact information, including your name, email address, and phone number. This will help us contact you about your order.
* **Shipping Details** (`shipping_details`, `select_multiple`, required: false):
	+ If you select "Yes" here, we will arrange for shipping of the ordered equipment. If you select "No", we will not arrange for shipping.
* **Delivery Terms** (`delivery_terms`, `select_multiple`, required: false):
	+ If you select "Yes" here, we will deliver the ordered equipment directly to your location. If you select "No", we will not deliver the equipment directly.
* **Supplier Info** (`supplier_info`, `text`, required: false): Enter any additional information you think is relevant to the order.
* **Order Terms** (`order_terms`, `select_multiple`, required: false):
	+ If you select "Yes" here, you agree to the standard order terms. If you select "No", you must provide alternative terms and conditions. 

Please note that the fields with "required: false" are optional and only required if specified.
