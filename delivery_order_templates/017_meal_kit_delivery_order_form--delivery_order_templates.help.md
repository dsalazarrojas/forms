This form is intended to be a general-purpose form for customers to place orders for meal kits, but it's unclear whether this form is meant for customers or for internal use within the organization. Given the fields present, it seems to be a form for customers to provide information about their delivery orders. The presence of fields such as "Customer Info" and "Billing Info" suggests that this form may be used for both order placement and billing purposes. To confirm, the following form design guide will assume that the form is intended for customer-facing use.

# Meal Kit Delivery Order Form - Help Guide
## Purpose
The Meal Kit Delivery Order Form is a form designed for customers to provide information about their delivery orders. This form collects details such as customer contact information, delivery address, and order specifics to facilitate the order process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and contact information in the "Customer Info" field.
2. Provide your delivery address in the "Delivery Address" field.
3. Select the type of meal you would like to order from the "Meal Type" dropdown menu.
4. Enter the desired quantity of meal kits in the "Quantity" field.
5. Enter your contact phone number in the "Contact Phone" field.
6. Add any order comments or special instructions in the "Order Comments" field.
7. Enter your email address in the "Email" field.
8. Finally, select the form submission time.

## Field-by-Field Explanation
* **Customer Info** (`customer_info`, `text`, required: false): Enter your name as it appears on your identification.
* **Delivery Address** (`delivery_address`, `text`, required: false): Enter your delivery address, including house number and street name.
* **Delivery Date** (`delivery_date`, `date`, required: false): Select the date you would like your meal kits delivered on. Please use the date format MM/DD/YYYY.
* **Meal Type** (`meal_type`, `select_one`, required: false): Select the type of meal you would like to order, such as "Apple" or "Chicken".
* **Quantity** (`quantity`, `number`, required: false): Enter the number of meal kits you would like to order.
* **Contact Phone** (`contact_phone`, `text`, required: false): Enter your phone number where we can reach you to confirm your order.
* **Order Comments** (`order_comments`, `note`, required: false): Add any special instructions or requests for your order.
* **Email** (`email`, `email`, required: false): Enter your email address where we can send order confirmations and updates.
* **Form Submission** (`form_submission`, `time`, required: false): This field is not relevant to the customer; please ignore.
* **Billing Info** (`billing_info`, `text`, required: false): Enter any billing information or payment details if necessary.

## Tips

* Please ensure all fields are completed accurately to ensure timely and correct order delivery.
* If you have any special requests or dietary restrictions, please include them in the "Order Comments" field.
* Our team will contact you via the provided email address to confirm your order details.
