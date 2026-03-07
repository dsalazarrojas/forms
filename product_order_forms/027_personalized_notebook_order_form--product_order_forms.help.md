<thinking>
To create a user-facing help guide for the Personalized Notebook Order Form, we first need to understand the form's purpose and how it's used. This form appears to be designed for customers to place custom orders for notebooks, allowing them to select specific features such as paper color, weight, and size. It also gathers contact information and shipping details for delivery purposes.

Let's assume this form is used for customers to create their own custom notebooks, possibly for personal or business use. We will need to break down each field and provide explanations for end users to fill it out correctly.

</thinking>

# Personalized Notebook Order Form - Help Guide

## Purpose
The Personalized Notebook Order Form is a tool used to create custom notebooks tailored to a customer's preferences. This form allows customers to select the type of notebook they want, including paper color, weight, size, and more.

## How To Complete This Form

1. Fill in your **customer name**, which is required for order fulfillment and communication.
2. Choose the **notebook type** that suits your needs. Select from A4, A5, or A6 sizes.
3. Specify the **quantity** of notebooks you want to order. This can be any number you need.
4. Choose the **cover type** for your custom notebook: Hardcover or Softcover.
5. Select the **paper color** that you prefer: Black, White, or Gray.
6. Choose the **paper weight** that suits your needs: 80 gsm, 100 gsm, or 120 gsm.
7. Specify the **page count** for your custom notebook. This will determine the number of pages in your notebook.
8. Select the **imprint type** for your custom notebook: Simple, Embossed, or None.
9. Enter any **special request** you may have for your custom notebook.
10. Enter your **customer email** for order updates and notifications.
11. Provide your **customer phone** number for easy contact.
12. Enter your **customer address** for order delivery purposes.
13. Choose the **shipping method** for your order: USPS, UPS, or FedEx.
14. Enter your **shipping address** for order delivery.
15. Specify the **shipping city** for your order.
16. Choose the **shipping state** for your order: Alabama, Alaska, Arizona, etc.
17. Select the **shipping zip** for your order: None or Other.
18. Enter your **shipping country** for international orders.
19. Specify the **order date** for your custom notebook order.
20. Enter **special instructions** for your custom notebook order.
21. Choose the **delivery method** for your order: Ground, Air, or Express.
22. Specify the **delivery date** for your order.
23. Enter a **customer note** for any special requests or notes.
24. Assign the order to **chatjimmy** or **default**.

## Field-by-Field Explanation

* **customer_name** (`customer_name`, text, required): Enter your name to be associated with the order.
* **notebook_type** (`notebook_type`, select_one, not required): Choose a size for your notebook (A4, A5, A6).
* **quantity** (`quantity`, number, not required): Specify the number of notebooks you want to order.
* **cover_type** (`cover_type`, select_one, not required): Choose between a Hardcover or Softcover for your notebook.
* **paper_color** (`paper_color`, select_one, not required): Select a paper color for your notebook (Black, White, Gray).
* **paper_weight** (`paper_weight`, select_one, not required): Choose the paper weight for your custom notebook (80 gsm, 100 gsm, 120 gsm).
* **page_count** (`page_count`, number, not required): Specify the number of pages in your custom notebook.
* **imprint_type** (`imprint_type`, select_one, not required): Choose an imprint type for your custom notebook (Simple, Embossed, None).
* **imprint_text** (`imprint_text`, text, not required): Enter any text for imprint.
* **special_request** (`special_request`, text, not required): Enter any special request for your custom notebook.
* **customer_email** (`customer_email`, email, not required): Enter your email for order updates and notifications.
* **customer_phone** (`customer_phone`, text, not required): Enter your phone number for easy contact.
* **customer_address** (`customer_address`, text, not required): Enter your address for order delivery.
* **shipping_method** (`shipping_method`, select_one, not required): Choose a shipping method for your order (USPS, UPS, FedEx).
* **shipping_address** (`shipping_address`, text, not required): Enter the shipping address for your order.
* **shipping_city** (`shipping_city`, text, not required): Enter the city for shipping.
* **shipping_state** (`shipping_state`, select_one, not required): Choose the shipping state (Alabama, Alaska, Arizona, etc.).
* **shipping_zip** (`shipping_zip`, select_one, not required): Select the shipping zip (None, Other).
* **shipping_country** (`shipping_country`, text, not required): Enter the shipping country for international orders.
* **order_date** (`order_date`, date, not required): Specify the date for your custom notebook order.
* **special_instructions** (`special_instructions`, text, not required): Enter special instructions for your custom notebook order.
* **delivery_method** (`delivery_method`, select_one, not required): Choose a delivery method for your order (Ground, Air, Express).
* **delivery_date** (`delivery_date`, date, not required): Specify the date for delivery.
* **customer_note** (`customer_note`, text, not required): Enter any customer note.
* **assigned_to** (`assigned_to`, select_one, not required): Assign the order to chatjimmy or default.
