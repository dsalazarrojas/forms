# Dispatch Instruction Form - Help Guide
## Purpose
The Dispatch Instruction Form is a platform for customers to provide their delivery instructions and preferences for a specific order. This form helps ensure that the delivery process goes smoothly and efficiently.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your Customer Information, including your name, phone number, and email address.
2. Provide information about the items you are expecting to receive, including any relevant details.
3. Specify the delivery date and time you are expecting.
4. Enter your delivery address.
5. Confirm your order number.
6. Add any additional notes about your order.
7. Confirm your contact information.
8. Choose how you would like to receive your delivery confirmation.

## Field-by-Field Explanation
### Customer Information
* **Customer Information** (`customer_info`, text, optional): Enter your name, phone number, and email address to ensure we can contact you about your order.

### Item Information
* **Item Information** (`item_info_0`, `item_info_1`, `item_info_2`, `item_info_3`, `item_info_4`, `item_info_5`, text, optional): Describe each item you are expecting to receive, including any relevant details.

### Delivery Date and Time
* **Delivery Date** (`delivery_date`, date, optional): Enter the date you are expecting the items to arrive.
* **Delivery Time** (`delivery_time`, time, optional): Enter the time of day you are expecting the items to arrive.

### Delivery Address
* **Delivery Address** (`delivery_address`, text, optional): Enter the address where you would like to receive your items.

### Order Number
* **Order Number** (`order_number`, number, optional): Enter the number of your order.

### Additional Notes
* **Notes** (`notes`, text, optional): Add any additional information about your order that may be helpful for us to know.

### Contact Information
* **Phone** (`phone`, text, optional): Enter your phone number so we can contact you about your order.
* **Email** (`email`, email, optional): Enter your email address so we can contact you about your order.

### Signatures
* **Customer Signature** (`customer_signature`, text, optional): Sign this form to confirm you have read and understand the delivery instructions.
* **Business Signature** (`business_signature`, text, optional): If this is a business order, sign this form to confirm you have read and understood the delivery instructions.

### Delivery Preferences
* **Delivery Instructions** (`delivery_instructions`, text, optional): Provide specific instructions to be included in the delivery.
* **Delivery Method** (`delivery_method`, select_one, optional): Choose how you would like to receive your delivery (Ground, Air, In Person).
* **Item Status** (`item_status`, select_one, optional): Confirm the status of your items (In Transit, Delayed, Lost, On Hold, Delivered).
* **Delivery Confirmation** (`delivery_confirmation`, select_one, optional): Choose how you would like to receive your delivery confirmation (Yes, No).
* **Customer Confirmation** (`customer_confirmation`, select_one, optional): Confirm that you have read and understood the delivery instructions (Yes, No).
* **Business Confirmation** (`business_confirmation`, select_one, optional): If this is a business order, confirm that you have read and understood the delivery instructions (Yes, No).
