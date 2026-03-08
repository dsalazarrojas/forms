# Afterpay Shoes Order Form - Help Guide
## Purpose
The Afterpay Shoes Order Form is designed to collect information from customers to process and deliver their afterpay shoes order. This form is essential in ensuring that we have all the necessary details to provide accurate and timely service.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your full name, email, and phone number to allow us to contact you regarding your order.
2. Provide your shipping address and billing address if they are different.
3. Enter your foot measurements, including shoe size, foot width, and dominant foot.
4. Select your preferred shoe category, type, brand, color, and material.
5. Choose your preferred shipping method.
6. Specify the quantity of shoes you'd like to order.
7. Select your budget range for the shoes.
8. Agree to the store's terms and conditions by selecting "I Agree".

## Field-by-Field Explanation

* **Customer Full Name** (`customer_full_name`, text, **required**): Enter your full name for our records.
* **Email Address** (`customer_email`, email, **required**): Enter your email address to receive order confirmation and updates.
* **Phone Number** (`customer_phone`, text, **required**): Enter your phone number for delivery updates.
* **Shipping Address** (`shipping_address`, text, **required**): Enter the complete address for delivery.
* **Billing Address Same as Shipping** (`billing_address_same_as_shipping`, select_one, **required**): If your billing address is different from your shipping address, select "No".
* **Billing Address** (`billing_address`, text, **optional**): If your billing address is different from your shipping address, enter it here.
* **Foot Measurement** (`foot_measurement_header`, note, **not required**): This field is a header for the next two fields.
* **Shoe Size (US)** (`shoe_size_us`, number, **required**): Enter your US shoe size.
* **Foot Width** (`foot_width`, select_one, **required**): Select your foot width, e.g., Narrow, Medium, Wide, etc.
* **Dominant Foot** (`dominant_foot`, select_one, **optional**): If you have a dominant foot, select it here.
* **-- Shoe Category --** (`shoe_category_header`, note, **not required**): This field is a header for the next field.
* **Shoe Category** (`shoe_category`, select_one, **required**): Select the type of shoes you're looking for, e.g., Athletic, Casual, Dress, etc.
* **Specific Shoe Type** (`specific_shoe_type`, text, **required**): Enter the specific type of shoe you want, e.g., Sneakers, Boots, etc.
* **Brand Preference** (`brand_preference`, text, **optional**): If you have a preferred brand, enter it here.
* **Color Preference** (`color_preference`, text, **optional**): If you have a preferred color, enter it here.
* **Material Preference** (`material_preference`, select_one, **optional**): Select the material you prefer for your shoes, e.g., Leather, Canvas, etc.
* **Special Features** (`special_features`, select_multiple, **optional**): Select any special features you need in your shoes, e.g., Waterproof, Arch Support, etc.
* **Intended Use** (`intended_use`, text, **optional**): Specify how you will primarily use these shoes.
* **Quantity** (`quantity`, number, **required**): Enter the number of pairs of shoes you'd like to order.
* **Budget Range** (`budget_range`, select_one, **optional**): Select your budget range for the shoes.
* **Shipping Preference** (`shipping_preference`, select_one, **required**): Select your preferred shipping method, e.g., Standard, Express, etc.
* **Payment Method** (`payment_method`, select_one, **required**): Select Afterpay as your payment method.
* **Terms Agreement** (`terms_agreement`, select_one, **required**): Agree to the store's terms and conditions.
