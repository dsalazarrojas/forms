# 2021 Harvest Collection Order Form - Help Guide
## Purpose
This form is designed to collect order information from customers, including their personal details, order items, delivery preferences, and payment information. It is used for the 2021 harvest collection.

## How To Complete This Form
To complete this form, follow the steps below:

1.  Enter your **full name**, which is required for order processing.
2.  Enter your **email address**, which is also required for order confirmation and communication.
3.  If you have a **phone number**, please enter it for delivery updates.
4.  Select the date you placed the order.
5.  Add your **order items**, including the name, quantity, and unit price of each item.
6.  Choose your **preferred delivery method** (Standard, Express, Pickup, or Local delivery).
7.  If applicable, enter your **delivery address**.
8.  Select a **requested delivery date**, if you wish.
9.  Choose whether you want **shipping insurance** for your order.
10.  If you wish to add a **gift wrap**, you can select this option.
11.  Enter any **special instructions** or customization notes.
12.  Select your **payment method** (Credit card, Cash, Bank transfer, PayPal, or Invoice).
13.  If using a credit card, enter your **card number** (16-digit number without spaces).
14.  If different from your delivery address, enter your **billing address**.
15.  Choose your **preferred contact time** (Morning, Afternoon, or Evening).
16.  Enter any **additional comments** or notes.
17.  Finally, accept the **terms and conditions** by selecting "I agree".

## Field-by-Field Explanation

*   **Full name** (`full_name`, text, required): Enter your legal name.
*   **Email address** (`email_address`, email, required): We will send order confirmation here.
*   **Phone number** (`phone_number`, phone, optional): Optional, for delivery updates.
*   **Order date** (`order_date`, date, required): Select the date you place the order.
*   **Item or product name** (`item_name`, text, required): Enter the name of the item or product.
*   **Quantity** (`quantity`, integer, required): Enter the number of items.
*   **Unit price** (`unit_price`, decimal, required): Price per item in USD.
*   **Discount code** (`discount_code`, text, optional): Optional promo code.
*   **Preferred delivery method** (`delivery_method`, select_one, required): Choose how you want the order delivered.
*   **Delivery address** (`delivery_address`, text, optional): Required if shipping or local delivery.
*   **Requested delivery date** (`delivery_date`, date, optional): We will try to meet this date.
*   **Shipping insurance** (`shipping_insurance`, select_one, optional): Protect your items during transit.
*   **Gift wrap** (`gift_wrap`, select_one, optional): Add a gift wrap for special occasions.
*   **Special instructions or notes** (`special_instructions`, text, optional): Any extra details for your order.
*   **Payment method** (`payment_information_header`, select_one, required): Select your preferred payment method.
*   **Credit card number** (`card_number`, text, optional): 16-digit number without spaces, required if using credit card.
*   **Billing address** (`billing_address`, text, optional): If different from delivery address.
*   **Preferred contact time** (`preferred_contact_time`, select_one, optional): When we can reach you.
*   **Additional comments or notes** (`additional_comments`, text, optional): Any other information we should know.
*   **Accept terms and conditions** (`terms_and_conditions`, select_one, required): By submitting, you agree to our terms.
