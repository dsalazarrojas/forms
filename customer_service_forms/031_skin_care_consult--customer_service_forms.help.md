<thinking> 
We're creating a help guide for the "skin_care_consult" form, which is used to gather information about a customer's skin care needs and preferences. The form is likely used in a customer service context to help customers find suitable skin care products or provide guidance on skin care routines. We'll break down each field to ensure end users understand its purpose and relevance. We'll also ensure this guide is concise, practical, and easy to follow.

</thinking>
# skin_care_consult - Help Guide

## Purpose
The skin care consult form is used to collect information about a customer's skin type, skin condition, and preferences for skin care products. This information will help customers find suitable skin care products or guidance on skin care routines.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your skin type from the options provided.
2. Describe your skin condition in detail.
3. Indicate whether you are interested in skin care products.
4. Choose how often you follow up with your skin care products.
5. Provide detailed information about the skin care products you are interested in.
6. Enter the price, currency, weight, unit of weight, size, unit of size, and quantity of the skin care product.
7. Add any additional information about the skin care product.

## Field-by-Field Explanation

* **What is your skin type?** (`skin_type`, `select_one`, required): Select one of the following options - Normal, Dry, Oily, Combination, Sensitive. Please choose the option that best describes your skin type.
* **Describe your skin condition** (`skin_condition`, `text`, required): Please provide details about your skin concerns, such as acne, aging, etc.
* **Are you interested in skin care products?** (`skin_care_products`, `select_one`, required): Select 'Yes' or 'No' to indicate your interest in skin care products.
* **How often do you follow-up with your skin care products?** (`followup`, `select_one`, required): Choose how often you follow up with your skin care products - Daily, Weekly, Monthly, Rarely, Never.
* **How do you follow-up with your skin care products?** (`followup_method`, `text`, required): This field is not currently used in the form, so please ignore it.
* **Please provide detailed information about your skin care products** (`skin_care_product_info`, `text`, required): Describe the skin care product you are interested in, including its name, price, etc.
* **Price of the skin care product** (`skin_care_product_info_price`, `number`, required): Enter the price of the skin care product.
* **Currency of the skin care product** (`skin_care_product_info_price_currency`, `text`, required): Enter the currency of the skin care product.
* **Weight of the skin care product** (`skin_care_product_info_weight`, `number`, required): Enter the weight of the skin care product.
* **Unit of the skin care product weight** (`skin_care_product_info_weight_unit`, `text`, required): Enter the unit of the skin care product weight (e.g. kg, oz, etc.).
* **Size of the skin care product** (`skin_care_product_info_size`, `number`, required): Enter the size of the skin care product.
* **Unit of the skin care product size** (`skin_care_product_info_size_unit`, `text`, required): Enter the unit of the skin care product size (e.g. liters, oz, etc.).
* **Quantity of the skin care product** (`skin_care_product_info_quantity`, `number`, required): Enter the quantity of the skin care product.
* **Additional information about the skin care product** (`skin_care_product_info_additional`, `text`, required): Add any additional details about the skin care product you are interested in.

## Tips
* Ensure you answer all required fields to provide the best possible guidance or recommendations.
* Be as detailed as possible when describing your skin condition and skin care product preferences.
* Enter accurate information about the skin care product, including its price, weight, size, etc.
* Use the units provided when entering the weight and size of the skin care product.
