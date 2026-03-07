<thinking>
Before creating the help guide, let's analyze the provided YAML form data:

- The form is named "DIY Kit Order Form" and has 10 fields.
- Each field is displayed on a separate page, which is likely to simplify the user experience.
- Required fields are: `shipping_method` (id: 7) and `payment_method` (id: 10).
- Fields that require some sort of selection (`select_one` type) are: `shipping_method` (id: 7) and `payment_method` (id: 10).
- Some fields are optional, like `order_info` (id: 1), `shipping_info` (id: 2), `product_info` (id: 3), `payment_info` (id: 4), `contact_info` (id: 5), `order_summary` (id: 6), and `shipping_rate` (id: 8).
- The `shipping_address` field (id: 9) is also not required.
- There are some interesting fields that seem to be related to payment methods but are not directly related to payment options, which might be a potential confusion point for users. This will be addressed in the field explanations.
</thinking>

# DIY Kit Order Form - Help Guide

## Purpose
This form is designed to collect information from customers to place a DIY kit order. It consists of several sections to gather order details, shipping information, and payment options. Please fill out the form accurately to ensure your order is processed correctly.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the `Order Information` page (id: 1) with your contact details and order specifics.
2. Proceed to the `Shipping Details` page (id: 2) and provide your shipping address.
3. On the `Product Selection` page (id: 3), please select the desired product or kit.
4. The `Payment Information` page (id: 4) is where you'll select your preferred payment method.
5. The `Contact Information` page (id: 5) is optional and can be used to provide additional contact information if needed.
6. On the `Order Summary` page (id: 6), review and confirm your order details.
7. Select your preferred `Shipping Method` on the next page (id: 7).
8. Enter the `Shipping Rate` if applicable (id: 8).
9. Choose your preferred `Payment Method` on the last page (id: 10).
10. Review and submit your form to complete your order.

## Field-by-Field Explanation

* **Shipping Method (id: 7)**: Select either "Yes" or "No" to indicate your preferred shipping method.
	+ If you select "Yes", please provide more details in the `Shipping Rate` field (id: 8) for accurate shipping costs.
* **Shipping Rate (id: 8)**: Enter the shipping rate for the selected method. This will help us accurately calculate shipping costs.
* **Contact Information (id: 5)**: This optional field allows you to provide additional contact information for our records.
* **Shipping Address (id: 9)**: Enter your shipping address in this text field.
* **Payment Method (id: 10)**: Select "Yes" or "No" to indicate your preferred payment method. Please note that selecting "No" might not be feasible as payment is a crucial aspect of this order form. However, we will address this by providing more guidance on payment methods in our next step.
* **Order Information (id: 1)**, **Shipping Details (id: 2)**, **Product Selection (id: 3)**, **Order Summary (id: 6)**: These fields are meant for you to provide order-related information. Please fill out as much detail as needed for accurate processing of your order.
* **Payment Information (id: 4)**: This field is intended for providing details about your payment method, but it's not explicitly asking for payment options. To clarify, if you selected "Yes" for `Payment Method` (id: 10), you can provide additional payment information in this field, such as payment type (e.g., credit card, PayPal). 

Please note that the `payment_info` field is optional and might not be necessary if you selected "Yes" for `Payment Method` (id: 10), as we will use the selected payment method for processing.
