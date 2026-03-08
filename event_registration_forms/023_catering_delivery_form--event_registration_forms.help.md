# Catering Delivery Form - Help Guide

## Purpose
The Catering Delivery Form is designed for customers to provide information necessary for catering orders. Please fill out this form to ensure that your order is processed correctly and delivered to you efficiently.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Fill out your personal information: Please provide your name, email address, phone number, and company name (if applicable).
2. Select the delivery date and time you prefer.
3. Provide your delivery address, city, and state.
4. Choose the type of catering order you need (e.g., drop-off only, drop-off with setup, full service, or pickup).
5. List the menu items you have ordered.
6. Specify the number of servings you need.
7. Add any special requests or dietary notes.
8. Select the payment method you prefer.
9. If you want to leave a tip, enter the amount you'd like to pay.
10. Confirm that you accept the delivery fee (if applicable).
11. If you have an order confirmation number, please enter it.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Please enter your full name.
* **Email Address** (`email`, email, required): Enter your valid email address.
* **Phone Number** (`phone`, text, required): Enter your contact phone number.
* **Company Name** (`company_name`, text, optional): If you're contacting us for work, please enter your company name (if not applicable, leave blank).
* **Delivery Date** (`delivery_date`, date, required): Select the date when you need delivery.
* **Delivery Time** (`delivery_time`, time, required): Choose the preferred delivery time.
* **Delivery Address** (`delivery_address`, text, required): Enter your complete delivery address.
* **City** (`city`, text, required): Enter your city or location.
* **State** (`state`, text, required): Enter your state or region.
* **ZIP Code** (`zip_code`, text, required): Enter your ZIP code.
* **Delivery Instructions** (`delivery_instructions`, text, optional): If you have any special instructions for the delivery, such as gate codes or building access, please provide them here.
* **Contact on Arrival** (`contact_on_arrival`, text, required): Please specify who to contact when the driver arrives.
* **Order Type** (`order_type`, select_one, required): Choose the type of catering order (e.g., drop-off only, drop-off with setup, full service, or pickup).
* **Menu Items Ordered** (`menu_items`, text, required): List the menu items you have ordered.
* **Quantity** (`quantity`, number, required): Enter the number of servings you need.
* **Special Requests** (`special_requests`, text, optional): If you have any special requirements, such as food allergies, please mention them here.
* **Dietary Notes** (`dietary_notes`, text, optional): If you have any dietary restrictions, please specify them.
* **Equipment Needed** (`equipment_needed`, select_multiple, optional): If you need any special equipment, such as chafing dishes or serving utensils, select them here.
* **Payment Method** (`payment_method`, select_one, required): Choose the payment method you prefer (e.g., credit card, debit card, cash, check, or already paid).
* **Tip Amount** (`tip_amount`, number, optional): If you'd like to leave a tip, please enter the amount here.
* **Delivery Fee** (`delivery_fee`, select_one, required): Please confirm that you accept the delivery fee.
* **Order Confirmation Number** (`order_confirmation`, text, optional): If you have an order confirmation number, please enter it.
* **Additional Comments** (`additional_comments`, text, optional): If you have any other information, please provide it here.
