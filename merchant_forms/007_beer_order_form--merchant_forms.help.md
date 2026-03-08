# Beer Order Form - Help Guide
## Purpose
This form is designed to gather information for beer orders from customers. The form will be displayed based on the available selections and will guide the customer through the ordering process.

## How To Complete This Form
1. Please fill in your order details, including order date, customer information, and order preferences.
2. Select the beer style and brand for each selection.
3. Choose the package type and quantity for each beer selection.
4. Add any special instructions or notes for the delivery.
5. Confirm that all recipients are 21 years or older, as required by law.
6. Select the payment method for the order.
7. Review and submit the form for processing.

## Field-by-Field Explanation

* **Order Date** (`order_date`, `date`, required): Enter the date you would like to place your order.
* **Customer Name** (`customer_name`, `text`, required): Enter the name of the customer.
* **Phone Number** (`customer_phone`, `text`, required): Enter the phone number of the customer.
* **Email Address** (`customer_email`, `email`, required): Enter the email address of the customer.
* **Delivery Address** (`delivery_address`, `text`, required): Enter the street address where the delivery will be made.
* **Preferred Delivery Date** (`delivery_date`, `date`, required): Enter the preferred date for delivery.
* **Beer Style - First Selection** (`beer_style_1`, `select_one`, required): Select the style of beer you would like for the first selection. Options include IPA, Lager, Stout, Porter, Wheat Beer, Pilsner, Amber Ale, Blonde Ale, Sour Beer, and Other.
* **Beer Brand - First Selection** (`beer_brand_1`, `text`, required): Enter the brand or brewery name for the first beer selection.
* **Package Type - First Selection** (`package_type_1`, `select_one`, required): Select the package type for the first beer selection. Options include 6-Pack Cans, 12-Pack Cans, 6-Pack Bottles, 12-Pack Bottles, Case (24), Keg, and Other.
* **Quantity - First Selection** (`quantity_1`, `number`, required): Enter the quantity of the first beer selection.
* **Beer Style - Second Selection** (`beer_style_2`, `select_one`, optional): Select the style of beer for the second selection. If this field is not required, please skip it.
* **Beer Brand - Second Selection** (`beer_brand_2`, `text`, optional): Enter the brand or brewery name for the second selection. If this field is not required, please skip it.
* **Package Type - Second Selection** (`package_type_2`, `select_one`, optional): Select the package type for the second selection. If this field is not required, please skip it.
* **Quantity - Second Selection** (`quantity_2`, `number`, optional): Enter the quantity of the second selection. If this field is not required, please skip it.
* **Special Instructions or Notes** (`special_instructions`, `text`, optional): Enter any special instructions or notes for the delivery, such as temperature requirements.
* **I confirm that all recipients are 21 years or older** (`age_verification`, `select_one`, required): Confirm that all recipients are 21 years or older, as required by law.
* **Payment Method** (`payment_method`, `select_one`, required): Select the payment method for the order. Options include Credit Card, Debit Card, Check, Bank Transfer, and Cash on Delivery.
