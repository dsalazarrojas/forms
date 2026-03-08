# Cake Factory Order Form - Help Guide
## Purpose
The Cake Factory Order Form is designed to collect essential information from clients for accurate tracking, preparation, and delivery of their custom cakes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **Client Name** to ensure we can accurately track your order.
2. Provide your **Contact Email** so we can confirm your order and communicate with you about its progress.
3. Choose your **Cake Flavor** to create the perfect dessert for your occasion.
4. Indicate the **Tiers and Size** to determine the correct cake configuration.
5. Choose whether you need **Delivery** or would like to **Pickup** your order.
6. If you selected **Delivery**, enter your **Delivery Address** so we can prepare it accordingly.
7. Specify the **Lead Time in Days** to determine how many days ahead we need to prepare your order.
8. Share any **Special Requests** you may have, such as custom messages or dietary notes.

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, required): Enter your name to ensure we can track your order accurately.
* **Contact Email** (`contact_email`, email, required): Enter a valid email address for order confirmations and updates.
* **Cake Flavor** (`cake_flavor`, text, required): Choose from a variety of flavors to create your custom cake.
* **Tiers and Size** (`tiers_and_size`, text, required): Specify the number of tiers and serving size for your cake.
* **Delivery Required** (`delivery_required`, select_one, required): Choose between **Pickup** or **Delivery** for your order.
* **Delivery Address** (`delivery_address`, text, optional): Enter your delivery address if you have selected **Delivery**.
* **Lead Time in Days** (`lead_time`, number, required): Specify the number of days ahead we need to prepare your order.
* **Special Requests** (`special_requests`, text, optional): Share any custom messages or dietary notes for your order.
