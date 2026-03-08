<thinking>
This help guide will cover the purpose of the Clothing Order Form Template WorldPay UK, how to complete it, and explain each field in detail to ensure users fully understand what is required of them.

The form purpose is to collect customer information, billing and shipping address details, order items, and delivery options for placing an order. This guide will walk through each page of the form, explaining what information is required for each section.

</thinking>

# Clothing Order Form Template WorldPay UK - Help Guide
## Purpose
The purpose of this form is to collect customer information, billing and shipping address details, order items, and delivery options for placing an order.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer information section with your full name and email address.
2. Provide your phone number and billing address details, including street address, city, and postcode.
3. If your shipping address is different from your billing address, fill in the shipping address details.
4. Select the item type and provide a description or reference code for each item in the order.
5. Choose the size and colour of each item.
6. Specify the quantity and price per unit for each item.
7. Select the delivery option for your order.
8. Choose whether you accept the terms and conditions.

## Field-by-Field Explanation

* **Full Name** (`customer_name`, `text`, required): This field requires your full name.
* **Email Address** (`email`, `text`, required): Enter your valid email address.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number in the international format (e.g., +44 (0) 1234567890).
* **Street Address** (`billing_address`, `text`, required): Enter your billing address, including house number and street name.
* **City** (`billing_city`, `text`, required): Enter the city for your billing address.
* **Post Code** (`billing_postcode`, `text`, required): Enter the UK postcode for your billing address.
* **Shipping Address Same As Billing?** (`same_as_billing`, `select_one`, required): Select 'Yes' if your shipping address is the same as your billing address, or 'No' if it's different.
* **Shipping Street Address** (`shipping_address`, `text`, required if 'No' is selected for `same_as_billing`): If your shipping address is different from your billing address, enter your shipping street address here.
* **Shipping City** (`shipping_city`, `text`, required if 'No' is selected for `same_as_billing`): If your shipping address is different from your billing address, enter the city for your shipping address.
* **Item Type** (`item_type`, `select_one`, required): Choose the type of item you're ordering (e.g., T-shirt, Dress, Shirt, etc.).
* **Item Description** (`item_description`, `text`, required): Enter a description or reference code for the item.
* **Size** (`size`, `select_one`, required): Choose the size of the item (e.g., XS, S, M, L, XL, etc.).
* **Colour** (`colour`, `text`, required): Enter the colour of the item.
* **Quantity** (`quantity`, `number`, required): Enter the quantity of the item.
* **Price Per Unit** (`price_per_unit`, `number`, required): Enter the price per unit for the item.
* **Delivery Option** (`delivery_option`, `select_one`, required): Choose the delivery option for your order (e.g., Standard delivery - 5-7 days, Next day delivery, Express delivery - 2-3 days, etc.).
* **Preferred Delivery Date** (`delivery_date`, `date`, optional): If you have a preferred delivery date, enter it here.
* **I Accept The Terms and Conditions** (`terms_accepted`, `select_one`, required): Select 'Yes, I accept' to confirm you agree to the terms and conditions.

Note: This guide is based on the provided YAML structure and is meant to be a comprehensive overview of how to complete the form.
