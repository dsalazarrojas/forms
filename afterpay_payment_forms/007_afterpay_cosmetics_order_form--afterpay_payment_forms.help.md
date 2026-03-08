# Afterpay Cosmetics Order Form - Help Guide
## Purpose
The Afterpay Cosmetics Order Form is a comprehensive form designed to gather essential information from customers for accurate order processing and potential future interactions.

## How To Complete This Form
1. Please fill out the form with your details in the corresponding fields.
2. Make sure to fill in all required fields (marked as "Required" in the form).

## Field-by-Field Explanation

* **Customer Full Name** (`customer_full_name`, `text`, Required): Enter your full name as it appears on your identification documents.
* **Email Address** (`customer_email`, `email`, Required): Enter a valid email address for order confirmation and potential future communications.
* **Phone Number** (`customer_phone`, `text`, Required): Enter your phone number for delivery updates and potential contact.
* **Shipping Address** (`shipping_address`, `text`, Required): Enter the complete address where you'd like your order delivered.
* **Billing Address Same as Shipping** (`billing_address_same_as_shipping`, `select_one`, Required): If your billing address is different from your shipping address, select "No". If the same, select "Yes".
* **Billing Address** (`billing_address`, `text`, Optional): If your billing address is different from your shipping address, enter the correct details here.
* **Skin Type and Preferences** (`skin_type_header`, `note`, Note): This section provides additional information about your skin type and concerns for product selection.
* **Skin Type** (`skin_type`, `select_one`, Required): Select your skin type (Normal, Oily, Dry, Combination, Sensitive).
* **Skin Concerns** (`skin_concerns`, `select_multiple`, Optional): Select any skin concerns you'd like to address (Acne, Aging, Dark Spots, Dryness, Sensitivity, Large Pores, Dullness, None).
* **Cosmetic Items** (`cosmetic_items_header`, `note`, Note): This section provides an overview of the cosmetic items available for selection.
* **Product Category** (`product_category`, `select_one`, Required): Select the type of cosmetic product you're interested in (Skincare, Makeup, Hair Care, Fragrance, Body Care, Tools/Brushes, Other).
* **Specific Product Name** (`specific_product_name`, `text`, Required): Enter the name of the specific product you'd like to order.
* **Preferred Brand** (`product_brand`, `text`, Optional): Enter the brand of the product you're looking for.
* **Product Variant** (`product_variant`, `text`, Optional): Specify color, shade, scent, or other variant if applicable.
* **Quantity** (`quantity`, `number`, Required): Enter the number of units you'd like to order.
* **Allergies or Sensitivities** (`allergies_sensitivities`, `text`, Optional): If you have any allergies or sensitivities to cosmetic ingredients, enter them here.
* **Shipping Preference** (`shipping_preference`, `select_one`, Required): Select your preferred shipping method (Standard, Express, Priority, Store Pickup).
* **Payment Method** (`payment_method`, `select_one`, Required): Select Afterpay as your payment method (Afterpay, Credit Card, Debit Card, PayPal).
* **Terms Agreement** (`terms_agreement`, `select_one`, Required): Select "I Agree" to the store's terms and Afterpay conditions.
