# Return Goods Authorization Request Form - Help Guide
## Purpose
This form is a request to authorize a return on goods, which requires a signature from the customer and should be completed only if certain about the return.

## How To Complete This Form
To complete this form, please go through the following steps:

1. Check if the goods are in the condition they were received.
2. Verify that the customer is not unsure about the return.
3. Select "Yes" in the "Return Authorization Request" field.
4. Fill in the customer's ID, reason for return, return date, and notes if necessary.
5. Check if the goods need to be returned ("Yes" or "No" in "Return Items") and select accordingly.
6. Check if the customer's signature is required for the return ("Yes" or "No" in "Signature Required").
7. Fill in the customer's contact information (email, phone, name, address).
8. Fill in the product's ID and serial number.
9. Select "Yes" or "No" in "Reason for Return Product" field.

## Field-by-Field Explanation
* **Return Authorization Request** (`select_one`, required): Select "Yes" if you are certain about the return.
* **Customer Id** (`text`, required): Enter the customer's ID number.
* **Reason for Return** (`text`, required): Enter a brief description of why you are returning the goods.
* **Return Date** (`date`, required): Enter the return date.
* **Return Items** (`select_multiple`, required): Check if the goods need to be returned.
* **Signature Required** (`select_one`, required): Check if the customer's signature is required for the return.
* **Notes** (`note`, required): Enter any additional notes about the return.
* **Email** (`email`, required): Enter the customer's email address.
* **Phone** (`text`, required): Enter the customer's phone number.
* **Customer Email** (`email`, required): Enter the customer's email address.
* **Customer Phone** (`text`, required): Enter the customer's phone number.
* **Customer Name** (`text`, required): Enter the customer's name.
* **Customer Address** (`text`, required): Enter the customer's address.
* **Retailer Name** (`text`, required): Enter the retailer's name.
* **Product Id** (`text`, required): Enter the product's ID number.
* **Serial Number** (`text`, required): Enter the product's serial number.
* **Reason for Return Product** (`select_one`, required): Select "Yes" if you are returning the product.

## Tips
- Please only fill out this form if you are certain about the return.
- Make sure to fill in all required fields.
