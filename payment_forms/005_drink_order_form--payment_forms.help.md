<thinking>
This form is designed to collect information about a customer's drink order. It is intended for use by the barista staff to create a drink order that suits the customer's preferences. This form should only be used for this specific purpose and not for other types of forms. It is not a duplicate form, and its purpose is well-defined within the internal documentation.
</thinking>

# Drink Order Form - Help Guide
## Purpose
The Drink Order Form is used by barista staff to collect information about a customer's drink preferences, allowing them to create a customized drink order that meets their needs.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in the required fields with the customer's information:
	* **Drink Order**: Enter the type of drink the customer wants (e.g. "Coffee", "Juice", etc.).
	* **Customer Name**: Enter the customer's name.
	* **Customer Email**: Enter the customer's email address (this will be used for communication).
	* **Customer Phone**: Enter the customer's phone number.
	* **Large**: Select the correct size for the drink from the options (Large, Medium, Small).
2. Select the desired drink type:
	* **Drink Type**: Select one or more of the options (Coffee, Juice, Water).

## Field-by-Field Explanation
### Drink Order
* **Drink Order** (`drink_order_form`, text, required): Enter the type of drink the customer wants.

### Customer Name
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name.

### Customer Email
* **Customer Email** (`customer_email`, email, optional): Enter the customer's email address for communication.

### Customer Phone
* **Customer Phone** (`customer_phone`, text, optional): Enter the customer's phone number.

### Large
* **Large** (`drink_size_large`, select_one, optional): Select the correct size for the drink from the options (Large, Medium, Small).

### Drink Type
* **Drink Type** (`drink_type`, select_multiple, optional): Select one or more of the options (Coffee, Juice, Water).

### Customer Address
* **Customer Address** (`customer_address`, text, optional): Enter the customer's address (this field is not required for most customers).

## Tips
* Double-check that all fields are filled in correctly before submitting the form.
* If the customer requests a drink size that is not listed, ask the barista staff for guidance.
* If the customer wants to select multiple drink types, separate them with commas in the "Drink Type" field.
