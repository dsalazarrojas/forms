# Return Shipment Form - Help Guide
## Purpose
The Return Shipment Form is a form used by customers to provide information about their returned shipments. This form helps track returns, identifies issues, and improves the customer experience.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the recipient's name in the `recipient_name` field.
2. Enter the recipient's email address in the `recipient_email` field.
3. Enter the order number associated with the return in the `order_number` field.
4. Select the reason for return from the `reason_for_return_category` field.
5. If selecting "Other" as the reason for return, provide a detailed explanation in the `reason_for_return_other_text` field.
6. If the reason for return is related to a product, enter the product information in the `reason_for_return_product` field.
7. Enter the return shipment date in the `return_shipment_date` field.
8. Choose the shipping method used for the return in the `shipping_method` field.
9. Enter the tracking number associated with the return in the `tracking_number` field.
10. Add any additional comments about the return in the `comments` field.

## Field-by-Field Explanation
* **recipient_name** (`recipient_name`, text, required/optional): Enter the name of the recipient who received the shipment.
* **recipient_email** (`recipient_email`, email, required/optional): Enter the email address of the recipient who received the shipment.
* **order_number** (`order_number`, text, required/optional): Enter the order number associated with the return.
* **reason_for_return** (`reason_for_return`, text, required/optional): Enter a brief description of the reason for return.
* **reason_for_return_other** (`reason_for_return_other`, text, required/optional): Select "Other" as the reason for return, if applicable.
* **reason_for_return_other_text** (`reason_for_return_other_text`, text, required/optional): Enter a detailed explanation of the reason for return if selecting "Other".
* **reason_for_return_category** (`reason_for_return_category`, select one, required/optional): Select the category of the reason for return (Customer, Product, Packaging, Damage, or Other).
* **reason_for_return_other_category** (`reason_for_return_other_category`, select multiple, required/optional): Select the categories related to the reason for return if it's not Customer.
* **reason_for_return_product** (`reason_for_return_product`, text, required/optional): Enter the product information related to the reason for return.
* **return_shipment_date** (`return_shipment_date`, date, required/optional): Enter the date of the return shipment.
* **shipping_method** (`shipping_method`, select one, required/optional): Choose the shipping method used for the return (Standard, Express, Priority).
* **tracking_number** (`tracking_number`, text, required/optional): Enter the tracking number associated with the return.
* **comments** (`comments`, text, required/optional): Enter any additional comments about the return.
