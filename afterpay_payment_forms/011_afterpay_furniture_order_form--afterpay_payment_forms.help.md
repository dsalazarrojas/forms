<thinking>
The purpose of this form is to collect information from customers about their order for furniture, specifically for payment plans through Afterpay. This form is intended to gather details such as customer contact information, order specifics (e.g., room type, style, category, specific item, and dimensions), and payment method preferences. The fields are designed to ensure accurate delivery and billing information is collected while also considering the customer's needs and preferences for their order.

This form appears to be designed for a furniture store that offers Afterpay as a payment option, and the fields are structured to support this. However, it's essential to ensure that the form is clear and easy to use for customers, as well as to prevent duplication or errors in the information collected.

To prevent duplication, consider implementing a system that checks for existing orders or accounts with the same customer information. This could include validating email addresses, phone numbers, or other unique identifiers to avoid creating duplicate entries.

To ensure clarity, consider providing examples or guidance on how to fill out specific fields, such as formatting phone numbers or email addresses. Additionally, review the label descriptions for accuracy and consider rephrasing if they are unclear or too technical.

</thinking>

# Afterpay Furniture Order Form - Help Guide
## Purpose
This form is designed to collect information from customers about their order for furniture, with a focus on payment options through Afterpay.

## How To Complete This Form
1. Fill out the required fields with your accurate and complete information.
2. Make sure to review your selections and information before submitting the form.

## Field-by-Field Explanation

* **Customer Full Name** (`customer_full_name`, text, required): Enter your full name as it appears on your identification.
* **Email Address** (`customer_email`, email, required): Enter your email address for order confirmation and other communications.
* **Phone Number** (`customer_phone`, text, required): Enter your phone number for delivery updates and other notifications.
* **Shipping Address** (`shipping_address`, text, required): Enter the complete address where you would like the furniture delivered.
* **Billing Address Same as Shipping** (`billing_address_same_as_shipping`, select_one, required): If your billing address is the same as your shipping address, select "Yes". Otherwise, select "No."
* **Billing Address** (`billing_address`, text, not required): If your billing address is different from your shipping address, enter it here.
* **Room Type and Style** (`room_type_header`, note): This is a heading to help organize your selections below.
* **Room Type** (`room_type`, select_one, required): Select the room type for the furniture (e.g., Living Room, Bedroom, etc.).
* **Furniture Style** (`furniture_style`, select_one, required): Select the style of furniture you prefer (e.g., Modern, Traditional, etc.).
* **Furniture Category** (`furniture_category`, select_one, required): Select the category of furniture you're interested in (e.g., Seating, Tables, etc.).
* **Specific Furniture Item** (`specific_furniture_item`, text, required): Enter the specific piece of furniture you would like to order.
* **Brand Preference** (`brand_preference`, text, not required): If you have a preferred furniture brand, enter it here.
* **Color and Material Preference** (`color_material_preference`, text, not required): Specify your preferred color and material for the furniture.
* **Dimensions Requirements** (`dimensions_requirements`, text, not required): Enter any specific dimension requirements for the furniture.
* **Quantity** (`quantity`, number, required): Enter the number of pieces of this furniture you would like to order.
* **Budget Range** (`budget_range`, select_one, not required): Select your budget for this furniture purchase (e.g., Under $200, etc.).
* **Assembly Preference** (`assembly_preference`, select_one, not required): Select your preference for assembly (e.g., Pre-assembled, DIY, etc.).
* **Delivery Preference** (`delivery_preference`, select_one, required): Select your preferred delivery method (e.g., Standard, White Glove, etc.).
* **Payment Method** (`payment_method`, select_one, required): Select Afterpay as your preferred payment method.
* **Terms Agreement** (`terms_agreement`, select_one, required): Agree to the store's terms and Afterpay conditions.
