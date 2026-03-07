<thinking>
What is the purpose of this form? The Shipping Quote Form is a tool to generate a shipping quote for customers. It collects necessary information to calculate the total shipping cost, including the customer's address, package details, and shipping preferences.

Is this form already in use internally? If not, how can we ensure it is not duplicated? This form should only be used for new shipping quotes. To avoid duplication, users should not submit the form multiple times for the same order. 

Are there any unclear field labels? Yes, some labels are not very descriptive. For example, "shipping_weight", "shipping_length", "shipping_width", "shipping_height", and "shipping_distance" could be labeled more specifically, like "Package Weight (kg)", "Package Length (cm)", "Package Width (cm)", "Package Height (cm)", and "Distance to Destination (km)" respectively.

</thinking>

# Shipping Quote Form - Help Guide
## Purpose
The Shipping Quote Form is a tool to generate a shipping quote for customers. It collects necessary information to calculate the total shipping cost, including the customer's address, package details, and shipping preferences.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your customer's information, including their name, email, and phone number.
2. Provide the shipping address of the item being shipped from.
3. Enter the package details, including weight, length, width, height, and distance to the destination.
4. Choose the shipping quote currency.
5. Add any additional notes about the shipment.

## Field-by-Field Explanation
* **Shipping Quote Form** (`shipping_quote_form`, text, required: false): This is the title of the form that will be displayed on the shipping quote.
* **Customer Name** (`customer_name`, text, required: false): Enter the customer's name.
* **Customer Email** (`customer_email`, email, required: false): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, text, required: false): Enter the customer's phone number.
* **Shipping From Address** (`shipping_from_address`, text, required: false): Enter the address of the item being shipped from.
* **Shipping To Address** (`shipping_to_address`, text, required: false): Enter the address of the item being shipped to.
* **Package Weight** (`shipping_weight`, number, required: false): Enter the weight of the package in kg.
* **Package Length** (`shipping_length`, number, required: false): Enter the length of the package in cm.
* **Package Width** (`shipping_width`, number, required: false): Enter the width of the package in cm.
* **Package Height** (`shipping_height`, number, required: false): Enter the height of the package in cm.
* **Distance to Destination** (`shipping_distance`, number, required: false): Enter the distance to the destination in km.
* **Shipping Insurance** (`shipping_insurance`, number, required: false): Enter the shipping insurance amount.
* **Shipping Quote Total** (`shipping_quote_total`, number, required: false): This field will display the total shipping cost.
* **Shipping Quote Currency** (`shipping_quote_currency`, select_one, required: false): Choose the currency for the shipping quote, options are USD, EUR, JPY, CNY.
* **Shipping Quote Notes** (`shipping_quote_notes`, note, required: false): Add any additional notes about the shipment.

## Tips
* Make sure to fill in all required fields to get an accurate shipping quote.
* If you need to make changes to the shipping quote, please contact us.
* If you have any issues with the form, please contact us for assistance.
